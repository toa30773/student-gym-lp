# コーディングルール（GitHub公開前提）

## BEM

### 命名規則

BEM（Block / Element / Modifier）を採用する。

- Block：独立した意味を持つ単位
- Element：Blockを構成する要素（__）
- Modifier：状態や種類の変化（--）

## HTML / CSS

### HTML

- セマンティックHTMLを使う
- divの乱用を避ける
- alt属性を必ず設定する

### CSS

- remを基本使用
- max-widthで中央寄せ
- z-indexを乱用しない

## レスポンシブ

- SP（スマホ）ファースト
- 横スクロール禁止
- 768px / 1024px を基準にする

## JavaScript

- addEventListener を使う
- inline JavaScriptは禁止
- .js- プレフィックスを使う

## 保守性

- ファイル構造を統一する
- 共通化できるものは分離する
- 他人が見ても理解できるコードを書く

## GitHub公開前提

- README.md を必ず作成
- 不要ファイルを削除
- node_modules を上げない

## 最重要

「動く」ではなく

「他人が見ても評価される」コードを書くこと