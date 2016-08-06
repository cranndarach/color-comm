// can be edited if more fields are needed
//var cookieTheme;
//var cookieFont;
var cookieDur = 60 * 60 * 24 * 90; // lasts 90 days
var cookiePath = "/";
var cookieDomain = "cranndarach.github.io/color-comm";
var cookieTail = "; max-age=" + cookieDur +
    "; path=" + cookiePath + "; domain=" + cookieDomain;

var setTheme = function(theme) {
    document.getElementById("theme").href = "css/theme-" + theme + ".css";
    document.getElementById("theme").rel = "stylesheet";
    var themeCookie = "theme=" + theme + cookieTail;
    document.cookie = themeCookie;
    console.log(themeCookie);
    //cookieTail = null;
}
var setFont = function(face) {
    //var pct = document.getElementById("usrSize").value;
    //var face = document.getElementById("usrFace").value;
    // originally from cranndarach/moonphase
    var ff;
    switch(face) {
        case 'serif':
            ff = 'Georgia, "Palatino Linotype", Palatino, seriff';
            break;
        case 'sans':
            ff = 'Tahoma, "Trebuchet MS", Helvetica, sans-serif';
            break;
        case 'open-dyslexic':
            ff = 'open-dyslexic, sans-serif';
            break;
        // case 'default':
        //     ff = 'Candara, Calibri, Helvetica, sans-serif';
        //     break;
    }
    // end portion from cranndarach/moonphase
    var fontCss = 'body { font-family: ' + ff + '; }';
    document.getElementById("usrFont").innerHTML = fontCss;
    var fontCookie = "font-family=" + face + cookieTail;
    document.cookie =  fontCookie;
    console.log(fontCookie);
    //cookieTail = null;
}
var setSize = function() {
    var pct = document.getElementById("set-size").value;
    var sizeCss = 'body {\
            font-size: ' + pct + '% \
        };'
    document.getElementById("usrSize").innerHTML = sizeCss;
    var sizeCookie = "font-size=" + pct + cookieTail;
    document.cookie = sizeCookie;
    console.log(sizeCookie);
}

var getCookies = function() {
    var cookie = document.cookie;
    console.log("Attempting...");
    console.log(cookie);
    console.log("Done.");
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
        console.log("Found theme cookie.");
    }
    if(cookieObj["font-size"]) {
        document.getElementById("set-size").value = cookieObj["font-size"];
        console.log("Found size cookie.");
    }
    if(cookieObj["font-family"]) {
        setFont(cookieObj["font-family"]);
        console.log("Found font cookie.");
    }
}
