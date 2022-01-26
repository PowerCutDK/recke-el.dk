//////// Variables ////////

const contactHtmlSingleLine = `Recke-El ApS <a href="tel:62 26 10 18">62 26 10 18</a> <a href="mailto:mail@recke-el.dk">mail@recke-el.dk</a>`;

const headerNavHtml = `
	<nav class="nav-main">
		<a id="kontakt-os" href="kontakt">Kontakt</a>
		<a> &#183; </a>
		<a id="led" href="led">Ekspert i Led belysning</a>
		<a> &#183; </a>
		<a id="om-os" href="om">Om os</a>
		<a> &#183; </a>
		<a href="/">Forside</a>
	</nav>
	`;

const contactHtml = `
	<ul>
		<li>Recke-El ApS</li>
		<li>Stationsvej 54</li>
		<li>5771 Stenstrup</li>
		<li>62 26 10 18</li>
		<li><a href="mailo:mail@recke-el.dk">mail@recke-el.dk</a></li>
	</ul>
	`;

const menuHtml1 = `
	<a id="el_installation" class="menuLeft" href="elinstallation">
		<img src="/images/elinstallation.jpg" class="produkt-image">
		<h5 class="menu-text">El Installation</h5>
		<img src="/images/mand.png" class="pil-right">
	</a>
	<a id="Landbrug" class="menuLeft" href="landbrug">
		<img src="/images/Landbrug.jpg" class="produkt-image">
		<h5 class="menu-text">Landbrug</h5>
		<img src="/images/mand.png" class="pil-right">
	</a>
	<a id="Industri" class="menuLeft" href="industri">
		<img src="/images/industri.jpg" class="produkt-image">
		<h5 class="menu-text">Industri</h5>
		<img src="/images/mand.png" class="pil-right">
	</a>
	<a id="belysning" class="menuLeft" href="belysning">
		<img src="/images/belysning.jpg" class="produkt-image">
		<h5 class="menu-text">Belysning</h5>
		<img src="/images/mand.png" class="pil-right">
	</a>
	<a id="Energioptimering" class="menuLeft" href="energioptimering">
		<img src="/images/energioptimering.jpg" class="produkt-image">
		<h5 class="menu-text">Energioptimering</h5>
		<img src="/images/mand.png" class="pil-right">
	</a>
	<a id="Eleftersyn" class="menuLeft" href="eleftersyn">
		<img src="/images/elsyn.jpg" class="produkt-image">
		<h5 class="menu-text">Eleftersyn</h5>
		<img src="/images/mand.png" class="pil-right">
	</a>
	<a id="it_data" class="menuLeft" href="it-data">
		<img src="/images/it-data.jpg" class="produkt-image">
		<h5 class="menu-text">Tele IT & Netværk</h5>
		<img src="/images/mand.png" class="pil-right">
	</a>
	<a id="hvidevarer" class="menuLeft" href="hvidevarer">
		<img src="/images/hvidevarer.jpg" class="produkt-image">
		<h5 class="menu-text">Hvidevarer</h5>
		<img src="/images/mand.png" class="pil-right">
	</a>
	<a id="butik" class="menuLeft" href="butik">
		<img src="/images/butik.jpg" class="produkt-image">
		<h5 class="menu-text">Butik</h5>
		<img src="/images/mand.png" class="pil-right">
	</a>
	`;

const menuHtml2 = `
	<br /><br /><br />
	<div class="eight columns">
		<a id="el_installation" class="menuLeft" href="elinstallation">
			<img src="/images/elinstallation.jpg" class="produkt-image">
			<h5 class="menu-text">El Installation</h5>
			<img src="/images/mand.png" class="pil-right">
		</a>
		<a id="Landbrug" class="menuLeft" href="landbrug">
			<img src="/images/Landbrug.jpg" class="produkt-image">
			<h5 class="menu-text">Landbrug</h5>
			<img src="/images/mand.png" class="pil-right">
		</a>
		<a id="Industri" class="menuLeft" href="industri">
			<img src="/images/industri.jpg" class="produkt-image">
			<h5 class="menu-text">Industri</h5>
			<img src="/images/mand.png" class="pil-right">
		</a>
		<a id="hvidevarer" class="menuLeft" href="hvidevarer">
			<img src="/images/hvidevarer.jpg" class="produkt-image">
			<h5 class="menu-text">Hvidevarer</h5>
			<img src="/images/mand.png" class="pil-right">
		</a>
		<a id="butik" class="menuLeft" href="butik">
			<img src="/images/butik.jpg" class="produkt-image">
			<h5 class="menu-text">Butik</h5>
			<img src="/images/mand.png" class="pil-right">
		</a>
	</div>
	<div class="eight columns">
		<a id="Energioptimering" class="menuLeft" href="energioptimering">
			<img src="/images/energioptimering.jpg" class="produkt-image">
			<h5 class="menu-text">Energioptimering</h5>
			<img src="/images/mand.png" class="pil-right">
		</a>
		<a id="Eleftersyn" class="menuLeft" href="eleftersyn">
			<img src="/images/elsyn.jpg" class="produkt-image">
			<h5 class="menu-text">Eleftersyn</h5>
			<img src="/images/mand.png" class="pil-right">
		</a>
		<a id="belysning" class="menuLeft" href="belysning">
			<img src="/images/belysning.jpg" class="produkt-image">
			<h5 class="menu-text">Belysning</h5>
			<img src="/images/mand.png" class="pil-right">
		</a>
		<a id="it_data" class="menuLeft" href="it-data">
			<img src="/images/it-data.jpg" class="produkt-image">
			<h5 class="menu-text">Tele IT & Netværk</h5>
			<img src="/images/mand.png" class="pil-right">
		</a>
	</div>
	<div class="clear"></div>
	`;



resizePage();

$(window).resize(resizePage);

function resizePage() {
	const mobileWidth = 860;
	const minWidth = 1675;
	const menuMinWidth = 1000;

	let width = window.innerWidth;
	let height = window.innerHeight;

	if (width < 1060) {
		$(".topText").hide();
		$(".topLogo").css("width", "100%");
		$("#topLogo").css("width", (width - 200) + "px");
		$("#test2").css("top", (width / 10 + 28) + "px");
	}
	else {
		$(".topText").show();
		$(".topLogo").css("width", "70%");
		$("#topLogo").css("max-width", "100%");
	}

	if (width < mobileWidth) {
		$(".topLogo").css("position", "absolute");
		$(".header").css("position", "absolute");
		$("#test2").css("position", "absolute");
	}
	else {
		$(".topLogo").css("position", "fixed");
		$(".header").css("position", "fixed");
		$("#test2").css("position", "fixed");
	}

	$("#MenuBackgroundLeftInner").html(menuHtml1);

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
		$("#menu2").html(menuHtml2);

		$(".pil-right").css("width", "21px");
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

	if (width < menuMinWidth) {
		$("#kontakt").html(contactHtmlSingleLine);
	}
	else {
		$("#kontakt").html(contactHtml);
		$(".nav-main").css("margin-top", "0px");
	}

	$("#test2").html(headerNavHtml);

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
