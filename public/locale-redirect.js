// ルート `/` アクセス時の言語判定リダイレクト
// CSP の script-src 'self' に適合させるため外部ファイル。
// 優先順位: localStorage（言語切替の選好）> ブラウザ言語 > ja（既定）
(function () {
	var stored = null;
	try {
		stored = localStorage.getItem('locale');
	} catch (_) {
		/* localStorage 無効環境ではブラウザ言語にフォールバック */
	}
	var locale =
		stored === 'ja' || stored === 'en'
			? stored
			: (navigator.language || '').toLowerCase().indexOf('en') === 0
				? 'en'
				: 'ja';
	// ハッシュは維持（#about 等）。スクロール位置の復元は scroll-init.js 側で抑止する
	var hash = location.hash || '';
	location.replace('/' + locale + '/' + hash);
})();
