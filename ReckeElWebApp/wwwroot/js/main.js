imageresize(); // Triggers when document first loads
// $("html, body").animate({ scrollTop: 310 }, 4000);
$(window).bind("resize", function() { // Adjusts image when browser resized
	imageresize();
});

function imageresize() {
	var minWidth = 1060;
	var LmobilWidth = 860;
	var SmobilWidth = 660;
	var Width = 1000;
	var Height = 1000;

	if (typeof window.innerWidth != 'undefined') {
		Width = window.innerWidth;
		Height = window.innerHeight;
	}
	else if (typeof document.documentElement != 'undefined' && typeof document.documentElement.clientWidth != 'undefined' && document.documentElement.clientWidth != 0) {
		Width = document.documentElement.offsetWidth;
		Height = document.documentElement.offsetHeight;
	}

	if (Width < minWidth) {
		$(".topText").hide('slow');
		$(".topLogo").css("width", "100%");
		$("#topLogo").css("width", Width + "px");
	}
	else {
		$(".topText").show('slow');
		$(".topLogo").css("width", "70%");
	}

	if (Width < LmobilWidth) {
		$(".topLogo").css('position', "absolute");
		$(".header").css('position', "absolute");
	}
	else {
		$(".topLogo").css('position', "fixed");
		$(".header").css('position', "fixed");
	}
};
