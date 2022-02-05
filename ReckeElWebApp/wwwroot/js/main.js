let minWidth = 1060;
let mobileWidth = 860;

resizePage();

$(window).resize(resizePage);

function resizePage() {
	// https://stackoverflow.com/questions/6942785/window-innerwidth-vs-document-documentelement-clientwidth

	let width = window.innerWidth; // document.documentElement.offsetWidth;

	if (width < minWidth) {
		$(".header-text").hide();
		$(".header-logo").css("width", "100%");
		$("#header-logo").css("width", width + "px");
	}
	else {
		$(".header-text").show();
		$(".header-logo").css("width", "70%");
	}

	if (width < mobileWidth) {
		$(".header-logo").css("position", "absolute");
		$(".header").css("position", "absolute");
	}
	else {
		$(".header-logo").css("position", "fixed");
		$(".header").css("position", "fixed");
	}
};
