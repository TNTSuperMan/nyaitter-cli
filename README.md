# nyaitter-cli

> [!WARNING]
> このリポジトリはNyaitter・Scratch財団と連携・関係しない個人が作った非公式のものです。

[Nyaitter](https://github.com/Nyaitter)のCLIクライアントです

## ライセンス
Nyaitter.jsを使っています。  
そして型情報を使うためにソースコードにtscを通したものを[./src/client/nyaitterjs](./src/client/nyaitterjs)においています。  
MITライセンスです。

https://github.com/Nyaitter/Nyaitter.js/blob/main/README.md#%E3%83%A9%E3%82%A4%E3%82%BB%E3%83%B3%E3%82%B9

## 使い方
1. [Bun](https://bun.com)を持ってなければ[導入](https://bun.com/docs/installation)してください、推奨バージョンはBun v1.4.2です
2. nyaitter-cliのとこで`bun install`をしてください
3. `bun start`で動きます

## PATH
[./bin](./bin)をPATHに追加すると短縮コマンド`ny`が使えるのでやりましょう

```bash
# .bashrcの場合
export PATH="/path/to/nyaitter-cli/bin:$PATH"
```
