let minWidth = 1060;
let mobileWidth = 860;

resizePage();

$(window).resize(resizePage);

function resizePage() {
	// https://stackoverflow.com/questions/6942785/window-innerwidth-vs-document-documentelement-clientwidth

	let width = window.innerWidth; // document.documentElement.offsetWidth;

	if (width < minWidth) {
		$(".topText").hide();
		$(".topLogo").css("width", "100%");
		$("#topLogo").css("width", width + "px");
	}
	else {
		$(".topText").show();
		$(".topLogo").css("width", "70%");
	}

	if (width < mobileWidth) {
		$(".topLogo").css("position", "absolute");
		$(".header").css("position", "absolute");
	}
	else {
		$(".topLogo").css("position", "fixed");
		$(".header").css("position", "fixed");
	}
};
