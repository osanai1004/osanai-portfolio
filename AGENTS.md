# AGENTS.md — portfolio-site

日英対応ポートフォリオサイト（Astro 7 / SSG / Vercel）。コーディングエージェント向けの規約。

## 必須ルール

- **デザイントークン**: 色・余白・角丸・タイポは `src/styles/tokens.css` の CSS 変数のみ使用する。ハードコード禁止。トークンの正本は [VoltAgent/awesome-design-md の linear.app/DESIGN.md](https://github.com/VoltAgent/awesome-design-md/blob/main/design-md/linear.app/DESIGN.md)
- **アクセント色は希少に**: lavender（`--color-primary`）はブランドマーク・主要 CTA・フォーカスリング・リンク強調のみ。背景やカード塗りに使わない
- **CSP 厳守**: インラインスクリプト（`is:inline` の新規追加）・インライン `style` 属性を書かない。描画前に必要なスクリプトは `public/` に外部ファイルとして置く
- **i18n**: UI 文言は `src/lib/i18n/ui.ts` の辞書経由のみ。ja / en 両方を必ず更新する
- **層の依存方向**: content → lib → components/layouts → pages の一方向を維持する
- **依存追加は最小限**: UI フレームワーク（React 等)を追加しない。静的サイトを維持する

## 変更後の確認

```bash
npx astro check && npm run build
```

ビルド後、`dist/**/*.html` に `<script>` インライン出力がないことを確認する（CSP 違反防止）。
