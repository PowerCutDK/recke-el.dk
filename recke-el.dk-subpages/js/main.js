
$(function() {
    $("button").mousedown(function() {
        var cmdID = $(this).val();
        console.log(cmdID);
        $("#command").val(cmdID);
        $("#PTZForm").submit();
    }).mouseup(function() {
        $("#command").val(0);
        $("#PTZForm").submit();
    }).mouseout(function() {
        $("#command").val(0);
        $("#PTZForm").submit();
    });
});



if ((navigator.userAgent.indexOf('Firefox') != -1 && parseFloat(navigator.userAgent.substring(navigator.userAgent.indexOf('Firefox') + 8)) >= 3.6) || (navigator.userAgent.indexOf('Chrome') != -1 && parseFloat(navigator.userAgent.substring(navigator.userAgent.indexOf('Chrome') + 7).split(' ')[0]) >= 15)) {
    $("#PTZForm").attr({
        action: '//12345:12345@85.27.160.128:83/form/PTZSet'
    });
    $("#hideframe").attr({
        src: '//12345:12345@85.27.160.128:83/form/PTZSet'
    });
    $("#topControl").show();
    $("#sideControl").show();
    $("#zoomControl").show();
    $(function() {
        var liveHtml = $("#reload").html();
        $('#live1').bind("click", function() {
            $("#PTZForm").attr("action", "//12345:12345@85.27.160.128:84/form/PTZSet");
            $("#hideframe").attr("src", "//12345:12345@85.27.160.128:84/form/PTZSet");
            $("param[name='flashvars']").attr("value", 'config={"clip":{"url":"rtmp://85.27.160.128:5119/Minkalv1","scaling":"fit","provider":"hddn"},"plugins":{"hddn":{"url":"flowplayer.rtmp-3.2.13.swf","netConnectionUrl":"rtmp://r.demo.flowplayer.netdna-cdn.com/play"}},"canvas":{"backgroundGradient":"none"},"playerId":"wowza","playlist":[{"url":"rtmp://85.27.160.128:5119/Minkalv1","scaling":"fit","provider":"hddn"}]}');
            liveHtml = $("#reload").html();
            $("#reload").html(liveHtml);
            console.log("84");
        });

        $('#live2').bind("click", function() {
            $("#PTZForm").attr("action", "//12345:12345@85.27.160.128:85/form/PTZSet");
            $("#hideframe").attr("src", "//12345:12345@85.27.160.128:85/form/PTZSet");
            $("param[name='flashvars']").attr("value", 'config={"clip":{"url":"rtmp://85.27.160.128:5119/Minkalv2","scaling":"fit","provider":"hddn"},"plugins":{"hddn":{"url":"flowplayer.rtmp-3.2.13.swf","netConnectionUrl":"rtmp://r.demo.flowplayer.netdna-cdn.com/play"}},"canvas":{"backgroundGradient":"none"},"playerId":"wowza","playlist":[{"url":"rtmp://85.27.160.128:5119/Minkalv2","scaling":"fit","provider":"hddn"}]}');
            liveHtml = $("#reload").html();
            $("#reload").html(liveHtml);
            console.log("85");
        });

        $('#live3').bind("click", function() {
            $("#PTZForm").attr("action", "//12345:12345@85.27.160.128:83/form/PTZSet");
            $("#hideframe").attr("src", "//12345:12345@85.27.160.128:83/form/PTZSet");
            $("param[name='flashvars']").attr("value", 'config={"clip":{"url":"rtmp://85.27.160.128:5119/Minkalv3","scaling":"fit","provider":"hddn"},"plugins":{"hddn":{"url":"flowplayer.rtmp-3.2.13.swf","netConnectionUrl":"rtmp://r.demo.flowplayer.netdna-cdn.com/play"}},"canvas":{"backgroundGradient":"none"},"playerId":"wowza","playlist":[{"url":"rtmp://85.27.160.128:5119/Minkalv3","scaling":"fit","provider":"hddn"}]}');
            liveHtml = $("#reload").html();
            $("#reload").html(liveHtml);
            console.log("83");
        });
    });
} else {
    $("#controlLogin").show().click(function() {
        $("#PTZForm").attr({
            action: '//85.27.160.128:85/form/PTZSet'
        });
        $("#hideframe").attr({
            src: '//85.27.160.128:85/form/PTZSet'
        });

        $("#PTZForm").submit(function() {
            $("#controlLogin").hide();
            $("#topControl").show();
            $("#sideControl").show();
            $("#zoomControl").show();
        });
    });
    $(function() {
        var liveHtml = $("#reload").html();
        $('#live1').bind("click", function() {
            $("#PTZForm").attr("action", "//85.27.160.128:84/form/PTZSet");
            $("#hideframe").attr("src", "//85.27.160.128:84/form/PTZSet");
            $("param[name='flashvars']").attr("value", 'config={"clip":{"url":"rtmp://85.27.160.128:5119/Minkalv1","scaling":"fit","provider":"hddn"},"plugins":{"hddn":{"url":"flowplayer.rtmp-3.2.13.swf","netConnectionUrl":"rtmp://r.demo.flowplayer.netdna-cdn.com/play"}},"canvas":{"backgroundGradient":"none"},"playerId":"wowza","playlist":[{"url":"rtmp://85.27.160.128:5119/Minkalv1","scaling":"fit","provider":"hddn"}]}');
            liveHtml = $("#reload").html();
            $("#reload").html(liveHtml);
            console.log("84");
        });

        $('#live2').bind("click", function() {
            $("#PTZForm").attr("action", "//85.27.160.128:85/form/PTZSet");
            $("#hideframe").attr("src", "//85.27.160.128:85/form/PTZSet");
            $("param[name='flashvars']").attr("value", 'config={"clip":{"url":"rtmp://85.27.160.128:5119/Minkalv2","scaling":"fit","provider":"hddn"},"plugins":{"hddn":{"url":"flowplayer.rtmp-3.2.13.swf","netConnectionUrl":"rtmp://r.demo.flowplayer.netdna-cdn.com/play"}},"canvas":{"backgroundGradient":"none"},"playerId":"wowza","playlist":[{"url":"rtmp://85.27.160.128:5119/Minkalv2","scaling":"fit","provider":"hddn"}]}');
            liveHtml = $("#reload").html();
            $("#reload").html(liveHtml);
            console.log("85");
        });

        $('#live3').bind("click", function() {
            $("#PTZForm").attr("action", "//85.27.160.128:83/form/PTZSet");
            $("#hideframe").attr("src", "//85.27.160.128:83/form/PTZSet");
            $("param[name='flashvars']").attr("value", 'config={"clip":{"url":"rtmp://85.27.160.128:5119/Minkalv3","scaling":"fit","provider":"hddn"},"plugins":{"hddn":{"url":"flowplayer.rtmp-3.2.13.swf","netConnectionUrl":"rtmp://r.demo.flowplayer.netdna-cdn.com/play"}},"canvas":{"backgroundGradient":"none"},"playerId":"wowza","playlist":[{"url":"rtmp://85.27.160.128:5119/Minkalv3","scaling":"fit","provider":"hddn"}]}');
            liveHtml = $("#reload").html();
            $("#reload").html(liveHtml);
            console.log("83");
        });
    });
};

