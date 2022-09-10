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

function makeSilentAgain() {
    if ((isSafari == false)) {
        silence.pause();
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

var timeRemaining;
var timer;
function countdown(targettime, reset) {
    if (reset == true)
        clearInterval(timer);
    timer = setInterval(function() {
        minutefield = Math.floor(targettime / 60);
        secondfield = (targettime % 60 < 10 ? "0" : "") + targettime % 60;
        secondfieldForDisplay = targettime % 60;
        if (minutefield <= 9) {
            document.images.h.src = c0.src;
            document.images.i.src = eval("c" + minutefield + ".src");
        } else {
            document.images.h.src = eval("c" + Math.floor(minutefield / 10) + ".src");
            document.images.i.src = eval("c" + (minutefield % 10) + ".src");
        }
        if (secondfield <= 9) {
            document.k.src = c0.src;
            document.images.l.src = eval("c" + secondfieldForDisplay + ".src");
        } else {
            document.images.k.src = eval("c" + Math.floor(secondfieldForDisplay / 10) + ".src");
            document.images.l.src = eval("c" + (secondfieldForDisplay % 10) + ".src");
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
        countdown(172800, true);
}
function removeUnderline(linknumber) {
    var linkArray = [];
    var i;
    linkArray[0] = "lsmall";
    linkArray[1] = "lmedium";
    linkArray[2] = "llarge";
    linkArray[3] = "lxlarge";
    for (i = 0; i < 4; i++) {
        if (i == linknumber) {
            document.getElementById(linkArray[i]).style.textDecoration = "none";
            document.getElementById(linkArray[i]).style.fontWeight = "normal";
        } else {
            document.getElementById(linkArray[i]).style.textDecoration = "underline";
            document.getElementById(linkArray[i]).style.fontWeight = "bold";
        }
    }
}
function removeUnderline2(linknumber) {
    var linkArray2 = [];
    linkArray2[4] = "l_city";
    linkArray2[5] = "l_black";
    linkArray2[6] = "l_space";
    linkArray2[7] = "l_woods";
    linkArray2[8] = "l_ocean";
    linkArray2[9] = "l_snow";
    linkArray2[10] = "l_blue";
    linkArray2[11] = "l_silver";
    linkArray2[12] = "l_green";
    linkArray2[13] = "l_orange";
    linkArray2[14] = "l_violet";
    linkArray2[15] = "l_tan";
    linkArray2[16] = "l_clouds";
    linkArray2[17] = "l_factory";
    linkArray2[18] = "l_leather";
    linkArray2[19] = "l_panel";
    for (i = 4; i < 20; i++) {
        if (i == linknumber) {
            document.getElementById(linkArray2[i]).style.textDecoration = "none";
            document.getElementById(linkArray2[i]).style.fontWeight = "normal";
        } else {
            document.getElementById(linkArray2[i]).style.textDecoration = "underline";
            document.getElementById(linkArray2[i]).style.fontWeight = "bold";
        }
    }
}
function changeImageSize(theWidthVar, theSizeName, theLinkNumber) {
    var thatWidth = Math.floor(document.body.clientWidth);
    var mediumTimerSize = Math.floor(thatWidth / 16);
    var mediumTimerSizeA = mediumTimerSize + "px";
    var mediumTimerSizeB = Math.floor(mediumTimerSize / 2) + "px";
    if (theWidthVar === "medium") {
        document.getElementById("h").style.width = mediumTimerSizeA;
        document.getElementById("i").style.width = mediumTimerSizeA;
        document.getElementById("k").style.width = mediumTimerSizeA;
        document.getElementById("l").style.width = mediumTimerSizeA;
        document.getElementById("j").style.width = mediumTimerSizeB;
        setTimerSizeCookie("medium");
        setTimerSizeNameCookie("medium");
        removeUnderline(1);
    } else {
        var changedTimerSize = Math.floor(thatWidth / (theWidthVar));
        var changedTimerSizeA = changedTimerSize + "px";
        var changedTimerSizeB = Math.floor(changedTimerSize / 2) + "px";
        document.getElementById("h").style.width = changedTimerSizeA;
        document.getElementById("i").style.width = changedTimerSizeA;
        document.getElementById("k").style.width = changedTimerSizeA;
        document.getElementById("l").style.width = changedTimerSizeA;
        document.getElementById("j").style.width = changedTimerSizeB;
        setTimerSizeCookie(theWidthVar);
        setTimerSizeNameCookie(theSizeName);
        if (theLinkNumber !== "") {
            removeUnderline(theLinkNumber);
        } else if (theSizeName == "small") {
            removeUnderline(0);
        } else if (theSizeName == "large") {
            removeUnderline(2);
        } else if (theSizeName == "x-large") {
            removeUnderline(3);
        }
    }
    document.getElementById("h").style.height = "auto";
    document.getElementById("i").style.height = "auto";
    document.getElementById("k").style.height = "auto";
    document.getElementById("l").style.height = "auto";
    document.getElementById("j").style.height = "auto";
}
function loopThroughClass(className, newValue) {
    var elements = document.getElementsByClassName(className);
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.color = newValue;
    }
}
function loopThroughClass2(className, newValue) {
    var elements = document.getElementsByClassName(className);
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.filter = newValue;
    }
}