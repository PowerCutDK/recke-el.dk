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

        /* Height = $('#OuterTabel').height();*/
        $('#MenuBackgroundLeftInner').html('<a id="el_installation" class="menuLeft" href="el_installation.html"><img  src="./images/el_installation.jpg" class="produkt-image"><h5 class="menu-text">El Installation</h5><img  src="./images/mand.png" class="pil-right"></a><a id="alarm" class="menuLeft" href="alarm.html"><img  src="./images/talevarsling.jpg" class="produkt-image"><h5 class="menu-text">Alarm & Varsling</h5><img  src="./images/mand.png" class="pil-right"> </a><a id="IQ-installation" class="menuLeft" href="IQ-installation.html"><img  src="./images/Privat_komm.jpg" class="produkt-image"><h5 class="menu-text">IQ installation</h5><img  src="./images/mand.png" class="pil-right"</a><a id="Telefoner" class="menuLeft" href="Telefoner.html"><img  src="./images/Doertelefon.jpg" class="produkt-image"><h5 class="menu-text">Dørtelefoner</h5><img  src="./images/mand.png" class="pil-right"></a><a id="Sikring" class="menuLeft" href="Sikring.html"><img  src="./images/sikring_2.jpg" class="produkt-image"><h5 class="menu-text">Sikring</h5><img  src="./images/mand.png" class="pil-right"></a><a id="it_data" class="menuLeft" href="it_data.html"><img  src="./images/it_data.jpg" class="produkt-image"><h5 class="menu-text">Tele, IT & Netværk</h5><img  src="./images/mand.png" class="pil-right"></a>');
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
            $('#menu2').html(' <br/><br/><br/><div class="eight columns "><a id="el_installation" class="menuLeft" href="el_installation.html"><img  src="./images/el_installation.jpg" class="produkt-image"><h5 class="menu-text">El Installation</h5><img  src="./images/mand.png" class="pil-right"></a><a id="alarm" class="menuLeft" href="alarm.html"><img  src="./images/talevarsling.jpg" class="produkt-image"><h5 class="menu-text">Alarm & Varsling</h5><img  src="./images/mand.png" class="pil-right"> </a><a id="IQ-installation" class="menuLeft" href="IQ-installation.html"><img  src="./images/Privat_komm.jpg" class="produkt-image"><h5 class="menu-text">IQ installation</h5><img  src="./images/mand.png" class="pil-right"</a></div>' +
             '<div class="eight columns "><a id="Telefoner" class="menuLeft" href="Telefoner.html"><img  src="./images/Doertelefon.jpg" class="produkt-image"><h5 class="menu-text">Dørtelefoner</h5><img  src="./images/mand.png" class="pil-right"></a><a id="Sikring" class="menuLeft" href="Sikring.html"><img  src="./images/sikring_2.jpg" class="produkt-image"><h5 class="menu-text">Sikring</h5><img  src="./images/mand.png" class="pil-right"></a><a id="it_data" class="menuLeft" href="it_data.html"><img  src="./images/it_data.jpg" class="produkt-image"><h5 class="menu-text">Tele, IT & Netværk</h5><img  src="./images/mand.png" class="pil-right"></a></div><div class="clear"></div>');

            $(".pil-right").css("width", "21px");
            $(".menuLeft").css("width", "340px");
            $(".produkt-image").css("width", "75px");

            if (Width < 767) { $("html, body").animate({ scrollTop: 550 }, 2000); }

            else { $("html, body").animate({ scrollTop: 300 }, 2000); }



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
            $("#Menu").html('<img alt="Billede mangler" src="./images/logo.png" width="350";><div style="float:right; padding-right:30px"><div id="ring"><a href="tel:36413181"><h5><br>RING PÅ<br>36 41 31 81 </h5></a> </div></div>');
            //$("#MenuBackground").hide();
            $('#Menu').css("width", Width + "px");
            $('#kontakt').html('Steen Rasmussen & Søn ApS  <a href="tel:36413181">36 41 31 81</a>  <a href="mailto:info@sr-el.dk">info@sr-el.dk</a> ');
            $('#test2').html('<nav class="nav-main"><a id="kontakt-os" href="kontakt-os.html">Kontakt</a><a> &#183; </a><a id="garenti-ordning" href="garenti-ordning.html">Garenti</a><a> &#183; </a><a id="medarbejder" href="">Medarbejdere</a><a> &#183; </a><a id="om-os" href="om-os.html">Om os</a><a> &#183; </a><a href="http://www.sr-el.dk">Forside</a></nav>');
            menuSelected();
            if (Width < 500) {
                $('#ring').hide();
                $('#ring').css('padding-right', '30px');
                $('.nav-main').css('margin-top', '-50px');
                $('#MenuBackground').css("height", "140px");
            }
            else {
                $('.nav-main').css('margin-top', '-50px');

                $('#MenuBackground').css("height", "100px");

            }

        }



        if (Width > (MinMenuWidth)) {

            $("#Menu").html('<img alt="Billede mangler" src="./images/logo.png" width="850" height="120"><div style="float:right; padding-right:30px"><h5><br>RING På<br>36 41 31 81 </h5> </div>');
            $('#kontakt').html(' <ul><li>Steen Rasmussen & Søn ApS</li><li>Egegårdsvej 56 </li><li>2610 Rødovre</li><li>36 41 31 81</li><li><a href="mailto:info@sr-el.dk">info@sr-el.dk</a></li></ul>');

            $('#MenuBackground').show('slow');
            $('#Menu').css("width", Width + "px");
            $('#test2').html('<nav class="nav-main"><a id="kontakt-os" href="kontakt-os.html">Kontakt</a><a> &#183; </a><a id="garenti-ordning" href="garenti-ordning.html">Garenti</a><a> &#183; </a><a id="medarbejder" href="">Medarbejdere</a><a> &#183; </a><a id="om-os" href="om-os.html">Om os</a><a> &#183; </a><a href="http://www.sr-el.dk">Forside</a></nav>');
            menuSelected();
            $('.nav-main').css('margin-top', '0px');
            $('#MenuBackground').css("height", "150px");

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
    //window.scroll(0, $("#en").offset().top);


    imageresize(); //Triggers when document first loads    

    $(window).bind("resize", function() {//Adjusts image when browser resized
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
