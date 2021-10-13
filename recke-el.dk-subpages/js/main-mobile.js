
	
	
 	
 	




var canvas = document.getElementById('videoCanvas');
var ctx = canvas.getContext('2d');
ctx.fillStyle = '#444';
ctx.fillText('Loading...', canvas.width/2-30, canvas.height/3);

var client = new WebSocket('ws://85.27.160.128:8089/');
var player = new jsmpeg(client, {canvas:canvas});




$("button").mousedown(function(){
        var cmdID = $(this).val();
        console.log(cmdID);
		$("#command").val(cmdID);
		$("#PTZForm").submit();
	}).mouseup(function() {
		$("#command").val(0);
		$("#PTZForm").submit();
	}).mouseout(function(){
		$("#command").val(0);
		$("#PTZForm").submit();
	});
	

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