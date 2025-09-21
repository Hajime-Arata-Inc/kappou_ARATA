# 割烹 新 | KAPPO ARATA — 公式サイト（静的サイト）
- 落ち着いた和のトーンで「季節・鮮度・もてなし」を伝える小規模レストランサイトです。
- HTML + CSS + Vanilla JS のみで構成し、GitHub Pages などの静的ホスティングにそのままデプロイできます。

## 目次
- [デモ / スクリーンショット](#デモ--スクリーンショット)
- [主な機能](#主な機能)
- [ページ構成](#ページ構成)
- [技術スタック](#技術スタック)
- [ディレクトリ構成](#ディレクトリ構成)
- [ローカルでの動かし方](#ローカルでの動かし方)
- [デプロイ（GitHub Pages）](#デプロイgithub-pages)
- [コンテンツ更新ポイント](#コンテンツ更新ポイント)
- [スタイルとコンポーネント](#スタイルとコンポーネント)
- [アクセシビリティ](#アクセシビリティ)
- [SEO / メタタグ](#seo--メタタグ)
- [パフォーマンス最適化のヒント](#パフォーマンス最適化のヒント)
- [ブラウザサポート](#ブラウザサポート)
- [ライセンス / 著作権](#ライセンス--著作権)
## 主な機能
- **レスポンシブ対応**：モバイル〜デスクトップで最適表示
- **アクセシブルなナビ**：`aria-*`・`aria-current`・`aria-expanded` に対応
- **リビール演出**：`IntersectionObserver` によるふわっと表示
- **テーマ変数**：CSS カスタムプロパティで色や角丸を一元管理
- **ヒーロー構成**：グラデーション + 背景画像で高品位なファーストビュー
- **シンプル構成**：静的ファイルのみ、ビルド不要でそのままホスティング可能
## ページ構成
- index.html … トップ（ヒーロー／季節・鮮度・豪華さ／店舗イントロ）
- menu.html … お品書き（会席コース／一品／ドリンク）
- chef.html … 料理長ページ（※ファイルは追加予定／リンクはプレースホルダ）
- reservation.html … ご予約案内（※同上）
- sns.html … SNS 一覧（※同上）
## 技術スタック
- HTML5（セマンティクス + aria-* 属性）
- CSS3（カスタムプロパティ、グリッド、clamp()、aspect-ratio など）
- JavaScript（Vanilla / IntersectionObserver）
- Google Fonts（Noto Serif JP）
## ディレクトリ構成
```
/
├─ index.html
├─ menu.html
├─ chef.html               # 追加予定（リンクはプレースホルダ）
├─ reservation.html        # 追加予定
├─ sns.html                # 追加予定
├─ favicon.ico
├─ assets/
│  ├─ styles.css           # 本 README 下部の CSS と対応
│  └─ script.js            # 本 README 下部の JS と対応
└─ images/
   ├─ hero_main.jpg
   ├─ seasonal_1.jpg
   ├─ seasonal_2.jpg
   ├─ omakase.jpg
   ├─ matsu_kiwame.jpg
   ├─ take_jou.jpg
   ├─ ume_nami.jpg
   ├─ ippin2.jpg
   └─ drinks2.jpg
```

## スタイルとコンポーネント
- カラーテーマ（:root）
```css
:root{
  --bg:#0f0f0f;
  --surface:#171717;
  --text:#f5f2ea;
  --muted:#b6b0a0;
  --accent:#d4b483;
  --crimson:#8c2f39;
  --border:rgba(255,255,255,.08);
  --radius:18px;
  --shadow:0 10px 30px rgba(0,0,0,.35);
}
```
## コンポーネント例
- ボタン：`.btn` / `.btn-accent`
- カード：`.card > .card-body`
- グリッド：`.section-grid, .menu-courses, .menu-list.two-col/.three-col`
- リビール演出
- 任意要素に `.reveal` を付与 → ビューポートに入ると `.is-visible` が付与されアニメ表示
`<h2 class="reveal" style="--delay:120ms">季節を味わう</h2>`
## アクセシビリティ
- ナビゲーションに `aria-label="メインメニュー"、`
- 現在地に `aria-current="page"` を付与
- モバイルメニューの開閉状態は `aria-expanded="true|false"` を反映
- 画像はすべて 適切な alt テキスト を設定（例：「朝どれ鮮魚」「おまかせ会席の一皿」）
- 動きの削減：`@media (prefers-reduced-motion: reduce) `に対応
## SEO / メタタグ
- 各ページの <title> と <meta name="description"> をページ目的に合わせて最適化
- 例（トップ）:
```html
<title>割烹 新 | KAPPO ARATA</title>
<meta name="description" content="季節の恵みと鮮度を究めた、落ち着きの割烹。『割烹 新（あらた）』公式サイト。">
<meta property="og:title" content="割烹 新 | KAPPO ARATA">
<meta property="og:description" content="季節の恵みと鮮度を究めた、落ち着きの割烹。">
<meta property="og:image" content="https://<your-domain>/images/hero_main.jpg">
<meta property="og:type" content="website">
<meta property="og:url" content="https://<your-domain>/">
```
## パフォーマンス最適化のヒント
- 画像最適化：`images`/ は実寸に合わせて適切にリサイズ／圧縮（WebP/AVIF も検討）
- フォント：`<link rel="preconnect"> `済み、必要ウェイトだけを読み込み
- CSS/JS：1 ファイルに集約済み。必要に応じて `minify`（運用時）
## ブラウザサポート
- 最新の Chrome / Edge / Safari / Firefox を想定
- `IntersectionObserver`・`aspect-ratio` 等のモダン機能を使用しています
## ライセンス / 著作権
- コード：`© Kappou Arata. All rights reserved.`（必要に応じて利用許諾を追記してください）
- 写真素材：画像の著作権は各素材の権利者に帰属します。無断転載を禁止します。
- フォント：`Noto Serif JP（SIL Open Font License）` 使用条件は Google Fonts / OFL の規約に従ってください。
## 付録：主要スクリプトとスタイル（本リポジトリの実装に対応）
`assets/script.js`（抜粋）
```html
// 年号（フッター）
document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('y');
  if (y) y.textContent = new Date().getFullYear();
});

// モバイルナビ開閉
const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.nav-menu');
if (toggle && menu){
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// ふわっと表示：IntersectionObserver
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  })
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
```
`assets/styles.css`（抜粋）
主要トークン・レイアウト・コンポーネント・リビール演出は本 README 上部の記述どおりです。