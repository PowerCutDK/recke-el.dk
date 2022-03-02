resizePage();

setMenuSelected();

$(window).resize(resizePage);

function resizePage() {
	const minWidth = 1675;

	let width = window.innerWidth; // Including scrollbar (on desktop typically 17px)
	let height = window.innerHeight;
	let showNavCenter = false;

	$(".info").text(width);

	if (width > minWidth) {
		$(".nav-left .menuLeft").css("width", "340px");
		$(".nav-left .menu-text").show();
		$("nav.nav-left").css("width", "340px");
		createMenu();
	}
	else if (width > (minWidth - 475)) {
		$(".nav-left .menuLeft").css("width", "115px");
		createMenu();

		$(".nav-left .menu-text").hide();
	}
	else {
		showNavCenter = true;

		$(".menuLeft").css("width", "340px");
		$(".produkt-image").css("width", "75px");

		if (width < 450) {
			$(".menu-text").addClass("MobileCss");
			$(".menuLeft").css("width", "280px");
			$(".lines").css("font-size", "45px");
		}
		else {
			$(".menu-text").removeClass("MobileCss");
			$(".menuLeft").css("width", "340px");
		}
	}

	if (height < 700) {
		showNavCenter = false;
		$("nav.nav-left").css("position", "absolute");
	}
	else {
		$("nav.nav-left").css("position", "fixed");
	}

	$(".nav-center").toggle(showNavCenter);
	$("nav.nav-left").toggle(!showNavCenter);

	$(".menuItem").mouseover(() => {
		$(this).css("background", "rgb(88, 60, 54)");
		$(this).mouseout(() => {
			$(".menuItem").css("background", "rgb(91, 183, 91)");
			$(".menuItem").css("color", "white");
		})
	});
};

function createMenu() {
	$(".nav-left .menuLeft").mouseover(() => {
		$("nav.nav-left").css("width", "350px");
		$("nav.nav-left").show();
		$(".menu-text").show();
		$(".menuLeft").css("width", "340px");
		removeMenu();
		$(".nav-left .menuLeft").unbind("mouseover");
	});
}

function removeMenu() {
	$(".bg").mouseenter(() => {
		$("nav.nav-left").css("width", "50px");
		$(".menuLeft").css("width", "115px");
		resizePage();
	});
}

function setMenuSelected() {
	let arr = $(location).attr("pathname").split("/");
	let arrr = arr[arr.length - 1].split(".");
	let urlName = arrr[0];

	$(`nav.nav-left #${urlName.toLowerCase()}`).addClass("menuSelected");
	$(".nav-center").find("[id='" + urlName + "']").addClass("menuSelected");
	$(`.header-nav #${urlName.toLowerCase()}`).addClass("selected");
}


//////// Event handlers ////////

$(".menuItem").mouseover(() => {
	$(this).css("background", "rgb(88, 60, 54)");
	$(this).mouseout(() => {
		$(".menuItem").css("background", "rgb(91, 183, 91)");
		$(".menuItem").css("color", "white");
	})
});
