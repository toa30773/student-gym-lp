# BODY MAKE STUDIO

パーソナルジムのランディングページ。「成果が出るLP」を意識した導線設計と、WordPress化を見据えた保守性の高いコードでフルスクラッチ実装したポートフォリオ作品。

---

## デモ

🔗 **[ライブデモを見る](https://toa30773-debu.github.io/student-gym-lp/)**

**LP（メインページ）**
| PC版（1440px） | SP版（375px） |
|---|---|
| ![LP PC版](images/ss_lp_pc.png) | ![LP SP版](images/ss_lp_sp.png) |

**カウンセリング予約ページ**
| PC版 | SP版 |
|---|---|
| ![予約 PC版](images/ss_counseling_pc.png) | ![予約 SP版](images/ss_counseling_sp.png) |

**送信完了ページ**
| PC版 | SP版 |
|---|---|
| ![完了 PC版](images/ss_thanks_pc.png) | ![完了 SP版](images/ss_thanks_sp.png) |

**お知らせ一覧ページ**
| PC版 | SP版 |
|---|---|
| ![お知らせ PC版](images/ss_news_pc.png) | ![お知らせ SP版](images/ss_news_sp.png) |

---

## 制作の背景・コンセプト

「綺麗に作る」ではなく「成果が出るLP」を目指して設計。学生・若年層向けパーソナルジムのターゲットに合わせ、エネルギッシュで行動を促すデザインと導線を実装しました。

- **悩み訴求から解決策への流れ** — FV → 悩み → 解決策 → 実績 → 料金 → FAQ → CTA
- **離脱ポイントごとにCTAを配置** — スクロールの節目で必ず行動を促す設計
- **WordPress化を見据えた構造** — テーマ化しやすいHTML設計

---

## 制作フロー

```
仕様書・デザインシステム作成（.md）
  ↓
Figmaでデザイン（Claude Codeを使用）
  ↓
レビュー・修正（複数回）
  ↓
コーディング（Claude Codeを使用）
  ↓
画像最適化（WebP変換）
  ↓
ブラウザ確認・調整
  ↓
GitHub Pages 公開
```

> **仕様書.mdについて：** リポジトリ内の `project-spec.md` / `design-system.md` / `coding-rules.md` は制作前に作成したFigmaデザイン・コーディング用の仕様書です。実際のコードはレビューと修正を経て仕様書から改善されている箇所があります。

> **AI活用について：** デザイン生成・コーディングに Claude Code（Anthropic）を活用しています。プロンプト設計・レビュー・修正指示はすべて自身で行っています。

---

## ページ構成

| ページ | ファイル | 内容 |
|---|---|---|
| トップ | `index.html` | FV・悩み訴求・実績・料金・FAQ・CTA |
| カウンセリング予約 | `counseling.html` | バリデーション付き予約フォーム |
| 送信完了 | `thanks.html` | 予約完了サンクスページ |
| お知らせ一覧 | `news.html` | カテゴリーフィルター付き一覧 |

---

## こだわりポイント

**デザイン**
- 学生・若年層向けのエネルギッシュな配色
- FigmaでPC（1440px）・SP（375px）フレームを別途制作

**コーディング**
- BEM命名規則の徹底
- SPファースト設計（ブレークポイント: 768px）
- `rem`ベースのサイジングで拡縮に強い設計
- ページ共通スタイルとページ固有スタイルの分離

---

## 実装機能（JavaScript）

- モバイルドロワーメニューの開閉
- FAQアコーディオン
- カウンセリングフォームのバリデーション（必須・メール形式・電話番号形式）
- お知らせ一覧のカテゴリーフィルター

---

## 使用技術

| 技術 | 用途 |
|---|---|
| HTML5 | セマンティックマークアップ |
| CSS3 | BEM / SPファースト / カスタムプロパティ |
| Vanilla JavaScript | フレームワーク・ライブラリ不使用 |
| Node.js（sharp） | WebP一括変換 |
| Figma | UIデザイン（PC・SPフレーム） |
| Claude Code | デザイン生成・コーディング支援 |
| GitHub Pages | ホスティング |

---

## ファイル構成

```
student-gym-lp/
  ├── index.html
  ├── counseling.html
  ├── thanks.html
  ├── news.html
  ├── css/
  │   ├── reset.css
  │   └── style.css
  ├── js/
  │   └── main.js
  └── img/
```

---

## WordPress対応について

将来的なWordPress化を前提とした構造で実装。

- お知らせ一覧 → `WP_Query` / カスタムタクソノミーに対応可能
- ヘッダー・フッター → `header.php` / `footer.php` に即座に分離可能
- トップのお知らせブロック → `WP_Query` 3件取得を想定した構造

---

*Portfolio Work*
