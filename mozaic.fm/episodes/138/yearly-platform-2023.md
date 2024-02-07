---
type: podcast
tags: ["yearly platform"]
audio: https://files.mozaic.fm/mozaic-ep138.mp3
published_at: 2023-12-26
guest: [@myakura](https://twitter.com/myakura)
---

# ep138 Yearly Platform 2023

## Theme

第 138 回のテーマは 2023 年を振り返る Yearly Platform です。


## Show Note

### 今年の mozaic.fm

- 5月: 大規模ライブ配信
- 6月: Coinhive
- 9月: Drive Talk
- 8月: Monthly Ecosystem 1 周年


### 2023 年チェックポイント

- Style Query
- CSS scope
- Apple のブラウザエンジン制限
- User-Agent reduction completion
- Winter CG の今後
- Figma 買収での Adobe 製品の今後
- Addon-gated と Permission


### 今年のキーワード

- Jxck
  - 次世代 CSS(scope, color, subgrid)
  - Navigation & Transition
  - Popover / inert
  - Baseline ?
  - Module Harmoney
  - Post Quantum 時代
  - Privacy Sandbox GA
  - AdSence で全画面広告増えた?
  - Passkey 普及
  - deprecating unload
  - ChatGPT と AI
  - OHTTP
  - Record/Tuples が白紙に戻りそう
  - Winter CG 活発化
  - Edge がどんどん使いやすく
  - RSS がどんどん消えていく
  - HTTPS Upgrades と Tune アイコン
  - 史上最大の DDoS だけど無傷
  - CSS for CJK
  - レイオフ
  - WebPackaging の終了と Shared Brotli + Zstd
  - オフラインイベント再開
  - Twitter -> X による分散
  - LastPass
- myakura
  - 実装された CSS
    - `:has()`
    - Nesting
    - Color Lv.4
    - `:nth-child(of S)`
    - subgrid
    - math functions
  - これからくる CSS
    - View Transitions
    - Scroll-driven Animations
    - `@scope`
    - margin-trim
    - text-wrap
    - text-autospace
    - text-box-trim
    - `@property`
    - light-dark()
    - style queries
  - View Transitions
    - View Transitions
    - `@starting-style`
    - display/content-visibility animations
    - overlay
  - UI 拡張
    - Popover
    - Invokers
    - selectlist
    - `<hr>` in `<select>`
    - `<input type=checkbox switch>`
    - `<details name>`
  - Web Components また揃ってきた
    - Declarative Shadow DOM
    - ARIA semantics
    - form-associated custom elements
  - (Progressive) Web Apps
    - iOS の Web Push サポート
    - iOS のウェブアプリインストール
    - Chrome の installability criteria 軟化
    - skip no-op sw fetch handler
    - Microsoft
  - レイオフや人材流動
  - パスキー
  - LLM
  - visionOS
  - 責められる Safari と Chrome
  - ブラウザ UI
    - Chrome の UI 機能
    - Edge の機能もりもり
    - Arc
  - プラットフォーム情報追いにくくなってきた
    - ブログという割に RSS がない
    - 脱 Twitter の流れ
    - スクレイプしにくい SPA なコンテンツサイト
  - deprecation
    - UA 文字列
    - 3PCD
    - Manifest V2
    - その他プラットフォームの負債


### 2024 年チェックポイント

- Module Harmoney
- Shared Dictionary Transport without Yoav
- Baseline
- OHTTP/DoH/ECH/over QUIC/MLS などですべの暗号化が終わったあとの管理や保安の話
- CookieBis
- Apple のブラウザエンジン規制
- DOMParts + Module Harmoney = WebComponents 元年 v6 ?
- Navigation API
- Manifest v3 移行と AdBlocker どうなるのか
- light-dark() / CSS Color v4
- Record/Tuple なくなっちゃうの?
- FedCM 普及しそう?
- ShadowRealm と HTML のインテグレーション
- 宣言的 HTML UI 拡張さらに進むか?
- CSS 進化の受け入れられ方(`@scope` etc.)
- View Transitions
- 3PCD


### 1 月

- Chrome
  - 108
    - new viewport size units
    - COLRv1 variable fonts
    - change FileSystemAccessHandle methods to sync
  - 109
    - MathML Core
    - OPFS on Android
    - CSS lh unit
  - Ship
    - Network State Partitioning
    - Style Container Queries for Custom Properties
    - Non-transitional IDNA processing
    - WebGPU
    - Selectors Level 4 `:nth-child()`
    - String isWellFormed/toWellFormed
    - CSS Nesting
    - Streaming Declarative Shadow DOM
    - View Transitions for Single-page apps
    - UA Reduction Phase 6 (Android version/deviceModel reduction)
    - as=fetch in navigation early hints preload
  - Prototype
    - HTTPS Upgrades
    - remove prefetch 5-min rule
    - Priority header
  - Experiment
    - Document PiP
  - Deprecate and Remove
    - X-Requested-With in WebView
    - Shortened IPv4 URL
  - other intents
  - web.dev
    - Interop 2022 wrap-up
    - Learn Accessibility
  - Google Developer Blog
  - Chrome Developers
    - Origin trial for Accept-Language reduction
    - Syntax poll on CSS Nesting
    - Early Stable from Chrome 110
    - Cookie Expires/Max-Age upper limit (400 days)
  - Chromium blog
  - other blogs
  - other
- Firefox
  - 108
    - CSP style-src-enum etc.
    - Import Maps
    - addon gated WebMIDI
  - 109
    - scrollend event
  - Ship
    - CSS @page
    - always partition storage
    - size container queries
  - Prototype
    - WebGPU
  - other intents
  - other
    - frozen UA string `rv:109` for Firefox 110-119
    - Servo to advance in 2023 (Igalia)
- Safari
  - TP159
    - bug fixes
  - Safari16.2
    - Interop2022
    - Font Features
    - Last Baseline
  - TP160
    - Media Queries range syntax
    - resizable ArrayBuffer
    - Atomics.waitAsync
    - generator support for async iterable
    - String.isWellFormed/toWellFormed
    - UserActivation API
  - TP161
    - WebCodecs AV1
    - Unprefixed Fullscreen
    - 2D OffscreenCanvas
    - Iframe depth limit to 32
    - @property support
    - CSS Typed OM
    - :use-invalid/:user-valid
    - RegExp look behind assertion
  - Safari 16.3
    - bug fixes
    - CSP prefetch-src
  - TP162
    - CSS Nesting
    - CSS relative color syntax
    - CSS margin-trim property
    - Declarative Shadow DOM
    - Form-associated custom elements
    - Default ARIA for custom elements
  - blog
    - Nest syntax の選択肢の紹介
  - other
- Edge
  - MS 1 万人レイオフ
  - Selector のパフォーマンスデバッグ方法
  - Eric 先生の攻撃方法講座
  - Root Store が同梱される話
  - 新しいウィンドウ分割機能が便利そう
- W3C/WHATWG
  - other
    - Jeff Jaffe step down as CEO
    - TAG election
    - AB election
    - W3C Inc.
    - :has() selectors list changed to unforgiving parsing
      - jQuery 3.6.2 and 3.6.3
- TC39
  - 262 Temporal の Prototype を 402 が拡張して良いのか問題
  - Modules Harmony という計画があるらしい
  - Record/Tuples の費用対効果が合わないと白紙に戻りそう
- IETF
  - IETF116 横浜の予習
  - mikewest/baseline-header
- CDN 動向
  - Cloudflare の State of HTTP in 2022
  - Cloudflare の教育機関への攻撃が増えている話
  - Akamai Japan の HTTP header 内の RFC 違反文字扱いについて
  - Akamai の Alexa 代替 AkaRank
  - Akamai の CWV 改善シリーズ
- セキュリティ動向
  - LastPass / Slack / Circle CI / Twitter / Paypal 内で相次いでインシデント
  - Emily の dead line of death の話
- 周辺動向
  - Abema の Worldcup の構成
  - mnot が Law School を卒業
  - Igalia が MathML を Chromium に実装した話
  - デジタル庁 a11y ガイドブック
  - skeb_jp の heroku 障害? と対応
  - Meta に GDPR 違反で 547 億円罰金
  - Meta が取り組むグローバルネットワーク最適化の話


### 2 月

- Chrome
  - 110
    - :picture-in-picture
    - iframe credentialless
  - DevTools 110
    - Clearing Performance Panel on reload
  - 111
    - new CSS color features
    - :nth-child( of S )
    - Style container queries for Custom props
    - Streaming Declarative Shadow DOM
    - View Transitions API
    - Document Picture-in-Picture Origin trial
  - DevTools 111
    - evaluating expressions with private class members
  - Ship
    - CSS overflow/update media features
    - CSS headline balancing
    - change beforeunload handler dialog condition
    - Headers.getSetCookie()
    - remove Authorization header upon cross-origin redirect
    - Least Restrictive CSP (prefetch-src removal)
  - Prototype
    - CSS top-layer property
    - Long Animation Frame Timing (LoAF)
    - Interoperable Private Attribution (by Meta)
  - Experiment
  - Deprecate and Remove
    - CSP block-all-mixed-content directive
    - CSP prefetch-src directive
    - `shadowroot` attribute
  - other intents
    - iframe render throttling
  - web.dev
    - Interop 2023
    - Learn Images/Privacy/HTML
  - Google Developer Blog
    - TrustCor revocation
    - Chromium + Rust
  - Chrome Developers
    - soft navigation
    - CrUX History API
    - Style Quereis
    - UA reduction
    - CSS anchor positioning
    - Lighthouse 10 (TTI → CLS)
  - Chromium blog
  - other blogs
  - other
    - remove navigation to web-bundles
    - Root Program Policy 更新
- Firefox
  - 110
    - Container Queries (size)
    - AsyncIterator on ReadableStream
  - Ship
    - `forced-color-adjust`
    - `linear()` easing function
  - Prototype
  - other intents
  - other
    - SpiderMonkey で Import Maps の解説
    - MDN と Open Web Docs ミーティング
- Safari
  - TP 163
    - CSS Masonry layout
    - unforgiving `:has()`
    - CSS `leading-trim`
    - ARIA for Custom Elements
  - TP 164
    - Disabled Import Assertions
    - `Clear-Site-Data`
  - Safari 16.4 Beta
    - CSS
      - `:user-valid`/`:user-invalid`
      - `margin-trim`
      - `@property`
      - Media Queries range syntax
      - Typed OM
    - Custom Elements
      - Declarative Shadow DOM
      - ElementInternals
    - JavaScript
      - RegExp lookbehind assertions
      - Array.fromAsync
      - Array.group
      - import.meta.resolve()
      - String.isWellFormed
      - Import Maps
    - HTML lazyloading iframes
    - `Clear-Site-Data`
    - AVIF on Monterey/Big Sur
    - Web API
      - 2D OffscreenCanvas
      - Scroll to Text Fragment
      - Compression Streams
      - Reporting API
      - User Activation API
      - Web Push for iOS
      - Badging API
  - blog
    - iOS 16.4 の Web Push について。ホーム追加必須など
    - Interop 2023 の紹介
    - Declarative Shadow DOM の解説
    - User Activation API の解説
  - other
    - Alex Russel による Safari 16.4 への Admission ブログ
- Edge
  - Edge のサイドバーに Bing チャットを埋め込む
  - Interop のアナウンス
  - .office が HSTS Preload に入り MS の Intra サイトが壊れた話
  - Eric Lawrence 先生の半生ブログ
- W3C/WHATWG
  - Spec
    - CSS Box Model Module Lv3
  - Other
    - 新しい W3C サイトのベータ公開
    - Permission Workshop のレポート
    - 台湾デジタル発展部が W3C 参加
- TC39
  - import assertion の assert が取得方法を定義してないことにより見直しで Stage 2 に down
  - Prototype 汚染を防ぐために文字列アクセスできなくするモードの提案
  - コンセンサスの取り方の見直しとドキュメント化
- IETF
  - やり方の見直し
- CDN 動向
  - 1.1.1.1 での Rust / WASM の利用
  - Cloudflare と Fastly が Fediverse の話
  - Fastly が GoDaddy と Cross Root で CA 参加
- セキュリティ動向
  - ソースネクストでの Web スキミングによる漏洩報告と解説
- 周辺動向
  - Hixie による新しい Web 技術スタック(ほぼ Flatter for Web)の話
  - ShadowDOM によるアクセシビリティ支援技術の影響について
  - Brave に入る HTTPS by Default 機能と、非対応ドメインリストについて
  - img 要素が提案されてから 30 年経った
  - mnot 先生による meta への「Platform を作るのは簡単じゃないよ」って話


### 3 月

- Chrome
  - 111
    - View Transitions API
    - CSS Color Level 4
  - 112 Beta
    - CSS Nesting
    - FormData `submitter`
    - RegExp `v` flag
    - Skip SW noop fetch handler
  - Ship
    - First-party Sets
    - Storage Access API
    - requestStorageAccessFor
    - Private State Tokens
    - Skip service worker no-op fetch handler
    - Popover
  - Prototype
    - CSS leding-trim
    - Compression dictionary transport with Shared Brotli
    - `popover="hint"`
  - other intents
    - gradually skip unload events
  - Google Developer Blog
    - I/O 2023
  - Chrome Developers
    - SPA View Transitions
    - OHTTP relay for FLEDGE with Fastly
    - Web SQL to SQLite Wasm
- Firefox
  - 111
    - OPFS
    - FormData `submitter`
  - Ship
    - Change array by copy
    - inert
    - `:nth-child( of S)`
    - CSS Color Level 4
  - Prototype
    - Async Clipboard API read/write/readText
    - prefers-reduced-transparency
    - CSS Custom Highlight API
  - other
    - Mozilla.ai
- Safari
  - TP 165
    - `text-transform: full-size-kana`
    - CSS `image-set()`
    - `Headers.getSetCookie()`
    - `link rel="modulepreload"`
  - TP 166
    - CSS `@counter-style`
    - `contain-intrinsic-size`
    - Popover
    - `preconnect` via Early Hints
- Edge
  - How Microsoft Edge Updates - text/plain
  - Taking control of your application's title bar
  - Video super resolution in Microsoft Edge
- W3C/WHATWG
  - Spec
  - other
    - popover 属性で壊れるサイト発覚
    - `<search>` element 追加
    - Secure the Web Forward workshop 開催告知
    - URL.canParse()
- IETF
- TC39
- WinterCG
  - AsyncContext の Proposal が tc39 に
  - GetSetCookies が Webkit/Chromium に
- CDN 動向
  - Cloudflare: ポスト量子暗号を永久無料提供
  - Cloudflare: Security Week 20223
  - Cloudflare: TLS の Domain Control Validation を肩代わりする機能
  - Fastly: OHTTP と Fledge のブログ
- セキュリティ動向
- 周辺動向
  - Intent2Ship bot の中の人が twitter 垢 BAN された


### 4 月

- Chrome
  - 112
    - CSS Nesting
    - Skipping service worker no-op fetch handlers
  - 113
    - CSS linear() easing function
    - CSS image-set()
    - Headers.getSetCookie()
    - WebGPU
    - Private State Token
    - deprecate document.domain
    - First-party Sets
  - 114 Beta
    - CSS `text-wrap: balance`
    - BFCache NotRestored Reason
    - CHIPS
    - Popover
    - Background Blur API Origin Trial
  - DevTools 113
    - override network response headers
  - Ship
    - CSS `display` with multiple values
    - Partitioning Storage, Service Worker, Communication APIs
    - Scroll-driven Animations
    - URLSearchParams.has() value argument
    - Regexp v flag for HTML pattern
  - Prototype
    - Detect/Disable UA transitions
  - Experiment
    - Explicit Compile Hints with Magic Comments
    - Storage Buckets API
    - "is-cross-site" HTTP Cache Partitioning key
  - Deprecate and Remove
    - CSS zoom property
    - Remove Web SQL
    - deprecate unload event
  - web.dev
    - INP
    - Baseline
  - Chrome Developers
    - CSS layout and source order
  - Chromium blog
    - update on the lock icon
  - other blogs
    - INO to CWV in 2024
    - new TLDs
  - other
    - Jake Archibald leaving Google
- Firefox
  - 112
    - right click to reveal password
    - inert
    - CSS math functions
    - CSS linear()
  - 113
    - Animated AVIF
    - CSS Level 4 color features
    - CSS color-mix()
    - :nth-child(of S)
    - scripting media feature
    - Compression Streams
  - Ship
    - Module Workers
    - rel=modulepreload
  - Prototype
    - String.isWellFormed()
    - Array.fromAsync
    - DNS over OHTTP
    - Font visibility restrictions in Private Browsing Mode
  - other
    - MDN blog
- Safari
  - 16.4
    - Web Push on iOS
    - PWA improvements
    - Declarative Shadow DOM
    - CSS Color features
    - Media Queries Range syntax
    - @property
    - iframe lazy-loading
  - 16.5 Beta
    - CSS Nesting
  - TP 167
    - CSS Nesting
    - Priority Hints
    - Response.json()
  - TP 168
    - CSS Nesting serialization
    - @supports font-format()
    - URL.canParse()
  - TP 169
    - customElements.getName()
  - blog
    - WebKit Documentation
  - other
    - fantasai → Apple
- W3C/WHATWG
  - other
    - seeking next CEO
    - AB election
    - Interop minutes
- TC39
  - 2023/3 meeting
  - Iterator Helpers が三つに分割
  - Decorator Metadata Update
  - Import assertions が attributions に
  - RegExp escape を template tag に
  - Type Annotation を型チェックしたいが反対多数
  - Await Dictionary
  - Promise.withResolvers
- WinterCG
  - AbortSignal.any()
  - ReadableStream.from(asynciterable)
- IETF
  - IETF116
    - Cookiebis が WGLC 間近
    - Alt-Svc の DNS 版が必要そう
    - Resumable Uploads のエラー周り
    - Sidemeeting で Dictionary Compression
- CDN 動向
- セキュリティ動向
  - RSA Conference
- 周辺動向
  - IPA サイト 404
  - Open Web Docs の API 名 rename
  - ARIA 版の caniuse


### 5 月

- Chrome
  - Ship
    - HTTPS Upgrades
    - AbortSignal.any()
  - Prototype
    - CSS Scrollbars
    - Protected Audience Bidding
    - Enrollment for Privacy Sandbox
  - Experiment
  - Deprecate and Remove
    - Mutation Events
  - other intents
    - Ready for trial Bounce Tracking Mitigations
    - 3P Cookie deprecation for 1% of Chrome Stable starting Q1 2024
  - web.dev
    - deploying AVIF
  - Google Developer Blog
  - Chrome Developers
    - preparing to ship Privacy Sandbox
    - What's new with Aurora
    - Popover
  - Chromium blog
  - other blogs
    - Q1 2023 Summary from Chrome Security
    - Trust Services ACME API
    - Chrome Root Program
  - other
- Firefox
  - Ship
    - Array.fromAsync
    - animation-composition
    - CSS imports supports conditions
  - Prototype
  - other intents
  - other
    - Firefox Developer Experience blog
    - Gecko port for iOS?
- Safari
  - Safari 16.5
    - Nesting
    - CSS :user-valid and :user-invalid
  - Safari 16.6 Beta
    - bug fixes
  - TP 170
    - bug fixes
  - blog
  - other
- Edge
  - Build 2023
  - New TLDs not bad
- W3C/WHATWG
  - Spec
    - WCAG 2.2 CR
  - other
    - GAAD 2023
- TC39
- WinterCG
- IETF
  - httpwg
    - SFbis の WGLC
      - ただし Unicode を入れるかで揉める
    - proxy-status の WGCL
  - tlswg
    - TLS1.3bis の WGCL
    - IANA TLS Registory update で deprecate 列がつくのの WGLC
  - ohai
    - SVCB で OHTTP アドバタイズ WGCL
  - httpapi
    - link-template が WGCL
    - yaml-mediatype が WGCL
  - Martin が IETF の Nomcom に
- CDN 動向
  - Cloudflare が OSS Sponsor Ship の枠を広げる
- セキュリティ動向
- 周辺動向
  - 改正電気通信事業法 6 月から実施


### 6 月

- Chrome
  - 114
    - text-wrap: balance
    - CHIPS
    - Popover
    - DevTools DWARF
  - 115 Beta
    - Scroll-driven Animations
    - HTTPS upgrades
    - Storage Partitioning
    - Long Animation Frames OT
    - Storage Buckets API OT
    - Deprecate document.domain
    - DevTools
  - Ship
    - @scope
    - Subgrid
    - Document Picture-in-Picture
    - Iterator Helpers
    - Protected Audience
    - Attribution Reporting
    - Fenced Frames
    - Private Aggregation API
    - Topics API
    - text-wrap: pretty
  - Prototype
    - DOM Parts
    - Service Worker Static Routing
    - Zstd Content-Encoding
  - Experiment
    - EditContext API
  - Chrome Developers
    - Chrome for Testing
  - other
    - Popover breakage
    - Understanding passkeys video
- Firefox
  - 114
    - -webkit-text-security
    - Module Workers
  - Ship
    - Improved CSS Nesting
    - URL.canParse()
  - Prototype
    - WebCodecs
    - FedCM
    - allow beforeunload to enter BFCache
  - other
    - EKR leaving Mozilla for CDC
- Safari
  - 17 Beta
    - `<hr>` inside `<select>`
    - `<model>`
    - Popover
    - HEIC
    - JPEG XL
    - Storage Quota API
  - blog
    - WWDC
- Edge
  - Passkeys support in Windows 11 Insider
- W3C/WHATWG
  - Spec
    - WAI-ARIA1.2 Recommendation
    - Web Share API Recommendation
  - other
    - TimBL は Founding Director の名誉職に
    - New Web site deployed
- TC39
  - Well-Formed Unicode Strings for Stage 4
  - Atomics.waitAsync for Stage 4
  - RegExp v flag for Stage 4
  - Uint8Array to Base64 の Stage2
  - Modules 周りを整理する Module Harmony の作業開始
  - Array.prototype.group を Map/Object の Static にして Stage 2 にダウン
  - Source Map 作業をする TG4 を TC39 以下に作成
  - Import-Reflection を Source Phase に Rename し Harmony で整理
- WinterCG
  - Raise the discussion about formal support of wintercg by Node.js (@jasnell)
  - Add WebAssembly JavaScript API to the Minimum common API (@andreubotella)
  - Add import.meta.url and import.meta.resolve to the Minimum common API
- IETF
  - サーバから Private Mode を適用する Request-OTR by Brave
  - スノーデン事件から 10 年のまとめ
- CDN 動向
  - Cloudflare
    - Introducing HTTP/3 Prioritization
    - Examining HTTP/3 usage one year on
    - INP. Get ready for the new Core Web Vital
  - Akamai
    - OWASP Top 10 API Security Risks: The 2023 Edition Is Finally Here | Akamai
- セキュリティ動向
  - 1Password に Passkey 対応
  - 「通信の秘密の保護」に制限検討 サイバー攻撃への対処、政府が強化 [岸田政権]:朝日新聞デジタル
  - 総務省|報道資料|電気通信事業法の一部改正(卸協議の適正性の確保に係る制度整備関係)に係る関係ガイドラインの改定
- 周辺動向
  - Google Domains が Squarespace に事業譲渡
  - Web Engines Hackfest 2023 Starts Monday | Igalia
  - モバイル・エコシステムに関する競争評価 最終報告(案)


### 7 月

- Chrome
  - 115
    - Scroll driven animations
    - Privacy Sandbox Ads API
  - 116 Beta
    - display and content-visibility animations
    - BFCache NotRestoredReason API
    - Document PiP
    - Wildcards in Permission-Policy origins
  - Ship
    - Array grouping
    - BFCache NotRestoredReason API
    - prefers-reduced-transparency
    - Permissions-Policy: unload
  - Prototype
    - CSS CJK enhancements (text-autospace, line breaking)
    - Screen Capture enhancements (Captured Surface Control, Element Capture)
    - fetchLater()
  - Experiment
    - Compression dictionary transport with Shared Brotli
    - HTTPS Upgrades
    - ServiceWorker static routing API
    - Zstd Content-Encoding
  - web.dev
    - Yahoo Japan BFCache
  - other blogs
    - Chrome's security review culture
  - other
    - Web Environment Integrity on fire
- Firefox
  - 115
    - link rel=modulepreload
    - Array.fromAsync()
    - Change array by copy
    - URL.canParse()
  - Ship
    - RTCRtpScriptTransform (Insertable Streams)
  - MDN Blog
    - Responsibly empowering developers with AI on MDN
  - other
    - MDN AI に関する批判 issue
    - Messaging Layer Security is now an internet standard
- Safari
  - TP174
    - `contain-intrinsic-size: auto none`
    - WebCodecs temporal scalabilityMode for software codecs, including parsing and error handling
    - WebM files with no track ID
  - TP175
    - WebCodecs HEVC support
    - support for priority to CSS Highlight API
    - Aligned `<script type language>` with the HTML Standard (265977@main)
  - Position
    - exclusive accordions with `<details name="">`
    - Removing the zoom CSS property
    - Content-type in Resource Timing
- Edge
- W3C/WHATWG
  - Spec
    - WCAG 2.2 is a W3C Proposed Recommendation
  - other
    - Vision for W3C
    - domfarolino/observable
    - WC F2F DOM Parts - Summer 2023 - Google Docs
    - Do we need WCAG 3 (now)? · Eric Eggert
- TC39
- WinterCG
- IETF
  - RFC9440 Client-Cert HTTP Header Field
  - WebRTC-HTTP ingestion protocol Last Call
  - JSONPath Last Call
- CDN 動向
  - 2023 年第 2 四半期インターネットの混乱のまとめ
- セキュリティ動向
- 周辺動向
  - ニンテンドーでブラウザ開発者募集
  - Vivaldi から WEI へのコメント


### 8 月

- Chrome
  - 116
    - Document Picture-in-Picture
  - 117 Beta
    - `@starting-style`, `overlay`, `transition-behavior`
    - Subgrid
    - `text-wrap: pretty`
    - Array grouping
    - Iteerator helpers
    - deprecate `unload`
  - Ship
    - vertical form controls
    - `<search>`
    - Bounce Tracking Mitigations
    - Japanese phrase line breaking
  - Prototype
    - Document Render-Blocking
    - CJK punctuation kerning
    - Sticky state container queries
    - Page-Embedded Permission Control
    - `form-sizing`
  - Experiment
    - X25519Kyber768 for TLS
  - Deprecate and Remove
    - Sanitizer API MVP
  - Chrome Developers
    - deprecating `unload`
    - `scheduler.yield` origin trial
    - Astro View Transitions
    - Faster Chrome releases round two
    - First-Party Sets → Related Website Sets
  - Chromium blog
    - redesigning downloads UI
    - Hybrid Kyber KEM
    - towards HTTPS by default
  - other blogs
    - faster security updates
    - Key Pinning to Android
  - other
    - Chrome Security Q2 summary
- Firefox
  - 116
  - 117
    - CSS Nesting
  - Ship
    - ORB
    - `<search>`
  - Prototype
    - `:has()`
    - Global Privacy Control
  - other intents
    - Encrypted Client Hello
  - MDN Blog
    - MDN front-end developer curriculum
  - other
    - positive on X25519Kyber768
    - ekr on WEI and Private Access Tokens
- Safari
  - TP 176
    - `linear()`
    - `title` for form pattern validation errors
  - TP 177
  - blog
    - updates to Storage Policy
  - other
    - negative on Customized built-in elements
    - support on View Transitions Level 1
- Edge
  - Edge のよくあるご質問
- W3C/WHATWG
  - other
    - Service Worker Static Routing incubation
    - WEI and W3C Process
    - `<input type="checkbox" switch>` proposal from Apple
    - Interop 2024 timeline
- TC39
  - Stage 3 updates on Intl Locale Info API
  - Stage 2 ¾
  - Stage 3 meta-reviews
- WinterCG
  - `import.meta.*` standardization
- IETF
  - OHTTP to Proposed Standard
  - Request-OTR
  - RFC numbers for testing/example
- CDN 動向
  - Cloudflare 2023 phishing report
- セキュリティ動向
  - Meta on short-lived certificates
- 周辺動向
  - 10 years anniv of Let's Encrypt


### 9 月

- Chrome
  - 117
    - entry/exit animations
    - array grouping
    - Subgrid
  - 118 beta
    - @scope
    - media queries: prefers-reduced-transparency/scripting
    - Enrollment for Privacy Sandbox
  - Ship
    - :user-valid/:user-invalid
    - `<search>`
    - Japanese Phrase Line Breaking
    - ECH
    - `<hr>` in `<select>`
    - Promise.withResolvers
    - unprefix `-webkit-background-clip: text`
    - Close Watchers
  - Prototype
    - `text-spacing-trim`
    - Page-Embedded Permission Control
    - Sec-CH-UA-Form-Factor
    - `form-sizing`
    - select.showPicker()
    - Canvas Mesh2D
    - Observable API
    - `firstrender` event
    - Device Bound Session Credentials
  - web.dev
    - Interop 2024 proposals
    - Subgrid
  - Google Developer Blog
    - BudouX
  - Chrome Developers
    - Chrome for Developers
    - View Transitions case studies
  - other
    - Gmail Basic HTML gone in 2024
- Firefox
  - 118
    - `<search>`
    - CSS math functions
    - ORB
  - Ship
    - ARIA reflection
    - Array Grouping
  - Prototype
    - `text-wrap: balance`
    - Scroll to Text Fragment
    - Early Hints
    - CSS `zoom`
  - other
    - positive on URLPattern
- Safari
  - TP 178
    - Import Attributes
    - Fetch Priority
    - requestIdleCallback
    - Cookie Store API
  - 17
    - `@counter-style`
    - media query `scripting`
    - `<hr>` in `<select>`
    - `<model>`
    - `<search>`
    - Popover API
    - HEIC/HEIF
    - JPEG XL
    - RegExp named capture groups/ v flag
    - new Set methods
    - 3D OffscreenCanvas
    - `<link rel="modulepreload">`
    - Web Apps in Sonoma
  - TP 179
    - CSS `cap` unit
    - CSS Nesting parsing relaxed
    - `<details name>` exclusive accordion
  - blog
    - CSS Nesting relaxed / hoisting
  - Standard Position
    - form-sizing
    - Scroll-driven Animations
    - text-wrap: balance
    - scrollbar-color
    - Sanitizer API
    - dialogmodaltarget attr withdrawn
  - other
- Edge
- W3C/WHATWG
  - TPAC
    - Unique Origins
    - Source Code Transparency
    - Page Embedded Permission Control (`<permission>`)
    - Compression Dictionaries
    - CSS での Soft Navigation
    - WebComponents 周りの更新
  - other
    - headinglevelstart attr
    - DeclarativeWebPush
    - Specification Acceptance Stage
    - Interop2024 Call for Proposals
- TC39
- WinterCG
- IETF
  - qpack_static_table_version
  - .alt Top Level Domain
  - IETF Chair 雇用主事情で退任
- CDN 動向
  - Cloudflare
    - Cloudflare Fonts
    - Post-quantum Crypto GA
    - ECH
  - Fastly
    - CA 開始
- セキュリティ動向
  - LastPass の現状
  - Passkey 対応進む
    - 1password
    - GitHub
    - D アカウント
    - Windowns 11
  - ドコモ口座ドメインオークション
- 周辺動向
  - State of HTML
  - Molly Holzschlag 追悼


### 10 月

- Chrome
  - 118
    - @scope
  - 119
    - :user-valid/:user-invalid
    - CSS Relative color syntax
    - Replace dangling markup in target to _blank
    - Standard compliant URL
    - Remove WebSQL
    - Remove Sanitizer API V0
  - Ship
    - details name
    - Relaxed CSS Nesting
    - WebGPU f16
    - CSS scrollbar-width/scrollbar-color
    - CSS Ruby display values
    - Array.fromAsync
    - source media
    - URL.canParse
  - Prototype
    - Invokers
    - Verifying IPFS client
    - Web Printing API
  - Experiment
    - Priority header
    - IP Protection Phase 0
    - Cookie deprecation labeling
  - Deprecate and Remove
    - Theora
  - web.dev
    - インフラが変わった
    - 機械翻訳が導入された
  - Chrome Developers
    - Chromium issue tracker migration
    - 3rd-party Cookie 終了への準備
  - Chromium blog
    - TLS certificate automation
  - other
    - Passkeys enabled by default for Google users
    - HTTPS Upgrades で壊れる(艦これ、さくらで公開しているサイト)
- Firefox
  - 119
    - Array grouping
    - ARIA reflection
  - Ship
    - text-wrap: balance
    - Early Hints preconnect
    - Global Privacy Control
    - lh/rlh
    - User Activation API
    - iframe lazy loading
    - light-dark()
  - MDN Blog
    - Secure the Web Forward に OWD 参加
    - ドイツ政府系の Sovereign Tech Fund からの援助で BCD を更新していく
    - Web Sustainability
  - Standard Position
    - hr in select
    - select.showPicker()
    - Relative Color Syntax
    - Zstandard
    - Fetch streaming upload
    - Storage Buckets API
  - other
    - ECH
    - OHTTP
- Safari
  - TP 181
    - content-visibility
    - autocomplete="one-time-code"
  - Safari 17.1
    - Managed Media Source API
  - blog
    - Interop 2024
    - Responsive Design Mode
  - Standard Position
    - CSS Ruby
    - Navigation API
    - negative to Compute Pressure API
    - negative to Web Preferences API
  - other
- Edge
  - Teams が WebView2 ベースに
  - Microsoft Store が React から Lit に
  - DoH/ECH によるプライバシーの向上でセキュリティ製品の管理が難しくなっている by ericlaw
- W3C/WHATWG
  - Spec
    - WCAG 2.2 Rec
  - other
    - Web Security Lead 募集中
    - URLPattern が WHATWG に
- TC39
  - Float16Array が Stage 3 に
- IETF
  - RFC 9474 RSA Blind Signatures
  - RFC 9484 Proxying IP in HTTP
- CDN 動向
  - 1.1.1.1 障害
  - HTTP/2 Rapid Reset
- セキュリティ動向
  - Let's Encrypt はフィッシングという残念な記事
  - HTTP/2 Rapid Reset
- 周辺動向
  - 登さんのインターネット入門
  - Chrome の パスキーが iCloud Keychain に


### 11 月

- Chrome
  - 119
    - Cookies expiration date
  - 120 beta
    - scripting media feature
    - CSS exponential functions
    - relaxed CSS nesting
    - close watcher
    - WebGPU f16
    - FedCM Login status
  - Ship
    - EditContext
    - Remote Playback
    - Storage Buckets API
    - Lazy load scroll margin
  - Deprecate and Remove
    - Deprecate 0.0.0.0 for Private Network Access
    - import assertions
    - third-party cookies
  - web.dev
    - Yahoo! JAPAN on passkeys
  - Chrome Developers
    - Manifest V3
    - third-party cookie deprecation trials
- Firefox
  - 120
    - copy link without site tracking
    - GPC
    - light-dark()
    - lh/rlh
  - Ship
    - :has()
    - Promise.withResolvers()
    - LCP
  - Prototype
    - Invokers
  - other
    - moving to Git
    - Firefox getting faster
- Safari
  - TP 182
  - TP 183
    - text-wrap: balance
    - ArrayBuffer.transfer
  - Standard Position
    - positive on
      - COEP credentialless
      - hidden=until-found
      - URLPattern
      - Wildcard in Permission Policy Origins
      - Navigation API
- W3C/WHATWG
  - other
    - TAG election
    - Martin on TAG reviews
    - link rel="privacy-policy"
- TC39
  - ShadowRealm がんばる
  - Type Annotations
  - Decimal ナーフ
  - !in/!instanceof
  - Stage 2 と 3 の間
- IETF
  - IETF118 プラハ
  - tls
    - Post-Quantum の話が多い
    - ECH もうすぐ WGLC
    - PQ のために DNS でサーバの supported_group/key_share を知りたい
    - Multi Certificate
  - quic
    - Multipath QUIC
    - Reliable Stream Resets
    - QUIC Address Discovery
    - NAT Traversal
  - httpwg
    - QUIC Static Table Version TLS extention
    - Reverse HTTP Transport
  - mnot 先生怒りのブログ 2 作
  - httpbisGPT
- CDN 動向
  - Fastly Yamagoya 2023
- セキュリティ動向
  - LINE ヤフー個人情報漏洩
- 周辺動向
  - Hixie Google 退職
  - State of JS 2023 開始