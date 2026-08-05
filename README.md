# Portfolio — Tsukasa Osanai

日本語 / 英語対応のポートフォリオサイト。Astro 7 による静的サイト生成（SSG）で、Vercel にデプロイする。

- **ブランドアイコン**: [Simple Icons](https://simpleicons.org)（CC0-1.0）を `public/icons/` にセルフホスト
- **強みセクション画像**: AI 生成ビジュアルを `public/images/strengths/` に配置（WebP）
- **デザイン正本**: [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md) の [`linear.app/DESIGN.md`](https://github.com/VoltAgent/awesome-design-md/blob/main/design-md/linear.app/DESIGN.md)（トークンは `src/styles/tokens.css` に反映済み）
- **テーマ**: ダーク既定 + ライト切替（トグルの選択を `localStorage` に保存。Linear デザインの正本に合わせ、OS 設定に関わらず初回はダーク）
- **多言語**: Astro 組み込み i18n。`/ja/` `/en/`（ルート `/` はブラウザ言語で自動振り分け）
- **コンタクト**: フォームなし。GitHub プロフィールへ誘導

## 開発

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ に静的出力
npm run preview  # ビルド結果をローカル確認
npx astro check  # 型チェック
```

Node.js 22.12 以上が必要。

## アーキテクチャ（クリーンアーキテクチャの静的サイト翻訳）

依存の向きは「コンテンツ → ドメイン → 表示 → ルーティング」の一方向。

| 層 | パス | 役割 |
|---|---|---|
| ドメイン層 | `src/lib/` | 翻訳辞書・サイト定数・スキル・強み（`strengths.ts`） |
| 表示層 | `src/components/` `src/layouts/` | UI コンポーネント。デザイントークン（CSS 変数）のみ参照 |
| ルーティング層 | `src/pages/` | `[lang]/index.astro` が ja / en を静的生成 |

## コンテンツの更新方法

- **強みカード更新**: `src/lib/strengths.ts` の課題 / アプローチ / 届けられることを編集（日英）。画像は `public/images/strengths/`
- **文言修正**: `src/lib/i18n/ui.ts` の辞書を編集（ja / en 両方）
- **スキル更新**: `src/lib/profile.ts` を編集
- **デザイン調整**: `src/styles/tokens.css` の CSS 変数を編集（DESIGN.md のトークン名を維持）

## セキュリティ

- `vercel.json` で CSP（`script-src 'self'` / `style-src 'self'` の厳格設定）・HSTS・`X-Content-Type-Options` 等のヘッダーを設定
- インラインスクリプト・インラインスタイル禁止（`astro.config.mjs` で外部ファイル出力を強制。テーマ初期化も `public/theme-init.js` に外出し）
- 外部リソースの読み込みゼロ（フォントは `@fontsource-variable/inter` でセルフホスト）
- フォーム・API・秘密情報なし（完全静的サイト）
- Dependabot（`.github/dependabot.yml`）で依存の脆弱性を自動検知

## デプロイ（Vercel）

リポジトリ: https://github.com/osanai1004/osanai-portfolio

1. [vercel.com/new](https://vercel.com/new) でこのリポジトリを Import（Framework は Astro が自動検出される。設定変更不要）
2. デプロイ完了後、発行された URL（`https://xxx.vercel.app`）を `astro.config.mjs` の `site` に設定して再 push（hreflang・canonical の正確化）
3. （任意）独自ドメインは Vercel → Settings → Domains から追加

## 独自ドメイン（任意・後日）

Vercel ダッシュボード → プロジェクト → Settings → Domains から追加。ドメイン取得費（年 1,000〜2,000 円程度）以外の費用は不要。
