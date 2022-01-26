//////// Variables ////////

const contactHtmlSingleLine = `Recke-El ApS<a href="tel:62 26 10 18">62 26 10 18</a> <a href="mailto:mail@recke-el.dk">mail@recke-el.dk</a>`;

const contactHtml1 = `
	<nav class="nav-main">
		<a id="kontakt-os" href="kontakt">Kontakt</a>
		<a> &#183; </a>
		<a id="led" href="led">Ekspert i Led belysning</a>
		<a> &#183; </a>
		<a> &#183; </a>
		<a id="om-os" href="om">Om os</a>
		<a> &#183; </a>
		<a href="/">Forside</a>
	</nav>
	`;

const contactHtml2 = `
	<ul>
		<li>Recke-El ApS</li>
		<li>Stationsvej 54</li>
		<li>5771 Stenstrup</li>
		<li>62 26 10 18</li>
		<li><a href="mailo:mail@recke-el.dk">mail@recke-el.dk</a></li>
	</ul>
	`;

const contactHtml3 = `
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
	let mobileWidth = 860;
	let minWidth = 1675;
	let imgWidth = 475;
	let width = 1000;
	let height = 1000;
	let minWidthContainerBig = 1390;
	let menuMinWidth = 1000;

	if (typeof window.innerWidth != "undefined") {
		width = window.innerWidth;
		height = window.innerHeight;
	}
	else if (typeof document.documentElement != "undefined" && typeof document.documentElement.clientWidth != "undefined" && document.documentElement.clientWidth != 0) {
		width = document.documentElement.offsetWidth;
		height = document.documentElement.offsetHeight;
	}

	if (width < 1060) {

		$(".topText").hide("slow");
		$(".topLogo").css("width", "100%");
		$("#topLogo").css("width", width - 200 + "px");
		$("#test").css("top", (width / 10) + 28 + "px");
		$("#test2").css("top", (width / 10) + 28 + "px");
	}
	else {
		$(".topText").show("slow");
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

	setMenuSelected();

	if (width > minWidth) {
		$("#MenuBackgroundLeftInner").show("slow");
		$(".menuLeft").css("width", "340px");
		$(".menu-text").show("slow");
		$("#MenuBackgroundLeftInner").css("width", "340px");
		$("#menu2").html("");
		createMenu();
	}
	if ((width > (minWidth - 475)) && (width < minWidth)) {
		$("#MenuBackgroundLeftInner").show("slow");
		$(".menuLeft").css("width", "115px");
		$("#menu2").html("");
		createMenu();

		$(".menu-text").hide();
	}

	if (width < minWidth - 475) {
		$("#MenuBackgroundLeftInner").hide("slow");
		$("#menu2").html(menuHtml2);

		$(".pil-right").css("width", "21px");
		$(".menuLeft").css("width", "340px");
		$(".produkt-image").css("width", "75px");

		//if (width < 767) { $("html, body").animate({ scrollTop: 550 }, 2000); }
		//else { $("html, body").animate({ scrollTop: 300 }, 2000); }

		if (width < 450) {
			$(".menu-text").addClass("MobileCss");
			$(".menuLeft").css("width", "280px");
			$(".lines").css("font-size", "45px");
		}
		else {
			$(".menu-text").removeClass("MobileCss");
			$(".menuLeft").css("width", "340px");
		}
		setMenuSelected();
	}

	if (width < minWidthContainerBig) {
		$(".containerBIG").hide("slow");
	}

	if (width < imgWidth) {
		$(".ansatImg").css("width", width - 75 + "px");
	}

	if (width > imgWidth) {
		if (1000 > width) { $(".ansatImg").css("width", "350px"); }
		else { $(".ansatImg").css("width", "450px"); }
	}

	if (width > minWidthContainerBig) {
		$(".containerBIG").show("slow");
		//$(".containerBIG").css("width",minWidthContainerBig );
	}

	if (width < menuMinWidth) {
		// $("#MenuBackground").hide();
		// $("#Menu").css("width", width + "px");
		$("#kontakt").html(contactHtmlSingleLine);
		$("#test2").html(contactHtml1);
		setMenuSelected();
	}

	if (width > (menuMinWidth)) {
		$("#kontakt").html(contactHtml2);
		$("#test2").html(contactHtml3);
		setMenuSelected();
		$(".nav-main").css("margin-top", "0px");
	}

	if (height < 700) {
		$("#menu2").hide();
		$("#MenuBackgroundLeft").css("position", "absolute");
		$("#MenuBackgroundLeftInner").css("position", "absolute");
	}
	else {
		$("#MenuBackgroundLef").css("position", "fixed");
		$("#MenuBackgroundLeftInner").css("position", "fixed");
		$("#menu2").show();
	}

	$(".menuItem").mouseover(() => {
		//let color = $(this).css("background-color");

		$(this).css("background", "rgb(88, 60, 54)");
		$(this).mouseout(() => {
			$(".menuItem").css("background", "rgb(91, 183, 91)");
			$(".menuItem").css("color", "white");
		})
	});
};

function createMenu() {
	$(".menuLeft").mouseover(() => {
		$("#MenuBackgroundLeftInner").css("width", "350px");
		$("#MenuBackgroundLeftInner").show("slow");
		$(".menu-text").show("slow");
		$(".menuLeft").css("width", "340px");
		removeMenu();
		$(".menuLeft").unbind("mouseover");
	});
}

function removeMenu() {
	//$(".MenuBackgroundLeftInner").mouseout(() => {
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

	//$('#"+urlName+"').addClass("selected_menu");
	$("#MenuBackgroundLeftInner").find("[id='" + urlName + "']").addClass("menuSelected");
	$("#menu2").find("[id='" + urlName + "']").addClass("menuSelected");
	$(".nav-main").find("[id='" + urlName + "']").addClass("nav-main-Selected");
}


//////// Event handlers ////////

$(".menuItem").mouseover(() => {
	//let color = $(this).css("background-color");
	$(this).css("background", "rgb(88, 60, 54)");
	$(this).mouseout(() => {
		$(".menuItem").css("background", "rgb(91, 183, 91)");
		$(".menuItem").css("color", "white");
	})
});

$(".top").click(() => {$("html, body").animate({ scrollTop: $(".home").offset().top }, 2000); });
$(".en").click(() => { $("html, body").animate({ scrollTop: $("#en").offset().top }, 2000); });
$(".to").click(() => { $("html, body").animate({ scrollTop: $("#to").offset().top }, 2000); });
$(".tre").click(() => { $("html, body").animate({ scrollTop: $("#tre").offset().top }, 2000); });
$(".fire").click(() => { $("html, body").animate({ scrollTop: $("#fire").offset().top }, 2000); });
$(".bund").click(() => { $("html, body").animate({ scrollTop: $(document).height() }, 2000); });
