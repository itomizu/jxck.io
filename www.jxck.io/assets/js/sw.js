'use strict'
EventTarget.prototype.on  = EventTarget.prototype.addEventListener
EventTarget.prototype.off = EventTarget.prototype.removeEventListener
/**
 * 同じ VERSION であれば、キャッシュにないものだけ追加する
 * VERSION を変えると、あたらしく作り追加する
 */
const VERSION       = 'v0.5.21'
const CACHE_GENERAL = `${VERSION}.general`
const CACHE_MP3     = `${VERSION}.mp3`
const log = console.debug.bind(console)
log('sw.js')

// Service Worker
async function worker() {
  log('worker()', self)

  const ASSETS = [] // temporary disable cache
  // revalidate したいものは no-cache
  //const ASSETS = [
  //  // episodes
  //  // {url: 'https://mozaic.fm/episodes/0/introduction-of-mozaicfm.html', option: {cache: 'no-cache'}},

  //  // fonts
  //  {url: 'https://mozaic.fm/assets/font/NotoSansCJKjp-Regular-Jxck-20200407.woff2',     option: {}},
  //  {url: 'https://mozaic.fm/assets/font/NotoSansCJKjp-Bold-Jxck-20200407.woff2',        option: {}},
  //  {url: 'https://mozaic.fm/assets/font/NotoSansMonoCJKjp-Regular-Jxck-20200407.woff2', option: {}},
  //  {url: 'https://mozaic.fm/assets/font/NotoSansMonoCJKjp-Bold-Jxck-20200407.woff2',    option: {}},
  //  {url: 'https://mozaic.fm/assets/js/highlight.pack.js',                               option: {}},

  //  // css
  //  {url: 'https://mozaic.fm/assets/css/body.css',    option: {cache: 'no-cache'}},
  //  {url: 'https://mozaic.fm/assets/css/article.css', option: {cache: 'no-cache'}},
  //  {url: 'https://mozaic.fm/assets/css/dialog.css',  option: {cache: 'no-cache'}},
  //  {url: 'https://mozaic.fm/assets/css/info.css',    option: {cache: 'no-cache'}},
  //  {url: 'https://mozaic.fm/assets/css/header.css',  option: {cache: 'no-cache'}},
  //  {url: 'https://mozaic.fm/assets/css/footer.css',  option: {cache: 'no-cache'}},
  //  {url: 'https://mozaic.fm/assets/css/main.css',    option: {cache: 'no-cache'}},
  //  {url: 'https://mozaic.fm/assets/css/mozaic.css',  option: {cache: 'no-cache'}},
  //  {url: 'https://mozaic.fm/assets/css/search.css',  option: {cache: 'no-cache'}},

  //  // svg
  //  {url: 'https://mozaic.fm/assets/img/jxck.svg',           option: {cache: 'no-cache'}},
  //  {url: 'https://mozaic.fm/assets/img/mozaic.svg',         option: {cache: 'no-cache'}},
  //  {url: 'https://mozaic.fm/assets/img/podcast.svg',        option: {cache: 'no-cache'}},
  //  {url: 'https://mozaic.fm/assets/img/itunes.svg',         option: {cache: 'no-cache'}},
  //  {url: 'https://mozaic.fm/assets/img/google-podcast.svg', option: {cache: 'no-cache'}},
  //  {url: 'https://mozaic.fm/assets/img/search.svg',         option: {cache: 'no-cache'}},
  //  {url: 'https://mozaic.fm/assets/img/share.svg',          option: {cache: 'no-cache'}},
  //  {url: 'https://mozaic.fm/assets/img/twitter.svg',        option: {cache: 'no-cache'}},

  //  // png
  //  {url: 'https://mozaic.fm/assets/img/mozaic.png',         option: {cache: 'no-cache'}},
  //  {url: 'https://mozaic.fm/assets/img/portal-preview.png', option: {cache: 'no-cache'}},

  //  // js
  //  {url: 'https://mozaic.fm/assets/js/mozaic-player.mjs',   option: {cache: 'no-cache'}},
  //  {url: 'https://mozaic.fm/assets/js/mozaic.js',           option: {cache: 'no-cache'}},
  //  {url: 'https://mozaic.fm/assets/js/sw.js',               option: {cache: 'no-cache'}},

  //  // template
  //  {url: 'https://mozaic.fm/assets/template/mozaic-player.html', option: {cache: 'no-cache'}},

  //  // other
  //  {url: 'https://mozaic.fm/manifest.webmanifest', option: {cache: 'no-cache'}},
  //]

  self.on('install', async (e) => {
    log('install > skipWaiting', VERSION, e)
    async function installing() {
      // VERSION に紐づいた Cache Store を開く
      // VERSION が上がると新しく作る
      const cache = await caches.open(CACHE_GENERAL)

      // すべて取得し直す、ただし revalidate しないものは store されたものがヒットするように
      const responses = await Promise.allSettled(ASSETS.map(({url, option}) => fetch(url, option)))

      // allsettled なので fulfilled だけに絞る
      // さらに 2XX 系の OK だけに絞る
      const fulfilled = responses.reduce((acc, {status, value}) => {
        log('res to be cached', value)
        if (status !== 'fulfilled') return acc
        if (value.ok !== true) return acc
        acc.push(value)
        return acc
      }, [])

      // cache 対象をキャッシュに追加
      await Promise.allSettled(fulfilled.map((res) => cache.put(res.url, res)))
      return skipWaiting()
    }
    e.waitUntil(installing())
  })

  self.on('activate', async (e) => {
    log('activate > claim', VERSION, e)
    async function clean_cache() {
      // 不要なストアの抽出
      const stores     = await caches.keys()
      const old_stores = stores
        .filter((store) => !([CACHE_GENERAL, CACHE_MP3].includes(store)))
        .map((store) => {
          log('remove cache table', store)
          return caches.delete(store)
        })

      // 一斉に削除
      const result = await Promise.allSettled(old_stores)
      log(result)

      return self.clients.claim()
    }
    e.waitUntil(clean_cache())
  })

  self.on('fetch', async (e) => {
    const req = e.request
    log(req)

    // safari は fetch(req) が Range だと
    // mp3 の duration が取れず Infinity になり壊れるので
    // audio/video は今はキャッシュしてない
    if (['audio', 'video'].includes(req.destination)) {
      log(`bypass ${req.destination}`)
      return
    }

    // cache then fetch
    async function fetching(req) {
      const res = await caches.match(req)
      log('cache match', res)
      return res || fetch(req)
    }
    e.respondWith(fetching(req))
  })

  self.addEventListener('periodicsync', (e) => {
    log('periodicsync', e)
    e.waitUntil(async function() {
      // const url = "https://files.mozaic.fm/mozaic-ep65.mp3"
      // const cache = await caches.open('periodic-background-sync');
      // return cache.add(url);

      const cache = await caches.open(CACHE_GENERAL)
      return cache.add('https://feed.mozaic.fm')
    }())
  })

  self.addEventListener('backgroundfetchsuccess', (e) => {
    console.log(e.type)
    e.waitUntil(async function() {
      try {
        // 結果を取り出す
        const id = e.registration.id
        const records = await e.registration.matchAll()

        // キャッシュ先
        const cache = await caches.open(CACHE_MP3)

        // キャッシュ対象
        const promises = records.map(async (record) => {
          const response = await record.responseReady;
          await cache.put(record.request, response);
        })
        await Promise.all(promises);

        // 通知
        await e.updateUI({title: `downloaded: ${id}`})
      } catch (err) {
        console.error(err)
        e.updateUI({title: `download failed: ${id}`})
      }
    }())
  })

  self.addEventListener('backgroundfetchfail', (e) => {
    console.error(e)
  })

  self.addEventListener('backgroundfetchabort', (e) => {
    console.error(e)
  })

  // download タスクをクリックした場合
  self.addEventListener('backgroundfetchclick', (e) => {
    console.log(e)
    e.waitUntil(async function() {
      const url = e.registration.id
      clients.openWindow(url)
    }())
  })
}
worker()
