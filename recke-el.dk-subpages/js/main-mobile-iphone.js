
var canvas = document.getElementById('videoCanvas');
var ctx = canvas.getContext('2d');
ctx.fillStyle = '#444';
ctx.fillText('Loading...', canvas.width/2-30, canvas.height/3);

var client = new WebSocket('ws://85.27.160.128:8089/');
var player = new jsmpeg(client, {canvas:canvas});


$(".liveKnap").bind("click", function() {
	var test = $(this).attr("value");
	client.close();
	client = new WebSocket('ws://85.27.160.128:'+test+'/');
	player = new jsmpeg(client, {canvas:canvas});
	//alert(test); 
});

$('#live1').bind("click", function(){
	    
	    $("#PTZForm").attr("action", "//12345:12345@85.27.160.128:83/form/PTZSet");
	    $("#hideframe").attr("src", "//12345:12345@85.27.160.128:83/form/PTZSet");
	    console.log("84");
	  });

	  $('#live2').bind("click", function(){
	    $("#PTZForm").attr("action", "//12345:12345@85.27.160.128:84/form/PTZSet");
	    $("#hideframe").attr("src", "//12345:12345@85.27.160.128:84/form/PTZSet");
	
	    console.log("85");
	  });

	  $('#live3').bind("click", function(){
	   $("#PTZForm").attr("action", "//12345:12345@85.27.160.128:85/form/PTZSet");
	    $("#hideframe").attr("src", "//12345:12345@85.27.160.128:85/form/PTZSet");
	   
	    console.log("83");
	  });


imageresize();//Triggers when document first loads    

 $(window).bind("resize", function(){//Adjusts image when browser resized
 imageresize();
 });
 
 function imageresize() {

    var minWidth = 1000;
    var imgWidth = 475;
   
    var Width = 1000;
    var Height = 1000;
   
    if (typeof window.innerWidth != 'undefined'){
      Width = window.innerWidth;
      Height = window.innerHeight;
    } 
    else if (typeof document.documentElement !='undefined' && typeof document.documentElement.clientWidth !='undefined'&& document.documentElement.clientWidth != 0){
      Width = document.documentElement.offsetWidth;
      Height = document.documentElement.offsetHeight;
    }
    
    /* Height = $('#OuterTabel').height();*/
     
    
    if(Width<minWidth){
      $('.live').css("width",Width);
      $('.live').css("height",(Width*9/16));
    
    }  
     
    
    
     
   
     
     
   }

 