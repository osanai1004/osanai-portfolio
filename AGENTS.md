# AGENTS.md — portfolio-site

日英対応ポートフォリオサイト（Astro 7 / SSG / Vercel）。コーディングエージェント向けの規約。

## 必須ルール

- **デザイントークン**: 色・余白・角丸・タイポは `src/styles/tokens.css` の CSS 変数のみ使用する。ハードコード禁止。トークンの正本は [VoltAgent/awesome-design-md の linear.app/DESIGN.md](https://github.com/VoltAgent/awesome-design-md/blob/main/design-md/linear.app/DESIGN.md)
- **アクセント色は希少に**: lavender（`--color-primary`）はブランドマーク・主要 CTA・フォーカスリング・リンク強調のみ。背景やカード塗りに使わない
- **CSP 厳守**: インラインスクリプト（`is:inline` の新規追加）・インライン `style` 属性を書かない。描画前に必要なスクリプトは `public/` に外部ファイルとして置く
- **i18n**: UI 文言は `src/lib/i18n/ui.ts` の辞書経由のみ。ja / en 両方を必ず更新する
- **層の依存方向**: content → lib → components/layouts → pages の一方向を維持する
- **依存追加は最小限**: UI フレームワーク（React 等)を追加しない。静的サイトを維持する
- **プレビュー確認後にだけ本番へ出す**: `main` への merge / push、`vercel --prod`、本番URLへの直接反映は禁止。ユーザーがプレビュー（確認用URL）で見たあと、「本番に出して」と明示したときだけ本番へ入れる。プレビューが Vercel SSO（ログイン壁）で開けない場合も、勝手に本番へ出さない。ログインが必要な旨を案内し、本番反映は待つ
- **本番反映が終わったらプレビューを消す**: 本番デプロイ成功の直後に、その作業のプレビューURL（Vercel Preview）とマージ済みのプレビュー用ブランチを削除する。以降の案内・残すリンクは本番URLだけにする。スレッド内に残ったプレビューURLも使わない

## 変更後の確認

```bash
npx astro check && npm run build
```

ビルド後、`dist/**/*.html` に `<script>` インライン出力がないことを確認する（CSP 違反防止）。

## Cursor Cloud specific instructions

依存は起動時の update script（`npm ci`）で導入済み。手順の正本は `README.md`（開発コマンド）と上記「変更後の確認」。ここには非自明な注意点だけを残す。

- **サービスは 1 つ（静的サイト）**: `npm run dev` で Astro dev サーバが `http://localhost:4321` に起動。ルート `/` は言語判定でリダイレクト、実体は `/ja/` と `/en/`。長時間動かすので tmux 上で起動する。
- **lint / test / build**: 独立した lint・テストは無い。型チェック `npx astro check` が実質の lint、ビルドは `npm run build`（`dist/` に静的出力）。自動テストのフレームワークは未導入。
- **Node バージョン差異は無害**: `package.json` の `engines` は `24.x` だが Astro 7 は Node 22.12+ で動作し、VM の Node 22.x で問題ない。`npm ci` 時の `EBADENGINE` 警告は無視してよい（`engine-strict` 未設定のため失敗しない）。
- **`/api/contributions` は dev では動かない**: これはリポジトリ直下 `api/` の Vercel サーバレス関数で、`astro dev` は実行せず JS ソースをそのまま返す（`Content-Type: text/javascript`）。関数の実挙動（草グラフ SVG）は Vercel か `vercel dev` でのみ確認できる。ローカルで GitHub 草が表示されないのは既知で正常。
- **UI 検証時は localStorage をリセット**: テーマ（`theme`）と言語（`locale`）の選好は localStorage に保存され、ページ遷移をまたいで持続する。テーマトグルと言語切替は独立（トグルは色のみ、言語切替は `/ja/`↔`/en/` のリンク遷移）。決め打ちの初期状態（ダーク＋日本語）で検証したい場合は `localStorage.clear()` 後にリロードする。
