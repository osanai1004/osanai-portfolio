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
})();
