// 初期表示・リダイレクト直後のスクロール位置ずれを防ぐ
// CSP の script-src 'self' に適合させるため外部ファイル。
//
// 背景:
// - `/` → `/ja/`（または `/en/`）の location.replace 後、ブラウザが前回の
//   スクロール位置を復元することがある（scroll restoration）
// - html { scroll-behavior: smooth } が復元アニメにも効き、
//   画面中央付近で止まったように見えることがある
(function () {
	if ('scrollRestoration' in history) {
		history.scrollRestoration = 'manual';
	}

	function pinTop() {
		if (!location.hash) {
			window.scrollTo(0, 0);
		}
	}

	pinTop();
	window.addEventListener('DOMContentLoaded', pinTop);
	window.addEventListener('pageshow', function (event) {
		if (event.persisted) pinTop();
	});

	// 復元が終わってからだけ smooth scroll を有効化（ハッシュ遷移用）
	window.addEventListener('load', function () {
		pinTop();
		document.documentElement.dataset.scrollBehavior = 'smooth';
	});
})();
