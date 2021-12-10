# Storybook tutorial

Storybook tutorial の学習メモ

---

- [Storybook tutorial](#storybook-tutorial)
  - [環境構築](#環境構築)
  - [トラブルシューティング](#トラブルシューティング)
    - [npx degit でパッケージを fetch できない時](#npx-degit-でパッケージを-fetch-できない時)

## 環境構築

node.js 環境を Docker で用意。

コンテナ内で下記コマンド実行

```sh
# cra
npx create-react-app front

# Storybook を追加する:
npx -p @storybook/cli sb init

# 環境変数の追加


# ターミナルでテストランナー (Jest) を開始する:
# --watchAllは、全てのテストケースをテストする。
yarn test --watchAll

# ポート 6006 でコンポーネントエクスプローラーを起動する:
yarn storybook

# ポート 3000 でフロントエンドアプリケーションを起動する:
yarn start


# assetの追加
npx degit chromaui/learnstorybook-code/src/assets/font src/assets/font
npx degit chromaui/learnstorybook-code/src/assets/icon src/assets/icon
```

## トラブルシューティング

### npx degit でパッケージを fetch できない時

→ git 入れましょう。（完）

```sh
/front # npx degit chromaui/learnstorybook-code/src/assets/font src/assets/font
Need to install the following packages:
  degit
Ok to proceed? (y) y
! could not fetch remote https://github.com/chromaui/learnstorybook-code
! could not find commit hash for HEAD


/front # apk add git
```
