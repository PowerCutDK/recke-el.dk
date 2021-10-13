$(document).ready(function() {

 function imageresize() {

  var minWidth = 1145;
  var imgWidth = 475;
  var minHeight = 644;
  var Width = 1000;
  var Height = 1000;
  var minWidthContainerBIG  = 1000; 
  var MinMenuWidth = 1000;
    if (typeof window.innerWidth != 'undefined'){
            Width = window.innerWidth;
            Height = window.innerHeight;
            }
            else if (typeof document.documentElement !='undefined' 
                 && typeof document.documentElement.clientWidth !='undefined'
                 && document.documentElement.clientWidth != 0)
                 {
                 Width = document.documentElement.offsetWidth;
                 Height = document.documentElement.offsetHeight;
                 }
    
    /* Height = $('#OuterTabel').height();*/
     
     $('.live').css("width",Width-40);
     $('.live').css("height", Height);
     
     
     
     
    
     
     
    
    
     
           
     
    
      
     
      // $('.test').css("width",Width);
      //  $('.test').css("height",Height);
     
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
      $(".fire").click(function() { $("html, body").animate({ scrollTop: $("#fire").offset().top }, 2000);});
      $(".bund").click(function() { $("html, body").animate({ scrollTop: $(document).height() }, 2000); });
        
    })
