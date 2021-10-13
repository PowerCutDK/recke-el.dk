if ((navigator.userAgent.indexOf('Firefox') != -1 && parseFloat(navigator.userAgent.substring(navigator.userAgent.indexOf('Firefox') + 8)) >= 3.6) || (navigator.userAgent.indexOf('Chrome') != -1 && parseFloat(navigator.userAgent.substring(navigator.userAgent.indexOf('Chrome') + 7).split(' ')[0]) >= 15)){
    window.location.href = "/se-din-kalv-mobile-med-styring.html";
}   
else{
    window.location.href = "/se-din-kalv-mobile-uden-styring.html";
}



