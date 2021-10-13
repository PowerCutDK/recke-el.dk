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
     
     
     
     if(Width > minWidth){
            $("#MenuBackgroundLeft").show('slow');
            $("#MenuBackgroundLeftInner").show('slow');
            $('.live').css("width","950px");
        }
     if(Width<minWidthContainerBIG){
       $('.live').css("width",Width-100);
       $('.live').css("height",((Width*2)/3));
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
         
           $("#MenuBackgroundLeft").hide();
            $("#MenuBackgroundLeftInner").hide();
        
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
     
      // $('.test').css("width",Width);
      //  $('.test').css("height",Height);
     
   }

 
 
 imageresize();//Triggers when document first loads    

 $(window).bind("resize", function(){//Adjusts image when browser resized
 imageresize();
 });
    
$('#live1').bind("click", function(){

 $('#live').html('<object width="100%" height="100%" id="wowza_api" name="wowza_api" data="http://releases.flowplayer.org/swf/flowplayer-3.2.18.swf" type="application/x-shockwave-flash"><param name="allowfullscreen" value="true"><param name="allowscriptaccess" value="always"><param name="quality" value="high"><param name="bgcolor" value="#ffffff"><param name="flashvars" value="config={&quot;clip&quot;:{&quot;url&quot;:&quot;rtmp://85.27.160.128:5119/Minkalv1&quot;,&quot;scaling&quot;:&quot;fit&quot;,&quot;provider&quot;:&quot;hddn&quot;},&quot;plugins&quot;:{&quot;hddn&quot;:{&quot;url&quot;:&quot;flowplayer.rtmp-3.2.13.swf&quot;,&quot;netConnectionUrl&quot;:&quot;rtmp://r.demo.flowplayer.netdna-cdn.com/play&quot;}},&quot;canvas&quot;:{&quot;backgroundGradient&quot;:&quot;none&quot;},&quot;playerId&quot;:&quot;wowza&quot;,&quot;playlist&quot;:[{&quot;url&quot;:&quot;rtmp://85.27.160.128:5119/Minkalv1&quot;,&quot;scaling&quot;:&quot;fit&quot;,&quot;provider&quot;:&quot;hddn&quot;}]}"></object>');

});
$('#live2').bind("click", function(){

 $('#live').html('<object width="100%" height="100%" id="wowza_api" name="wowza_api" data="http://releases.flowplayer.org/swf/flowplayer-3.2.18.swf" type="application/x-shockwave-flash"><param name="allowfullscreen" value="true"><param name="allowscriptaccess" value="always"><param name="quality" value="high"><param name="bgcolor" value="#ffffff"><param name="flashvars" value="config={&quot;clip&quot;:{&quot;url&quot;:&quot;rtmp://85.27.160.128:5119/Minkalv2&quot;,&quot;scaling&quot;:&quot;fit&quot;,&quot;provider&quot;:&quot;hddn&quot;},&quot;plugins&quot;:{&quot;hddn&quot;:{&quot;url&quot;:&quot;flowplayer.rtmp-3.2.13.swf&quot;,&quot;netConnectionUrl&quot;:&quot;rtmp://r.demo.flowplayer.netdna-cdn.com/play&quot;}},&quot;canvas&quot;:{&quot;backgroundGradient&quot;:&quot;none&quot;},&quot;playerId&quot;:&quot;wowza&quot;,&quot;playlist&quot;:[{&quot;url&quot;:&quot;rtmp://85.27.160.128:5119/Minkalv2&quot;,&quot;scaling&quot;:&quot;fit&quot;,&quot;provider&quot;:&quot;hddn&quot;}]}"></object>');

});
$('#live3').bind("click", function(){

 $('#live').html('<object width="100%" height="100%" id="wowza_api" name="wowza_api" data="http://releases.flowplayer.org/swf/flowplayer-3.2.18.swf" type="application/x-shockwave-flash"><param name="allowfullscreen" value="true"><param name="allowscriptaccess" value="always"><param name="quality" value="high"><param name="bgcolor" value="#ffffff"><param name="flashvars" value="config={&quot;clip&quot;:{&quot;url&quot;:&quot;rtmp://85.27.160.128:5119/Minkalv3&quot;,&quot;scaling&quot;:&quot;fit&quot;,&quot;provider&quot;:&quot;hddn&quot;},&quot;plugins&quot;:{&quot;hddn&quot;:{&quot;url&quot;:&quot;flowplayer.rtmp-3.2.13.swf&quot;,&quot;netConnectionUrl&quot;:&quot;rtmp://r.demo.flowplayer.netdna-cdn.com/play&quot;}},&quot;canvas&quot;:{&quot;backgroundGradient&quot;:&quot;none&quot;},&quot;playerId&quot;:&quot;wowza&quot;,&quot;playlist&quot;:[{&quot;url&quot;:&quot;rtmp://85.27.160.128:5119/Minkalv3&quot;,&quot;scaling&quot;:&quot;fit&quot;,&quot;provider&quot;:&quot;hddn&quot;}]}"></object>');

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
