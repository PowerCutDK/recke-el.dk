$(document).ready(function() {

    getKalv("55");

    $(".Save").click(function() {
        var Id = $(this).closest('div').attr('id');
        webserviceSetData(Id);
        $(this).hide();
    });


    //$(".emne").click(function() {
    //    var value = $("input[name=option]:checked").val();
    //    $(".formularHedder h1").html(value);
    //    // alert(value);
    //});

    $("#Send").click(function() {
        //getKalv(55);



        var Send = true;

        if ($("#Navn").val() == "") {
            $(".HuskNavn").show('slow');
            Send = false;
        }
        else {
            $(".HuskNavn").hide();
        }
        if ($("#Email").val() == "") {
            $(".HuskEmail").show('slow');
            Send = false;
        }
        else {
            $(".HuskEmail").hide();
        }
        if ($("#Telefon").val() == "") {
            $(".HuskTelefon").show('slow');
            Send = false;
        }
        else {
            $(".HuskTelefon").hide();
        }
        if ($("#Adresse").val() == "") {
            $(".HuskAdresse").show('slow');
            Send = false;
        }
        else {
            $(".HuskAdresse").hide();
        }
        if ($("#Post").val() == "") {
            $(".HuskPost").show('slow');
            Send = false;
        }
        else {
            $(".HuskPost").hide();
        }




        if (Send == true) {

            webserviceSetData($("#LabelForhandler").val())
            $(".HuskBesked").html("Tak for din henvendelse, vi vender tilbage hurtigs muligt.");
            $(".HuskBesked").show('slow');

            $("#Navn").val("");
            $("#Email").val("");
            $("#Telefon").val("");
            $("#Post").val("");
            $("#Adresse").val("");
            $("#By").val("");
            $("#SelectType").val("En 1/8 kalv");
            $('#Send').html('<img src="images/BEKREFTELSE.gif" />');

        }
        if (Send == false) { $('.sendImg').attr('src', 'images/sendknapmangler.gif'); }

        //$.iframeHeightExternal();

    });
    $('#SelectType').bind("change", function() {


        $(".smallImages").hide();
        $(".levering").hide();
        $(".vakum").hide();
        $("." + $("#SelectType option:selected").val()).show();
        //alert("Selection: " + $("#SelectType option:selected").val());

    });
    
     $("#KalveBilleder").mouseenter(function() {
        
        $(".smallImages").bind("click", function(){
        // alert("test");
        $("#ValgtKalv").attr("src", "UploadedImages/" + $(this).attr("imgid") + ".jpg");
    
    });});
    $(".smallImages").bind("click", function(){
         alert("test");
        $("#ValgtKalv").attr("src", "UploadedImages/" + $(this).attr("imgID") + ".jpg");
    
    });
    
    $('.sendImg').mouseenter(function() {
        $('.sendImg').attr('src', 'images/Send-Knap-hover.gif');
    });
    $('.sendImg').mouseleave(function() {
        $('.sendImg').attr('src', 'images/Send-Knap.gif');
        });

});


function pageLoad() {
    
}

var getKalv = function(andel, ckr) {

    var html = "";
    //alert(andel);
    
    $.ajax({
               type: "POST",
               contentType: "application/json; charset=utf-8",
               url: "http://localhost:4914/WebService1.asmx/getKalv",
               data: '{andel: "' + andel + '" }',
               //data: '{ strAuthor: "' + $("#txtAuthor").val() + '" }',
               dataType: "json",
               success: function(msg) {
                   var c = eval(msg.d);
                   var clas;
                   //$(".levering").hide();
                   //$(".vakum").hide();
                   //$("#ValgtKalv").attr("src", "UploadedImages/" + c[0][1] + ".jpg");
                   //$("#CKR").html("CKR nr: " + c[0][2]+ " &nbsp; &nbsp; &nbsp; Navn: " + c[0][4] + " &nbsp; &nbsp; &nbsp; Født: " + c[0][6] + "<BR/>" + c[0][3] + "<BR/><BR/>");
                   $("#BestilForm").html(c[0][0]); 
                   /*for (var i in c) {
                        var andele = c[i][5];
                        if (andele == "1") { classs = "class='smallImages 8'" }
                        if (andele == "2") { classs = "class='smallImages 4 8'" }
                        if (andele == "3") { classs = "class='smallImages 4 8'" }
                        if (andele == "4") { classs = "class='smallImages 2 4 8'" }
                        if (andele == "5") { classs = "class='smallImages 2 4 8'" }
                        if (andele == "6") { classs = "class='smallImages 2 4 8'" }
                        if (andele == "7") { classs = "class='smallImages 2 4 8'" }
                        if (andele == "8") { classs = "class='smallImages 1 2 4 8'" }
                        
                        var div = $("<div id='" + c[i][0] + "' " + classs + " imgid='"+ c[i][1] +"'><img src='SmallImages/" + c[i][1] + ".jpg'/></div>");
                        $("#KalveBilleder").append(div);
                   
                        //$("#ResultsTable tr:last").after("<tr><td>" + c[i][0] + "</td><td>" + c[i][1] + "</td><td>" + c[i][2] + "</td></tr>");
                   }
                   */             
               }
         });
    
    /**
    
    $.ajax({
        type: 'POST',
        url: 'http://localhost:4914/WebService1.asmx/getKalv',
        data: { 'andel': andel },
        complete: function(xData, status) {
            var str = $(xData.responseText).text();
            var sub = str.split("%Q*Q%");
            for (var i = 0; i < (sub.length - 1); i++) {

                var subst = $(sub[i].split("%2*2%"));
                var div = "<div id='" + subst[0] + "' class='smallImages'><img src='SmallImages/" + subst[1] + ".jpg'/></div>";
                html = html + div;

            }
            $("#KalveBilleder").html(html);
        }
    });
*/
}



var webserviceSetData = function(ID) {


   
    var Navn = $('#Navn').val();
    var Email = $('#Email').val();
    var Telefon = $('#Telefon').val();
    var Adresse = $('#Adresse').val();
    var Post = $('#Post').val();
    var By = $('#By').val();
    var SelectType = $('#SelectType').val();


    $.ajax({
        type: 'POST',
        url: 'WebService1.asmx/SendMail',

        data: { 'Navn': Navn, 'Email': Email, 'Telefon': Telefon, 'Adresse': Adresse, 'Post': Post, 'By': By, 'SelectType': SelectType },
        complete: function(xData, status) {
        }
    });


}

