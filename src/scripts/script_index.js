import * as SassSwing from "sass-swing";

/* Initialize all Sass Swing's components */
(() => {
	document.addEventListener('resize', SassSwing.debounce(SassSwing.fixDocumentHeight));
	window.addEventListener("DOMContentLoaded", () => {
		SassSwing.ThemeSwitcher.bind();
		SassSwing.Tabify.bind();
		SassSwing.Dropdownify.bind();
		SassSwing.Slidify.bind();
		SassSwing.Revealify.bind();
		SassSwing.fixDocumentHeight();
	});
})();
