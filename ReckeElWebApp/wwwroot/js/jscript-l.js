$(document).ready(function() {

	function removemenu() {
		//$('.MenuBackgroundLeftInner').bind("mouseout", function() {
		$('.bg').bind("mouseenter", function() {
			$("#MenuBackgroundLeftInner").css("width", "50px");
			$(".menuLeft").css("width", "115px");
			imageresize();
		});
	}

	function createmenu() {
		$('.menuLeft').bind("mouseover", function() {
			$("#MenuBackgroundLeftInner").css("width", "350px");
			$("#MenuBackgroundLeftInner").show('slow');
			$(".menu-text").show('slow');
			$(".menuLeft").css("width", "340px");
			removemenu();
			$('.menuLeft').unbind("mouseover");
			//alert("jeg er her nu");
		});
	}

	function menuSelected() {
		var arr = $(location).attr('pathname').split('/');
		var arrr = arr[arr.length - 1].split('.');
		var urlName = arrr[0];

		//$('#"+urlName+"').addClass("selected_menu");
		$("#MenuBackgroundLeftInner").find("[id='" + urlName + "']").addClass("menuSelected");
		$("#menu2").find("[id='" + urlName + "']").addClass("menuSelected");
		$(".nav-main").find("[id='" + urlName + "']").addClass("nav-main-Selected");
	}

	function imageresize() {
		var LmobilWidth = 860;
		var SmobilWidth = 700;
		var minWidth = 1675;
		var imgWidth = 475;
		var minHeight = 644;
		var Width = 1000;
		var Height = 1000;
		var godkendWidth = 600;
		var minWidthContainerBIG = 1390;
		var MinMenuWidth = 1000;

		if (typeof window.innerWidth != 'undefined') {
			Width = window.innerWidth;
			Height = window.innerHeight;
		}
		else if (typeof document.documentElement != 'undefined' && typeof document.documentElement.clientWidth != 'undefined' && document.documentElement.clientWidth != 0) {
			Width = document.documentElement.offsetWidth;
			Height = document.documentElement.offsetHeight;
		}

		if (Width < 1060) {

			$(".topText").hide('slow');
			$(".topLogo").css("width", "100%");
			$("#topLogo").css("width", Width - 200 + "px");
			$("#test").css("top", (Width / 10) + 28 + "px");
			$("#test2").css("top", (Width / 10) + 28 + "px");
		}
		else {
			$(".topText").show('slow');
			$(".topLogo").css("width", "70%");
			$("#topLogo").css("max-width", "100%");
		}

		if (Width < LmobilWidth) {
			$(".topLogo").css('position', "absolute");
			$(".header").css('position', "absolute");
			$("#test2").css("position", "absolute");
		}
		else {
			$(".topLogo").css('position', "fixed");
			$(".header").css('position', "fixed");
			$("#test2").css("position", "fixed");
		}

		$('#MenuBackgroundLeftInner').html('<a id="el_installation" class="menuLeft" href="elinstallation.html"><img  src="/images/elinstallation.jpg" class="produkt-image"><h5 class="menu-text">El Installation</h5><img  src="/images/mand.png" class="pil-right"></a><a id="Landbrug" class="menuLeft" href="landbrug.html"><img  src="/images/Landbrug.jpg" class="produkt-image"><h5 class="menu-text">Landbrug</h5><img  src="/images/mand.png" class="pil-right"</a><a id="Industri" class="menuLeft" href="industri.html"><img  src="/images/industri.jpg" class="produkt-image"><h5 class="menu-text">Industri</h5><img  src="/images/mand.png" class="pil-right"></a><a id="belysning" class="menuLeft" href="belysning.html"><img  src="/images/belysning.jpg" class="produkt-image"><h5 class="menu-text">Belysning</h5><img  src="/images/mand.png" class="pil-right"></a><a id="Energioptimering" class="menuLeft" href="energioptimering.html"><img  src="/images/energioptimering.jpg" class="produkt-image"><h5 class="menu-text">Energioptimering</h5><img  src="/images/mand.png" class="pil-right"></a><a id="Eleftersyn" class="menuLeft" href="eleftersyn.html"><img  src="/images/elsyn.jpg" class="produkt-image"><h5 class="menu-text">Eleftersyn</h5><img  src="/images/mand.png" class="pil-right"></a><a id="it_data" class="menuLeft" href="it-data.html"><img  src="/images/it-data.jpg" class="produkt-image"><h5 class="menu-text">Tele IT & Netværk</h5><img  src="/images/mand.png" class="pil-right"></a><a id="hvidevarer" class="menuLeft" href="hvidevarer.html"><img  src="/images/hvidevarer.jpg" class="produkt-image"><h5 class="menu-text">Hvidevarer</h5><img  src="/images/mand.png" class="pil-right"></a><a id="butik" class="menuLeft" href="butik.html"><img  src="/images/butik.jpg" class="produkt-image"><h5 class="menu-text">Butik</h5><img  src="/images/mand.png" class="pil-right"> </a>');

		menuSelected();

		if (Width > minWidth) {
			$("#MenuBackgroundLeftInner").show('slow');
			$(".menuLeft").css("width", "340px");
			$(".menu-text").show('slow');
			$("#MenuBackgroundLeftInner").css("width", "340px");
			$('#menu2').html("");
			createmenu();
		}
		if ((Width > (minWidth - 475)) && (Width < minWidth)) {
			$("#MenuBackgroundLeftInner").show('slow');
			$(".menuLeft").css("width", "115px");
			$('#menu2').html("");
			createmenu();

			//alert("jeg er her");
			$(".menu-text").hide();
		}

		if (Width < minWidth - 475) {
			$("#MenuBackgroundLeftInner").hide('slow');
			$('#menu2').html(' <br/><br/><br/><div class="eight columns "><a id="el_installation" class="menuLeft" href="elinstallation.html"><img  src="/images/elinstallation.jpg" class="produkt-image"><h5 class="menu-text">El Installation</h5><img  src="/images/mand.png" class="pil-right"></a><a id="Landbrug" class="menuLeft" href="landbrug.html"><img  src="/images/Landbrug.jpg" class="produkt-image"><h5 class="menu-text">Landbrug</h5><img  src="/images/mand.png" class="pil-right"</a><a id="Industri" class="menuLeft" href="industri.html"><img  src="/images/industri.jpg" class="produkt-image"><h5 class="menu-text">Industri</h5><img  src="/images/mand.png" class="pil-right"></a><a id="hvidevarer" class="menuLeft" href="hvidevarer.html"><img  src="/images/hvidevarer.jpg" class="produkt-image"><h5 class="menu-text">Hvidevarer</h5><img  src="/images/mand.png" class="pil-right"></a><a id="butik" class="menuLeft" href="butik.html"><img  src="/images/butik.jpg" class="produkt-image"><h5 class="menu-text">Butik</h5><img  src="/images/mand.png" class="pil-right"> </a></div>' +
				'<div class="eight columns "><a id="Energioptimering" class="menuLeft" href="energioptimering.html"><img  src="/images/energioptimering.jpg" class="produkt-image"><h5 class="menu-text">Energioptimering</h5><img  src="/images/mand.png" class="pil-right"></a><a id="Eleftersyn" class="menuLeft" href="eleftersyn.html"><img  src="/images/elsyn.jpg" class="produkt-image"><h5 class="menu-text">Eleftersyn</h5><img  src="/images/mand.png" class="pil-right"></a><a id="belysning" class="menuLeft" href="belysning.html"><img  src="/images/belysning.jpg" class="produkt-image"><h5 class="menu-text">Belysning</h5><img  src="/images/mand.png" class="pil-right"></a><a id="it_data" class="menuLeft" href="it-data.html"><img  src="/images/it-data.jpg" class="produkt-image"><h5 class="menu-text">Tele IT & Netværk</h5><img  src="/images/mand.png" class="pil-right"></a></div><div class="clear"></div>');

			$(".pil-right").css("width", "21px");
			$(".menuLeft").css("width", "340px");
			$(".produkt-image").css("width", "75px");

			//if (Width < 767) { $("html, body").animate({ scrollTop: 550 }, 2000); }
			//else { $("html, body").animate({ scrollTop: 300 }, 2000); }

			if (Width < 450) {
				$('.menu-text').addClass('MobileCss');
				$(".menuLeft").css("width", "280px");
				$(".lines").css("font-size", "45px");
			}
			else {
				$('.menu-text').removeClass('MobileCss');
				$(".menuLeft").css("width", "340px");
			}
			menuSelected();
		}

		if (Width < minWidthContainerBIG) {
			$('.containerBIG').hide('slow');
		}

		if (Width < imgWidth) {
			$('.ansatImg').css("width", Width - 75 + "px");
		}

		if (Width > imgWidth) {
			if (1000 > Width) { $('.ansatImg').css("width", "350px"); }
			else { $('.ansatImg').css("width", "450px"); }
		}

		if (Width > minWidthContainerBIG) {
			$('.containerBIG').show('slow');
			//$('.containerBIG').css("width",minWidthContainerBIG );
		}

		if (Width < MinMenuWidth) {
			var LocalUrl = location.href;
			// $("#MenuBackground").hide();
			// $('#Menu').css("width", Width + "px");
			$('#kontakt').html('Recke-El ApS  <a href="tel:62 26 10 18">62 26 10 18</a>  <a href="mailto:mail@recke-el.dk">mail@recke-el.dk</a> ');
			$('#test2').html('<nav class="nav-main"><a id="kontakt-os" href="kontakt.html">Kontakt</a><a> &#183; </a><a id="led" href="led.html">Ekspert i Led belysning</a><a> &#183; </a><a> &#183; </a><a id="om-os" href="om.html">Om os</a><a> &#183; </a><a href="/">Forside</a></nav>');
			menuSelected();
		}

		if (Width > (MinMenuWidth)) {
			$('#kontakt').html(' <ul><li>Recke-El ApS</li><li>Stationsvej 54</li><li>5771 Stenstrup</li><li>62 26 10 18</li><li><a href="mailto:mail@recke-el.dk">mail@recke-el.dk</a></li></ul>');
			$('#test2').html('<nav class="nav-main"><a id="kontakt-os" href="kontakt.html">Kontakt</a><a> &#183; </a><a id="led" href="led.html">Ekspert i Led belysning</a><a> &#183; </a><a id="om-os" href="om.html">Om os</a><a> &#183; </a><a href="/">Forside</a></nav>');
			menuSelected();
			$('.nav-main').css('margin-top', '0px');
		}

		if (Height < 700) {
			$("#menu2").hide();
			$("#MenuBackgroundLeft").css("position", "absolute");
			$("#MenuBackgroundLeftInner").css("position", "absolute");
		}
		else {
			$("#MenuBackgroundLef").css("position", "fixed");
			$("#MenuBackgroundLeftInner").css("position", "fixed");
			$("#menu2").show();
		}

		$('.menuItem').bind("mouseover", function() {
			//var color = $(this).css("background-color");

			$(this).css("background", "rgb(88, 60, 54)");
			$(this).bind("mouseout", function() {
				$('.menuItem').css("background", "rgb(91, 183, 91)");
				$('.menuItem').css("color", "white");
			})
		});
	};

	imageresize(); // Triggers when document first loads

	$(window).bind("resize", function() { // Adjusts image when browser resized
		imageresize();
	});

	//if (1 == 1) { alert("test"); };

	$('.menuItem').bind("mouseover", function() {
		//var color = $(this).css("background-color");
		$(this).css("background", "rgb(88, 60, 54)");
		$(this).bind("mouseout", function() {
			$('.menuItem').css("background", "rgb(91, 183, 91)");
			$('.menuItem').css("color", "white");
		})
	});

	$(".top").click(function() { $("html, body").animate({ scrollTop: $(".home").offset().top }, 2000); });
	$(".en").click(function() { $("html, body").animate({ scrollTop: $("#en").offset().top }, 2000); });
	$(".to").click(function() { $("html, body").animate({ scrollTop: $("#to").offset().top }, 2000); });
	$(".tre").click(function() { $("html, body").animate({ scrollTop: $("#tre").offset().top }, 2000); });
	$(".fire").click(function() { $("html, body").animate({ scrollTop: $("#fire").offset().top }, 2000); });
	$(".bund").click(function() { $("html, body").animate({ scrollTop: $(document).height() }, 2000); });
});
