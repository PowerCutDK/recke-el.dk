//////// Variables ////////

const navTwoColumnHtml = `
	<br /><br /><br />
	<div class="eight columns">
		<a id="el_installation" class="menuLeft" href="elinstallation">
			<img src="/images/elinstallation.jpg" class="produkt-image">
			<h5 class="menu-text">El Installation</h5>
		</a>
		<a id="Landbrug" class="menuLeft" href="landbrug">
			<img src="/images/Landbrug.jpg" class="produkt-image">
			<h5 class="menu-text">Landbrug</h5>
		</a>
		<a id="Industri" class="menuLeft" href="industri">
			<img src="/images/industri.jpg" class="produkt-image">
			<h5 class="menu-text">Industri</h5>
		</a>
		<a id="hvidevarer" class="menuLeft" href="hvidevarer">
			<img src="/images/hvidevarer.jpg" class="produkt-image">
			<h5 class="menu-text">Hvidevarer</h5>
		</a>
		<a id="butik" class="menuLeft" href="butik">
			<img src="/images/butik.jpg" class="produkt-image">
			<h5 class="menu-text">Butik</h5>
		</a>
	</div>
	<div class="eight columns">
		<a id="Energioptimering" class="menuLeft" href="energioptimering">
			<img src="/images/energioptimering.jpg" class="produkt-image">
			<h5 class="menu-text">Energioptimering</h5>
		</a>
		<a id="Eleftersyn" class="menuLeft" href="eleftersyn">
			<img src="/images/elsyn.jpg" class="produkt-image">
			<h5 class="menu-text">Eleftersyn</h5>
		</a>
		<a id="belysning" class="menuLeft" href="belysning">
			<img src="/images/belysning.jpg" class="produkt-image">
			<h5 class="menu-text">Belysning</h5>
		</a>
		<a id="it_data" class="menuLeft" href="it-data">
			<img src="/images/it-data.jpg" class="produkt-image">
			<h5 class="menu-text">Tele IT & Netværk</h5>
		</a>
	</div>
	<div class="clear"></div>
	`;



resizePage();

setMenuSelected();

$(window).resize(resizePage);

function resizePage() {
	const minWidth = 1675;

	let width = window.innerWidth; // Including scrollbar (on desktop typically 17px)
	let height = window.innerHeight;

	$(".info").text(width);

	if (width > minWidth) {
		$("nav.left-nav").show();
		$(".menuLeft").css("width", "340px");
		$(".menu-text").show();
		$("nav.left-nav").css("width", "340px");
		$("#nav-center").html("");
		createMenu();
	}
	else if (width > (minWidth - 475)) {
		$("nav.left-nav").show();
		$(".menuLeft").css("width", "115px");
		$("#nav-center").html("");
		createMenu();

		$(".menu-text").hide();
	}
	else {
		$("nav.left-nav").hide();
		$("#nav-center").html(navTwoColumnHtml);

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
		$("#nav-center").hide();
		$("nav.left-nav").css("position", "absolute");
	}
	else {
		$("nav.left-nav").css("position", "fixed");
		$("#nav-center").show();
	}

	$(".menuItem").mouseover(() => {
		$(this).css("background", "rgb(88, 60, 54)");
		$(this).mouseout(() => {
			$(".menuItem").css("background", "rgb(91, 183, 91)");
			$(".menuItem").css("color", "white");
		})
	});
};

function createMenu() {
	$(".menuLeft").mouseover(() => {
		$("nav.left-nav").css("width", "350px");
		$("nav.left-nav").show();
		$(".menu-text").show();
		$(".menuLeft").css("width", "340px");
		removeMenu();
		$(".menuLeft").unbind("mouseover");
	});
}

function removeMenu() {
	$(".bg").mouseenter(() => {
		$("nav.left-nav").css("width", "50px");
		$(".menuLeft").css("width", "115px");
		resizePage();
	});
}

function setMenuSelected() {
	let arr = $(location).attr("pathname").split("/");
	let arrr = arr[arr.length - 1].split(".");
	let urlName = arrr[0];

	$(`nav.left-nav #${urlName.toLowerCase()}`).addClass("menuSelected");
	$("#nav-center").find("[id='" + urlName + "']").addClass("menuSelected");
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
