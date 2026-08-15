// テーマ初期化（描画前に実行して FOUC を防ぐ）
// CSP の script-src 'self' に適合させるため、インラインではなく外部ファイルにしている。
// Linear デザインはダークが正本のため、既定は常にダーク。
// ユーザーがトグルで選んだ値（localStorage）だけを優先する。
(function () {
	var stored = null;
	try {
		stored = localStorage.getItem('theme');
	} catch (_) {
		/* localStorage 無効環境では既定（ダーク）を使う */
	}
	document.documentElement.dataset.theme = stored === 'light' ? 'light' : 'dark';

	// ヒーローの打鍵演出がある場合、描画前に「全文が一瞬出る」のを防ぐ。
	// JS 無効時はフラグが付かないので、静的な全文表示のまま残る。
	var reduceMotion = false;
	try {
		reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	} catch (_) {
		/* matchMedia 非対応環境では演出を使わない */
	}
	if (!reduceMotion) {
		document.documentElement.dataset.terminalMotion = 'on';
	}
})();
