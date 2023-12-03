# [cookie][3pca] 3PCA 9 日目: DNT

## Intro

このエントリは、 3rd Party Cookie Advent Calendar の 9 日目である。

- 3rd Party Cookie のカレンダー | Advent Calendar 2023 - Qiita
  - https://qiita.com/advent-calendar/2023/3rd-party-cookie

今回は、 P3P の後に提案され、非常に似たコンセプトかつ最近まで使われていた DNT について解説する。


## Do Not Track List

6 日目に、トラッキングからのオプトアウト方法は、基本的に三種類あるという話をした。

1. オプトアウトを示す Cookie を保存し、それを送られた広告ネットワークはトラッキングしない
2. トラッキングしている業者のリストを作り、それをブラウザなどに読み込んで設定する
3. ユーザの意図をなんらかの方法で表明する(ブラウザからオプトアウトを示す HTTP ヘッダーなどを送るか、ダイアログで同意をとるなど)。

実際に行われていたのが 1 だったが、ユーザは納得していなかった。

そんな中怒ったユーザは、アメリカの FTC (連邦取引委員会) に 「*Do Not Track リストの作成*」を要求する苦情を出したのだ。

もともと、アメリカでは電話セールスをする業者は番号を届ける必要があり、その番号リストを電話だかに設定すると電話セールスを全てお断りできるという仕組みがあった。これが "Do Not Call リスト" であり、そのドメイン版を作るように求めているのだ。つまり 2 番の方式だ。

とはいえ、いきなり全部リストにするのは難しいため、FTC からは「ポリシーの整備」を要求するような通達を出すに一旦は止まり、それに合わせて各社が Privacy Policy を整理した。

しかし、それでも問題は解決しなかった。そこで、 MS は 2 のリスト方式を IE9 に実装してリリースしたらしいが、そのリストをメンテし続けるのも難しいため、あまりうまくはいかなかった。


## Do Not Track Header

そこで、 3 の方法にシフトし、ブラウザから HTTP ヘッダで明示的に示せるようにして、広告会社側がそれを見るようにしようということで、提案されたのが DNT ヘッダだ。

```http
DNT: 1
```

P3P はサービスがレスポンスするものだったが、 DNT はクライアントが意思を表示するために送るものであるため、ベクトルが逆になる。

また、その値も `1` だと "拒否"、 `0` だと "許可" という非常にシンプルな仕様だ。

最初に Mozilla が実装したのをきっかけに、 IE, Safari, Chrome, Opera と、次々と実装していくことになる。

「DNT を送る」といったオプションを有効にすれば、このヘッダが飛ぶようになったため、ユーザの意図が示せるようになったと言える。

残る問題は、このヘッダを見る広告側だ。


## 広告側の対応

結果から言うと、どの業者もまともにこのヘッダに対応しなかった。

Yahoo や Google などの大手も、プライバシーポリシーの中に「DNT があってもうちは見てません」といったことをはっきりと明示するレベルで、事実上無視されていた。

これもやはり、「DNT に対応するインセンティブがない」というのが実際のところだろう。つまり、守らないといけない法律がなかったのだ。

ちなみに、広告側には広告側の言い分がある。

- そもそも DNT で何をオプトアウトしたいのか(トラッキングが嫌なのか、パーソナライズが嫌なのか)ユーザは本当に理解しているかは怪しい
- 無料で運営しているサイトが収益化する方法がなくなると、インターネットは立ち行かなくなる

といったものだ。

これは、現在に至って「トラッキングを正当なユースケースとして認めさせたい事業者」の言い分として存在している。

ともあれ、結果として DNT はプライバシー意識の高い人によって虚空に投げられるだけのヘッダになった。


## DNT as Fingerprint Vector

DNT が受信側によってまったく考慮されていないのにも関わらず、ただただ送っているだけの状態になって久しい最近のことだが、DNT はその存在が逆にプライバシー問題になるところまで発展した。

例えば、送っていない大半の人のリクエストが以下だったとする。

```http
GET / HTTP/1.1
Host: example.com
Accept: text/html
Accept-Language: ja-JP
```

その中で、プライバシー意識の高い 1000 人に一人くらいが DNT を送っていたとする。

```http
GET / HTTP/1.1
Host: example.com
Accept: text/html
Accept-Language: ja-JP
DNT: 1
```

逆に目立つことがわかるだろう。

後に 3rd Party Cookie が使えなくなるとわかった業者が Fingerprint を行う際に、他のユーザと "区別" する上で非常に有用なシグナルとなる。つまり、エントロピーの高い Fingerprinting Vector になってしまうのだ。

結果 2019 年に Safari は「DNT は Fingerprinting に使われる以外に用途がなくなったので削除する」と発表した。

- Safari 12.1 Release Notes | Apple Developer Documentation
  - https://developer.apple.com/documentation/safari-release-notes/safari-12_1-release-notes

Chrome, Firefox, Edge は、未だに DNT を送るためのオプションがある。例え形骸化しているとはいえ、 DNT を削除すること自体が「ユーザにとっての選択肢を減らしている」という心情を与えるため、簡単には消せないという問題もある。

しかし、Fingerprinting Vector であることもさることながら、代替の方法が提案されているため、いずれはなくなるのではないかと考えられる。それについては後ほど解説する。