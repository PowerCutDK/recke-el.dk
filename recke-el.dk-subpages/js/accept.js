$(document).ready(function() {


    function imageresize() {

        var Width = 1000;
        var Height = 1000;
        var godkendWidth = 600;

        if (typeof window.innerWidth != 'undefined') {
            Width = window.innerWidth;
            Height = window.innerHeight;
        }
        else if (typeof document.documentElement != 'undefined' && typeof document.documentElement.clientWidth != 'undefined' && document.documentElement.clientWidth != 0) {
            Width = document.documentElement.offsetWidth;
            Height = document.documentElement.offsetHeight;
        }
        if (Width < 768 && Width > 479) { $('.godkendKalv').css("width", "450px"); }
        else if (Width < 479) { $('.godkendKalv').css("width", "330px"); }
        else { $('.godkendKalv').css("width", "600px"); }

    }


    $('#vis').bind("click", function() {
        $('#aftale').show('slow');

    });
    $('#CheckBox1').bind("click", function() {
        if ($('#CheckBox1').is(':checked')) { $('.betingelser').hide('slow') }
        else { $('.betingelser').show('slow') }

    });
    $('#Godkend').bind("click", function() {
    alert($('#Email').val());
        if ($('#CheckBox1').is(':checked')) {
            //Til Test brug 'merchantnumber': "8017982", 
            paymentwindow = new PaymentWindow({
                'merchantnumber': "6144055",
                'amount': $("#Andel").attr("Dkk"),
                'currency': "DKK",
                'orderid': $("#Andel").attr("ordre") + "-" + $("#Andel").attr("kode"),
                'accepturl': "http://minkalv.dk/accept.aspx",
                'subscription': '1',
                'subscriptionname': $("#Andel").attr("ordre") + "%%" + $('#Email').val() + "%%" + $("#Andel").attr("Dkk"),
                'instantcollback': '0'


            });
            paymentwindow.open();
        }
        else { $('.betingelser').show('slow') }

    });

    imageresize(); //Triggers when document first loads    

    $(window).bind("resize", function() {//Adjusts image when browser resized
        imageresize();
    });
})
