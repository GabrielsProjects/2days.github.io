var doAltAlarm = 0;
var isFirefoxALT = false;
var isSafari = false;
var isAltHost = false;
var isSmartPhone = false;
if (window.screen.width < 800) {
    isSmartPhone = true;
}
if (window.location.host !== "timer.onlineclock.net") {
    isAltHost = true;
}
if (/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
    isFirefoxALT = true;
}
var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
function detectAltBrowser() {
    if ((isFirefoxALT == true) || (isSafari == true) || (isSmartPhone == true)) {
        doAltAlarm = 1;
    } else {
        doAltAlarm = 0;
    }
}
detectAltBrowser();
function doAlarmRedirect() {
    if (document.hasFocus()) {
        window.location.href = "/alarm.html";
    }
}

var c1 = new Image();
c1.src = "/numerals/c1.webp";
var c2 = new Image();
c2.src = "/numerals/c2.webp";
var c3 = new Image();
c3.src = "/numerals/c3.webp";
var c4 = new Image();
c4.src = "/numerals/c4.webp";
var c5 = new Image();
c5.src = "/numerals/c5.webp";
var c6 = new Image();
c6.src = "/numerals/c6.webp";
var c7 = new Image();
c7.src = "/numerals/c7.webp";
var c8 = new Image();
c8.src = "/numerals/c8.webp";
var c9 = new Image();
c9.src = "/numerals/c9.webp";
var c0 = new Image();
c0.src = "/numerals/c0.webp";
var cb = new Image();
cb.src = "/numerals/cb.webp";
var onePix = new Image();
onePix.src = "/numerals/clear.webp";
var isPaused = 0;

var timeRemaining;
var timer;
//targettime = 172799 OR 47hours 59mins 59seconds 
function countdown() {
    if (reset == true)
        clearInterval(timer);
    timer = setInterval(function() {
        hourfield = Math.floor(targettime / 3600); //47
        minutefield = Math.floor((targettime / 60) % 60); //59
        secondfield = (targettime % 60 < 10 ? "0" : "") + targettime % 60;
        secondfieldForDisplay = targettime % 60; //59
        if (hourfield <= 9) {
            document.images.h.src = c0.src;
            document.images.i.src = eval("c" + hourfield + ".src");
        } else {
            document.images.h.src = eval("c" + Math.floor(hourfield / 10) + ".src");
            document.images.i.src = eval("c" + (hourfield % 10) + ".src");
        }
        if (minutefield <= 9) {
            document.images.k.src = c0.src;
            document.images.l.src = eval("c" + minutefield + ".src");
        } else {
            document.images.k.src = eval("c" + Math.floor(minutefield / 10) + ".src");
            document.images.l.src = eval("c" + (minutefield % 10) + ".src");
        }
        if (secondfield <= 9) {
            document.n.src = c0.src;
            document.images.o.src = eval("c" + secondfieldForDisplay + ".src");
        } else {
            document.images.n.src = eval("c" + Math.floor(secondfieldForDisplay / 10) + ".src");
            document.images.o.src = eval("c" + (secondfieldForDisplay % 10) + ".src");
        }
        timeRemaining = targettime;
        isPaused = 0;
        if (--targettime < 0) {
            clearInterval(timer);
            return playAlarm();
        }
    }, 1000);
}
function doMinuteTimer() {
    if (document.forms[0].minutesSelect.options[document.forms[0].minutesSelect.selectedIndex].text !== "OFF") {
        countdown(document.forms[0].minutesSelect.options[document.forms[0].minutesSelect.selectedIndex].value, true);
    } else {
        clearInterval(timer);
        document.images.h.src = c0.src;
        document.images.i.src = c0.src;
        document.images.k.src = c0.src;
        document.images.l.src = c0.src;
    }
}