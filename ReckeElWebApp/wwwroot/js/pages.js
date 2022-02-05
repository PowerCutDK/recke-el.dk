//////// Variables ////////

const navSideHtml = `
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
	<a id="belysning" class="menuLeft" href="belysning">
		<img src="/images/belysning.jpg" class="produkt-image">
		<h5 class="menu-text">Belysning</h5>
	</a>
	<a id="Energioptimering" class="menuLeft" href="energioptimering">
		<img src="/images/energioptimering.jpg" class="produkt-image">
		<h5 class="menu-text">Energioptimering</h5>
	</a>
	<a id="Eleftersyn" class="menuLeft" href="eleftersyn">
		<img src="/images/elsyn.jpg" class="produkt-image">
		<h5 class="menu-text">Eleftersyn</h5>
	</a>
	<a id="it_data" class="menuLeft" href="it-data">
		<img src="/images/it-data.jpg" class="produkt-image">
		<h5 class="menu-text">Tele IT & Netværk</h5>
	</a>
	<a id="hvidevarer" class="menuLeft" href="hvidevarer">
		<img src="/images/hvidevarer.jpg" class="produkt-image">
		<h5 class="menu-text">Hvidevarer</h5>
	</a>
	<a id="butik" class="menuLeft" href="butik">
		<img src="/images/butik.jpg" class="produkt-image">
		<h5 class="menu-text">Butik</h5>
	</a>
	`;

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

$(window).resize(resizePage);

function resizePage() {
	const mobileWidth = 860;
	const minWidth = 1675;

	let width = window.innerWidth;
	let height = window.innerHeight;

	if (width < 1060) {
		$(".header-text").hide();
		$(".header-logo").css("width", "100%");
		$("#header-logo").css("width", (width - 200) + "px");
		$("#header-nav").css("top", (width / 10 + 28) + "px");
	}
	else {
		$(".header-text").show();
		$(".header-logo").css("width", "70%");
		$("#header-logo").css("max-width", "100%");
	}

	if (width < mobileWidth) {
		$(".header-logo").css("position", "absolute");
		$(".header").css("position", "absolute");
		$("#header-nav").css("position", "absolute");
	}
	else {
		$(".header-logo").css("position", "fixed");
		$(".header").css("position", "fixed");
		$("#header-nav").css("position", "fixed");
	}

	$("#MenuBackgroundLeftInner").html(navSideHtml);

	if (width > minWidth) {
		$("#MenuBackgroundLeftInner").show();
		$(".menuLeft").css("width", "340px");
		$(".menu-text").show();
		$("#MenuBackgroundLeftInner").css("width", "340px");
		$("#menu2").html("");
		createMenu();
	}
	else if (width > (minWidth - 475)) {
		$("#MenuBackgroundLeftInner").show();
		$(".menuLeft").css("width", "115px");
		$("#menu2").html("");
		createMenu();

		$(".menu-text").hide();
	}
	else {
		$("#MenuBackgroundLeftInner").hide();
		$("#menu2").html(navTwoColumnHtml);

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
		$("#menu2").hide();
		$("#MenuBackgroundLeft").css("position", "absolute");
		$("#MenuBackgroundLeftInner").css("position", "absolute");
	}
	else {
		$("#MenuBackgroundLeft").css("position", "fixed");
		$("#MenuBackgroundLeftInner").css("position", "fixed");
		$("#menu2").show();
	}

	$(".menuItem").mouseover(() => {
		$(this).css("background", "rgb(88, 60, 54)");
		$(this).mouseout(() => {
			$(".menuItem").css("background", "rgb(91, 183, 91)");
			$(".menuItem").css("color", "white");
		})
	});

	setMenuSelected();
};

function createMenu() {
	$(".menuLeft").mouseover(() => {
		$("#MenuBackgroundLeftInner").css("width", "350px");
		$("#MenuBackgroundLeftInner").show();
		$(".menu-text").show();
		$(".menuLeft").css("width", "340px");
		removeMenu();
		$(".menuLeft").unbind("mouseover");
	});
}

function removeMenu() {
	$(".bg").mouseenter(() => {
		$("#MenuBackgroundLeftInner").css("width", "50px");
		$(".menuLeft").css("width", "115px");
		resizePage();
	});
}

function setMenuSelected() {
	let arr = $(location).attr("pathname").split("/");
	let arrr = arr[arr.length - 1].split(".");
	let urlName = arrr[0];

	$("#MenuBackgroundLeftInner").find("[id='" + urlName + "']").addClass("menuSelected");
	$("#menu2").find("[id='" + urlName + "']").addClass("menuSelected");
	$(".nav-main").find("[id='" + urlName + "']").addClass("nav-main-Selected");
}


//////// Event handlers ////////

$(".menuItem").mouseover(() => {
	$(this).css("background", "rgb(88, 60, 54)");
	$(this).mouseout(() => {
		$(".menuItem").css("background", "rgb(91, 183, 91)");
		$(".menuItem").css("color", "white");
	})
});
