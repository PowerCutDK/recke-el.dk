if ((navigator.userAgent.indexOf('Firefox') != -1 && parseFloat(navigator.userAgent.substring(navigator.userAgent.indexOf('Firefox') + 8)) >= 3.6) || (navigator.userAgent.indexOf('Chrome') != -1 && parseFloat(navigator.userAgent.substring(navigator.userAgent.indexOf('Chrome') + 7).split(' ')[0]) >= 15)){
$(function () {
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
	$("#topControl").show();
 	$("#sideControl").show();
 	$("#zoomControl").show();
});
}


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

/*$('#live1').bind("click", function(){
	    
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
	  
	  */
	  
	  if ((navigator.userAgent.indexOf('Firefox') != -1 && parseFloat(navigator.userAgent.substring(navigator.userAgent.indexOf('Firefox') + 8)) >= 3.6) || (navigator.userAgent.indexOf('Chrome') != -1 && parseFloat(navigator.userAgent.substring(navigator.userAgent.indexOf('Chrome') + 7).split(' ')[0]) >= 15)){
	$("#PTZForm").attr({
		action: '//12345:12345@85.27.160.128:84/form/PTZSet'
	});
	$("#hideframe").attr({
		src: '//12345:12345@85.27.160.128:84/form/PTZSet'
	});
	$("#topControl").show();
 	$("#sideControl").show();
 	$("#zoomControl").show();
 	$(function(){
	  var liveHtml = $("#reload").html();
	  $('#live2').bind("click", function(){
	    $("#PTZForm").attr("action", "//12345:12345@85.27.160.128:84/form/PTZSet");
	    $("#hideframe").attr("src", "//12345:12345@85.27.160.128:84/form/PTZSet");
	    
	    console.log("84");
	  });

	  $('#live3').bind("click", function(){
	    $("#PTZForm").attr("action", "//12345:12345@85.27.160.128:85/form/PTZSet");
	    $("#hideframe").attr("src", "//12345:12345@85.27.160.128:85/form/PTZSet");
	 
	    console.log("85");
	  });

	  $('#live1').bind("click", function(){
	    $("#PTZForm").attr("action", "//12345:12345@85.27.160.128:83/form/PTZSet");
	    $("#hideframe").attr("src", "//12345:12345@85.27.160.128:83/form/PTZSet");
	   
	    console.log("83");
	  });
	});
} else {
	$("#controlLogin").show().click(function() {
	    
		$("#PTZForm").attr({
			action: '//85.27.160.128:84/form/PTZSet'
		});
		$("#hideframe").attr({
			src: '//85.27.160.128:84/form/PTZSet'
		});

		$("#PTZForm").submit(function() {
			$("#controlLogin").hide();
			$("#topControl").show();
		 	$("#sideControl").show();
		 	$("#zoomControl").show();
		});
		$("#controlLogin").hide();
			$("#topControl").show();
		 	$("#sideControl").show();
		 	$("#zoomControl").show();
 	});
 	$(function(){
	  var liveHtml = $("#reload").html();
	  $('#live2').bind("click", function(){
	    $("#PTZForm").attr("action", "//85.27.160.128:84/form/PTZSet");
	    $("#hideframe").attr("src", "//85.27.160.128:84/form/PTZSet");
	  
	    console.log("84");
	  });

	  $('#live3').bind("click", function(){
	    $("#PTZForm").attr("action", "//85.27.160.128:85/form/PTZSet");
	    $("#hideframe").attr("src", "//85.27.160.128:85/form/PTZSet");
	  
	    console.log("85");
	  });

	  $('#live1').bind("click", function(){
	    $("#PTZForm").attr("action", "//85.27.160.128:83/form/PTZSet");
	    $("#hideframe").attr("src", "//85.27.160.128:83/form/PTZSet");
	 
	    console.log("83");
	  });
	});
};