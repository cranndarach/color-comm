// can be edited if more fields are needed
//var cookieTheme;
//var cookieFont;
var cookieDur = 60 * 60 * 24 * 90; // lasts 90 days
var cookiePath = "/";
var cookieDomain = "http://cranndarach.github.io/color-comm";
var cookieTail = "; max-age=" + cookieDur +
    "; path=" + cookiePath + "; domain=" + cookieDomain;

var setTheme = function(theme) {
    document.getElementById("theme").href = "css/theme-" + theme + ".css";
    document.getElementById("theme").rel = "stylesheet";
    document.cookie = "theme=" + theme + cookieTail;
    cookieTail = null;
}
var setAccess = function(face) {
    var pct = document.getElementById("usrSize").value;
    //var face = document.getElementById("usrFace").value;
    // originally from cranndarach/moonphase
    var ff;
    switch(face) {
        case 'serif':
            ff = '"Palatino Linotype", "Book Antiqua", Palatino, serif';
            break;
        case 'sans':
            ff = 'Georgia, "Trebuchet MS", Helvetica, sans-serif';
            break;
        case 'open-dyslexic':
            ff = 'open-dyslexic, sans-serif';
            break;
        // case 'default':
        //     ff = 'Candara, Calibri, Helvetica, sans-serif';
        //     break;
    }
    // end portion from cranndarach/moonphase
    var accessCss = 'body { font-size: ' + pct + '%; font-family: ' + ff + '; }';
    document.getElementById("access").innerHTML = accessCss;

    document.cookie = "font-size=" + size + "; font-family=" + face + cookieTail;
    cookieTail = null;
}

var getCookies = function() {
    var cookie = document.cookie;
    var cookieArr = cookie.split(';');
    var pairArr = [];
    for(var i = 0; i < cookieArr.length; i++) {
        cookieArr[i] = cookieArr[i].trim();
        pairArr[i] = cookieArr[i].split("=");
    }
    var cookieObj = {};
    for(var j = 0; j < pairArr.length; j++) {
        cookieObj[pairArr[j][0]] = pairArr[j][1];
    }
    if(cookieObj["theme"]) {
        setTheme(cookieObj["theme"]);
    }
    if(cookieObj["font-size"]) {
        document.getElementById("usrSize").value = cookieObj["usrSize"];
    }
    if(cookieObj["font-family"]) {
        setAccess(cookieObj["font-family"]);
    }
}
