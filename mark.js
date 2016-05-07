#!/usr/bin/env node

'use strict';

let path = require('path');
let url = require('url');
let fs = require('fs');
let parse = require('remark').parse;

// read template and trim
function read(path) {
  return fs.readFileSync(path).toString().trim();
}

// html special chars
function hsp(str) {
  return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
}

// tagged literal of hsp
function h(tag, val) {
  return `${tag[0]}${hsp(val)}${tag[1]}`;
}

// replace ' ' to '+'
function unspace(str) {
  return str.replace(/ /g, '+');
}

// tag を抜き出す
function Tags(filepath) {
  let text = read(filepath);

  // [foo][bar] の部分
  let tagtext = text.match(/\# ((\[(.+?)\])+)/)[1];
  // tag は必ず書く
  if (tagtext === undefined || tagtext.length === 0) {
    console.error('\x1b[0;31mThere is No TAGS\x1b[0m');
    process.exit(1);
  }

  // tag を本文から消す
  let md = text.replace(' ' + tagtext, '');

  // tag をリストに
  let tags = tagtext.substr(1, tagtext.length - 2).split('][');

  return { tags, md };
}

// Intro/Theme の中身を取り出す
function Description(text) {
  let intro = text.match(/## (Intro|Theme)(([\n\r]|.)*?)##/m)[2].trim();
  intro = intro.replace(/(\n|\r)/g, '');
  intro = intro.substring(0, 140) + '...';
  intro = hsp(intro);
  return intro;
}

const CSS = {
  ARTICLE: '/assets/css/article.css',
  BODY:    '/assets/css/body.css',
  INFO:    '/assets/css/info.css',
  HEADER:  '/assets/css/header.css',
  MAIN:    '/assets/css/main.css',
  FOOTER:  '/assets/css/footer.css',
  PRE:     '/assets/css/pre.css',
  TABLE:   '/assets/css/table.css',
}

function CatStyle(path) {
  return Object.keys(CSS).map((f) => {
    return `${path}/${f.toLowerCase()}.css`;
  }).map((f) => {
    return fs.readFileSync(f).toString();
  }).join('\n');
}

// tag ごとのビルダ
class Builder {
  constructor(option) {
    this.host = option.host;
    this.canonical = option.canonical;
    this.ampurl = option.ampurl;
    this.template = option.template;
    this.meta = option.meta;
    this.description = option.description;
    this.created_at = option.created_at;
    this.updated_at = option.updated_at;
    this.dir = option.dir;
    this.tags = option.tags;
    this.style = option.style;
    this.indent = option.indent;
    this.icon = option.icon;
    this.title = '';
  }
  get isAMP() {
    return !this.ampurl;
  }
  taglist() {
    return this.tags.map((tag) => `<a>${tag}</a>`).join(',');
  }
  wrap(tag, value) {
    // increase indent
    value = `\n${value}`.replace(/\n/gm, `\n${this.indent}`);
    return `${tag[0]}${value}\n${tag[1]}`;
  }
  Style(href) {
    return `<link rel=stylesheet property=stylesheet type=text/css href=${href}>`;
  }
  HTML(article) {
    this.article = article;
    this.meta = eval('`' + this.meta + '`');
    return eval('`' + this.template + '`');
  }
  root(node) {
    return this.wrap`${node.value}`;
  }
  article(node) {
    return this.wrap`<article>${node.value}</article>`;
  }
  section(node) {
    return this.wrap`<section>${node.value}</section>\n`;
  }
  list(node) {
    return node.ordered ? this.wrap`<ol>${node.value}</ol>\n` : this.wrap`<ul>${node.value}</ul>\n`;
  }
  heading(node) {
    let val;
    if (node.depth === 1) {
      // h1 の中身はタイトル
      this.title = node.value;
      // h1 だけは canonical にリンク
      val = `<h${node.depth}><a href=${this.canonical}>${this.title}</a></h${node.depth}>\n`;
    } else {
      // h2 以降は id を振る
      val = `<h${node.depth} id="${unspace(node.value)}"><a href="#${unspace(node.value)}">${node.value}</a></h${node.depth}>\n`;
    }
    return val;
  }
  code(node) {
    let lang = node.lang || '""';
    let value = `<pre class=${lang}><code>${node.value}</code></pre>\n`;
    if (!this.isAMP && !this.pred) {
      value = [this.Style(CSS.PRE), value].join('\n');
      this.pred = true;
    }
    return value;
  }
  table(node) {
    let value = this.wrap`<table>${node.value}</table>`;
    if (!this.isAMP && !this.tabled) {
      value = [this.Style(CSS.TABLE), value].join('\n');
      this.tabled = true;
    }
    return value;
  }
  thead      (node) { return this.wrap`<thead>${node.value}</thead>\n`; }
  tbody      (node) { return this.wrap`<tbody>${node.value}</tbody>\n`; }
  tableRow   (node) { return this.wrap`<tr>${node.value}</tr>\n`; }
  tableHead  (node) { return `<th class=align-${node.align}>${node.value}</th>\n`; }
  tableData  (node) { return `<td class=align-${node.align}>${node.value}</td>\n`; }
  paragraph  (node) { return `<p>${node.value}\n`; }

  // inline
  inlineCode (node) { return h`<code>${node.value}</code>`; }
  blockquote (node) { return h`<blockquote>${node.value}</blockquote>\n`; }
  listItem   (node) { return `<li>${node.value}\n`; }
  strong     (node) { return `<strong>${node.value}</strong>`; }
  emphasis   (node) { return `<em>${node.value}</em>`; }
  text       (node) { return node.value; }
  thematicBreak() { return '<hr>'; }

  link(node) {
    if (this.isAMP && node.url.match(/^chrome:\/\//)) {
      // amp page ignores chrome:// url
      return node.url;
    }
    return `<a href="${node.url}">${node.value}</a>`;
  }
  image(node) {
    let width = '';
    let height = '';

    let size = node.url.split('#')[1];
    if (size) {
      size = size.split('x');
      if (size.length == 2) {
        width = `width=${size[0]}`;
        height = `height=${size[1]}`;
      }
    }

    // AMP should specify width-height
    if (this.isAMP) {
      // not has amp link means amp template
      if (width === '' || height === '') {
        console.log('no widthxheight for img');
        process.exit(1);
      }
      return `<amp-img layout=responsive src=${node.url} alt="${node.alt}" title="${node.title}" ${width} ${height}>`;
    }

    // SVG should specify width-height
    if (path.parse(url.parse(node.url).path).ext === '.svg') {
      return `<img src=${node.url} alt="${node.alt}" title="${node.title}" ${width} ${height}>`;
    }

    // No width-height for normal img
    return `<picture>
    <source type=image/webp srcset=${node.url.replace(/(.png|.gif)/, '.webp')}>
    <img src=${node.url} alt="${node.alt}" title="${node.title}">
    </picture>`;
  }
  html(node) {
    let value = `${node.value}\n`;
    if (this.isAMP && value.match(/<iframe.*/)) {
      return value.replace(/iframe/g, 'amp-iframe');
    }
    return value;
  }
}

global.__defineGetter__('__LINE__', () => {
  return (new Error()).stack.split('\n')[3].split(':').reverse()[1];
});

function p() {
  let arg = Array.from(arguments);
  arg.unshift(__LINE__);
  console.log.apply(this, arg);
}

function j(o) {
  return JSON.stringify(o, ' ', ' ');
}

// 改行したく無いタグ
function isInline(node) {
  return [
    'str',
    'header',
    'strong',
    'paragraph',
  ].indexOf(node.type) > -1;
}

class AST {
  constructor(md) {
    this.ast = parse(md, { position: false });

    // pre process
    this.ast.children = this.tabling(this.ast.children);
    this.ast.children = this.sectioning(this.ast.children, 1);
  }

  // markdwon ast traverse
  traverse(ast, handler) {
    handler.enter(ast);
    if (!ast.children) return handler.leave(ast);

    ast.children = ast.children.map((child) => {
      return this.traverse(child, handler);
    });
    return handler.leave(ast);
  }

  // table を th/td/thead/tbody に分類
  tabling(ast) {
    return ast.map((node) => {
      if (node.type !== 'table') return node;

      let align = node.align;
      node.children = node.children.map((row, i) => {
        let type = (i === 0) ? 'tableHead' : 'tableData';
        row.children = row.children.map((cell, i) => {
          cell.type = type;
          cell.align = align[i];
          return cell;
        });
        return row;
      });

      node.children = node.children.reduce((acc, row, i) => {
        (i === 0) ? acc[0].children.push(row) : acc[1].children.push(row);
        return acc;
      }, [{ type: 'thead', children: []}, { type: 'tbody', children: [] }]);

      return node;
    });
  }

  sectioning(children, depth) {
    // 最初のセクションは <article> にする
    let section = {
      type:     depth === 1 ? 'article' : 'section',
      children: [],
      depth:    depth,
    };

    // 横に並ぶべき <section> を入れる配列
    let sections = [];
    while (true) {
      // 横並びになっている子要素を取り出す
      let child = children.shift();
      if (child === undefined) break;

      // H2.. が来たらそこで section を追加する
      if (child.type === 'heading') {
        if (section.depth < child.depth) {
          // 一つレベルが下がる場合
          // 今の <section> の下に新しい <section> ができる
          // <section>
          //  <h2>
          //  <section>
          //    <h3> <- これ

          // その h を一旦戻す
          children.unshift(child);

          // そこを起点に再起する
          // そこに <section> ができて、
          // 戻した h を最初にできる
          Array.prototype.push.apply(section.children, this.sectioning(children, child.depth));
          continue;
        }
        else if (section.depth === child.depth) {
          // 同じレベルの h の場合
          // 同じレベルで別の <section> を作る必要がある
          // <section>
          //  <h2>
          // </section>
          // <section>
          //  <h2> <- これ

          // そこまでの sections を一旦終わらせて
          // 親の child に追加する
          // そして、同じレベルの新しい <section> を開始
          if (section.children.length > 0) {
            sections.push(section);
            section = {
              type:     'section',
              children: [],
              depth:    child.depth,
            };
          }
          // もし今 section に子要素が無ければ
          // そのまま今の section に追加して良い
        }
        else if (section.depth > child.depth) {
          // レベルが一つ上がる場合
          // 今は一つ下がったレベルで再帰している最中だったが
          // それが終わったことを意味する
          // <section>
          //   <h2>
          //   <section>
          //     <h3>
          //     <p>
          //   <h2> <- 今ここ

          // その h を一旦戻す
          children.unshift(child);

          // ループを終わらせ関数を一つ抜ける
          break;
        }
      }

      // 今の <section> の子要素として追加
      section.children.push(child);
    }

    // 最後のセクションを追加
    sections.push(section);

    // そこまでの <section> のツリーを返す
    // 再帰している場合は、親の <section> の
    // childrens として使われる
    return sections;
  }

  build(dir, template) {
    // 結果を入れるスタック
    // push => unshift()
    // pop  => shift()
    // top  => [0]
    let stack = [];

    let codes = [];

    // トラバース
    this.traverse(this.ast, {
      enter(node) {
        // enter では、 inline 属性を追加し
        // stack に詰むだけ
        // 実際は、pop 側で整合検証くらいしか使ってない

        node.inline = isInline(node.type);
        stack.unshift(node);
      },
      leave(node) {
        if (node.type === 'code') {
          // コードを抜き取り、ここで id に置き換える
          // インデントを無視するため、全部組み上がったら後で差し込む。
          let value = node.value;
          if (value === '') {
            let tmp = node.lang.split(':');
            node.lang = tmp[0];
            let file = path.format({ dir: dir, base: tmp[1]});
            value = read(file);
          }
          codes.push(value);
          node.value = `// ${codes.length}`;
        }
        if (node.value) {
          // value があったら、 text とか

          // pop して
          let top = stack.shift();
          // 対応を確認
          if (top.type !== node.type) {
            console.error('ERROR', top, node);
            process.exit(1);
          }

          // 閉じる
          if (template[node.type] === undefined) {
            console.error('ERROR', node.type);
            process.exit(1);
          }
          stack.unshift({
            tag:    'full',
            val:    template[node.type](node),
            inline: isInline(node),
          });
        } else {
          // 完成している兄弟タグを集めてきて配列に並べる
          let vals = [];

          while (stack[0].tag === 'full') {
            let top = stack.shift();

            if (top.inline && vals[0] && vals[0].inline) {
              // 取得したのが inline で、一個前も inline だったら
              // inline どうしをくっつける
              let val = vals.shift();
              val.val = top.val + val.val;
              vals.unshift(val);
            } else {
              // そうで無ければただの兄弟要素
              vals.unshift(top);
            }
          }

          // タグを全部連結する
          vals = vals.map((val) => val.val).join('').trim();

          // それを親タグで閉じる
          let top = stack.shift();
          if (top.type !== node.type) {
            console.error('ERROR', top, node);
            process.exit(1);
          }

          // 今見ているのが paragraph で
          if (node.type === 'paragraph') {
            // その親が P いらないタグ だったら
            if (['listItem', 'blockquote'].indexOf(stack[0].type) > -1) {
              // Paragraph を消すために Str に差し替える
              // Str はタグをつけない
              node = { type: 'text' };
            }
          }

          node.value = vals;

          if (!template[node.type]) {
            console.error('unsupported type', node.type);
          }
          stack.unshift({
            tag:    'full',
            val:    template[node.type](node),
            inline: isInline(node),
          });
        }
      },
    });

    // 結果の <article> 結果
    let article = stack[0].val;

    let result = template.HTML(article);

    // indent を無視するため
    // ここで pre に code を戻す
    // ついでにエスケープ
    codes.forEach((code, i) => {
      result = result.replace(`// ${i + 1}`, hsp(code));
    });

    return result;
  }
}

function prepare(filepath, option) {
  let indent = '  ';
  let dir = path.parse(filepath).dir;
  let name = path.parse(filepath).name;
  let host = dir.split('/')[1];
  let baseurl = '/' + dir.split('/').slice(2).join('/');
  let created_at = dir.split('/')[3];
  let updated_at = fs.statSync(filepath).mtime.toISOString().substring(0, 10);

  // separate tag
  let { tags, md } = Tags(filepath);

  // take description
  let description = Description(md);

  // meta
  let icon = option.icon;
  let canonical = `${baseurl}/${name}.html`;
  let ampurl = `${baseurl}/${name}.amp.html`;
  let target = `${dir}/${name}.html`;

  // template
  let meta = option.meta;
  let template = option.template;
  let style = null;

  if (option.amp) {
    ampurl = null;
    style = CatStyle('blog.jxck.io/assets/css');
    target = `${dir}/${name}.amp.html`;
  }

  return {
    dir,
    name,
    created_at,
    updated_at,
    tags,
    md,
    description,
    canonical,
    ampurl,
    host,
    meta,
    template,
    style,
    target,
    indent,
    icon,
  };
}

if (process.argv.length < 3) {
  console.error('no file name');
  process.exit(1);
}

let filepath = process.argv[2];

if (process.argv[3] === 'podcast') {

  // podcast html
  (() => {
    p('podcast html', filepath);
    let option = {
      amp: false,
      meta: read('./.template/meta.html'),
      template: read('./.template/podcast.html'),
      icon: 'https://jxck.io/assets/img/mozaic.png', //TODO: https://mozaic.fm/assets/img/mozaic.png
    }
    let info = prepare(filepath, option);
    let builder = new Builder(info);
    let ast = new AST(info.md);
    let article = ast.build(info.dir, builder);
    fs.writeFileSync(info.target, article);
  })();

  process.exit(0);
}

// blog html
(() => {
  p('mark html', filepath);
  let option = {
    amp: false,
    meta: read('./.template/meta.html'),
    template: read('./.template/blog.html'),
    icon: 'https://jxck.io/assets/img/jxck.png',
  }
  let info = prepare(filepath, option);
  let builder = new Builder(info);
  let ast = new AST(info.md);
  let article = ast.build(info.dir, builder);
  fs.writeFileSync(info.target, article);
})();

// amp html
(() => {
  p('mark amp', filepath);
  let option = {
    amp: true,
    meta: read('./.template/meta.html'),
    template: read('./.template/amp.html'),
    icon: 'https://podcast.jxck.io/assets/img/jxck.png',
  }
  let info = prepare(filepath, option);
  let builder = new Builder(info);
  let ast = new AST(info.md);
  let article = ast.build(info.dir, builder);
  fs.writeFileSync(info.target, article);
})();
