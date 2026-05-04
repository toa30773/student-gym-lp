# BODY MAKE STUDIO LP

パーソナルジム「BODY MAKE STUDIO」のランディングページ。
Figmaデザインを基に静的HTML/CSS/JSで実装。WordPress化を見据えた構造。

## ページ構成

| ページ | ファイル | 参照Figmaフレーム (PC / SP) |
| --- | --- | --- |
| トップ | `index.html` | `7:2` / `49:2` |
| カウンセリング予約 | `counseling.html` | `71:2` / `59:2` |
| 送信完了 | `thanks.html` | `71:3` / `59:3` |
| お知らせ一覧 | `news.html` | `109:2` / `112:2` |

## 技術仕様

- HTML5 + CSS3 + Vanilla JS（依存なし）
- 命名規則: BEM（`block__element--modifier`）
- レスポンシブ: SPファースト、ブレークポイント `768px`
- PC基準幅: `1440px`（`max-width`で中央寄せ）
- フォント: Noto Sans JP（Google Fonts）

## ディレクトリ

```
.
├── index.html
├── counseling.html
├── thanks.html
├── news.html
├── css/
│   ├── reset.css         CSSリセット
│   └── style.css         共通＋全ページスタイル
├── js/
│   └── main.js           ドロワー / FAQ / フォーム / カテゴリーフィルター
├── img/                  Figma書き出し画像
├── coding-rules.md
├── design-system.md
└── project-spec.md
```

## JSが提供する機能

- モバイルドロワーメニューの開閉
- FAQ アコーディオン
- カウンセリングフォームのバリデーション（必須/メール/電話）
- お知らせ一覧のカテゴリーフィルター

## WordPress化メモ

- お知らせ一覧 (`news.html`)
  - 投稿ループ → `WP_Query` / `while(have_posts())`
  - カテゴリー → `get_the_category()` / カスタムタクソノミー
  - パンくず → `breadcrumb_trail()` または Yoast SEO
  - ページネーション → `paginate_links()` / `the_posts_pagination()`
- ヘッダー/フッターは `header.php` / `footer.php` に分離可能な構造
- トップページのお知らせブロックは `WP_Query` で投稿3件取得を想定
