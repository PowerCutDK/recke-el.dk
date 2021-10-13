$(document).ready(function() {








    imageresize(); //Triggers when document first loads    
    $("html, body").animate({ scrollTop: 310 }, 4000);
    $(window).bind("resize", function() {//Adjusts image when browser resized
        imageresize();
    });
});

function imageresize() {
//
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


    $("h1").css("font-size", parseInt(Width / 60) + "px");
    $(".nav-hedder2").css("font-size", parseInt(Width / 85) + "px");
    //alert(parseInt(Width/75) + "px");

    if (Width < SmobilWidth) {

        $("#el-merke").hide();
        $("#mand").show('slow');

        $("#hedderlogo").css("width", "55%");
        $("#hundslund").hide('slow');
        $("#odder").css("width", "100%");
        $("#malling").hide('slow');
        $("h1").css("font-size", parseInt(Width / 27) + "px");
        $(".nav-hedder2").css("font-size", parseInt(Width / 35) + "px");
    }


    else if (Width < LmobilWidth) {

        $("#mand").show('slow');
        $("#el-merke").show();
        $("#hedderlogo").css("width", "55%");
        $("#hundslund").hide('slow');
        $("#odder").css("width", "100%");
        $("#malling").hide('slow');
        $("h1").css("font-size", parseInt(Width / 30) + "px");
        $(".nav-hedder2").css("font-size", parseInt(Width / 45) + "px");
        ;
    }



    else if (Width < minWidth) {
        $("#mand").hide('slow');
        $("#el-merke").hide();
        $("#hedderlogo").css("width", "100%");
        $("#hundslund").show('slow');
        $("#odder").css("width", "30%");
        $("#malling").show('slow');
        $("h1").css("font-size", parseInt(Width / 45) + "px");
        $(".nav-hedder2").css("font-size", parseInt(Width / 70) + "px");


        //$("h1").css("font-size", "22px");
        //$(".nav-hedder2").css("font-size", "16px")

    }
    else if (Width < 1460) {
        $("#mand").show('slow');
        $("#el-merke").hide();
        $("#hedderlogo").css("width", "74%");
        $("#hundslund").show('slow');
        $("#odder").css("width", "30%");
        $("#malling").show('slow');

        $("h1").css("font-size", parseInt(Width / 66) + "px");
        $(".nav-hedder2").css("font-size", parseInt(Width / 80) + "px");
        $("#el-merke").show('slow');

        //$("h1").css("font-size", "24px");
        //$(".nav-hedder2").css("font-size", "18px");
    }


    else {
        $("#el-merke").show('');
        $("#mand").show('slow');

        $("#hedderlogo").css("width", "75%");
        $("#hundslund").show('slow');
        $("#odder").css("width", "30%");
        $("#malling").show('slow');

        $("h1").css("font-size", parseInt(Width / 70) + "px");
        $(".nav-hedder2").css("font-size", parseInt(Width / 80) + "px");
        $("#el-merke").show('slow');

    }
    //else{$("#el-merke").hide('slow');}
};