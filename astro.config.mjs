// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// TODO: Vercel デプロイ後、実際の URL に変更する（hreflang・canonical の生成に使用）
	site: 'https://portfolio.vercel.app',
	i18n: {
		locales: ['ja', 'en'],
		defaultLocale: 'ja',
		routing: {
			prefixDefaultLocale: true,
			redirectToDefaultLocale: false,
		},
	},
	// CSP の script-src 'self' / style-src 'self' に適合させるため、
	// スクリプト・スタイルのインライン化を無効にして外部ファイルとして出力する
	build: {
		inlineStylesheets: 'never',
	},
	vite: {
		build: {
			assetsInlineLimit: 0,
		},
	},
});
