$(document).ready(function() {

  function imageresize() {

    var minWidth = 1580;
    var imgWidth = 475;
    var minHeight = 644;
    var Width = 1000;
    var Height = 1000;
    var minWidthContainerBIG  = 1390; 
    var MinMenuWidth = 1000;
    if (typeof window.innerWidth != 'undefined'){
      Width = window.innerWidth;
      Height = window.innerHeight;
    } 
    else if (typeof document.documentElement !='undefined' && typeof document.documentElement.clientWidth !='undefined'&& document.documentElement.clientWidth != 0){
      Width = document.documentElement.offsetWidth;
      Height = document.documentElement.offsetHeight;
    }
    
    /* Height = $('#OuterTabel').height();*/
     
    if(Width > minWidth){
      $("#MenuBackgroundLeft").show('slow');
      $("#MenuBackgroundLeftInner").show('slow');
      $('.live').css("width","1280px").css("height","720px");
    }
    if(Width<minWidthContainerBIG){
      $('.live').css("width",Width-85);
      $('.live').css("height",(Width*9/16));
      $('.containerBIG').hide();
    }  
     
     if(Width < imgWidth){
        $('.ansatImg').css("width",Width-75 + "px");
     }
     if(Width > imgWidth){
        if(1000>Width){$('.ansatImg').css("width","350px");}
        else{$('.ansatImg').css("width","450px");}
        
     }
     
    
     if(Width>minWidthContainerBIG){
      $('.containerBIG').show('slow');
      
      //$('.containerBIG').css("width",minWidthContainerBIG );
     }  
     
           if(Width < minWidth){
         
           $("#MenuBackgroundLeft").hide('slow');
            $("#MenuBackgroundLeftInner").hide('slow');
        
     }
     
     if(Width<MinMenuWidth){
     $("#MenuBackground").hide();
      $('#menu').css("width",Width + "px");
       $('#kontakt').html('MIN KALV  <a href="tel:77346333">77346333</a>  <a href="mailto:info@minkalvndk">info@minkalv.dk</a> '); 
       $('.iframe').hide();
     }  
     if(Width>MinMenuWidth){
     $('#kontakt').html(' <ul><li>Min Kalv</li><li>Mynderup Hestehave 4</li><li>5762 V.Skerninge</li><li>77346333</li><li><a href="mailto:info@minkalvndk">info@minkalv.dk</a></li></ul>');
     $('.iframe').show('slow');
      $('#MenuBackground').show('slow');
      $('#menu').css("width",MinMenuWidth + "px");
      
     }  
     
     
   }

 
 
 imageresize();//Triggers when document first loads    

 $(window).bind("resize", function(){//Adjusts image when browser resized
 imageresize();
 });

 
 
        $('.menuItem').bind("mouseover", function(){
            var color  = $(this).css("background-color");

            $(this).css("background", "rgb(88, 60, 54)");

            $(this).bind("mouseout", function(){
                $(this).css("background", color);
            })    
        })  
        
        
        
        $(".top").click(function() { $("html, body").animate({ scrollTop: $(".home").offset().top}, 2000); });
        
        $(".en").click(function() {  $("html, body").animate({ scrollTop: $("#en").offset().top }, 2000);});
        $(".to").click(function() {  $("html, body").animate({ scrollTop: $("#to").offset().top }, 2000);});
         $(".tre").click(function() {  $("html, body").animate({ scrollTop: $("#tre").offset().top }, 2000);});
        $(".bund").click(function() { $("html, body").animate({ scrollTop: $(document).height() }, 2000); });
        
    })
