var doAltAlarm = 0; var isFirefoxALT = false; var isSafari = false; var isAltHost = false; var isSmartPhone = false; if (window.screen.width < 800) { isSmartPhone = true; }
if (window.location.host !== "2days.github.io") { isAltHost = true; }
if (/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent)) { isFirefoxALT = true; }
var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent); function detectAltBrowser() {
    if ((isFirefoxALT == true) || (isSafari == true) || (isSmartPhone == true)) { doAltAlarm = 1; }
    else { doAltAlarm = 0; }
}
detectAltBrowser(); function doAlarmRedirect() {
    if (document.hasFocus()) { window.location.href = "//2days.github.io"; }
}

function playQuickly() { document.getElementById("playFix2").play(); setTimeout(function () { document.getElementById("playFix2").pause(); }, 10); }
function playAlarm() {
    if ((navigator.onLine == false) || (isAltHost == true)) {
        document.title = "ALARM for " + formattedTimerTime; var alarmDivHTML = "<td align=\"center\" valign=\"middle\" width=\"100%\" height=\"100%\"><div id=\"alarmPlayingDiv\" style=\"width:100%;vertical-align:middle;\"><p><br><br></p><center>"; alarmDivHTML = alarmDivHTML + "<a href=\"//timer.onlineclock.net/off.html\" style=\"text-decoration:none;\" title=\"Click to turn Alarm OFF !\"><div style=\"font-size:30px;font-weight:700;background-color:#ff0000;color:#000000;padding:24px;\"><br>ALARM OFF</div></a>"; alarmDivHTML = alarmDivHTML + "</center></div></td>"; document.getElementById("timerDiv").innerHTML = alarmDivHTML; topLeft.style.display = "none"; topRight.style.display = "none"; var defaultAlarm = new Howl({ src: ["//timer.onlineclock.net/audio/alarm2.mp3"], format: ["mp3"], loop: true, volume: 1.0 }); if (defaultAlarm.playing() == false) { defaultAlarm.play(); }
        window.focus();
    }
    else if (doAltAlarm == 1) {
        document.title = "ALARM for " + formattedTimerTime; var soundChoice = getCurrentSoundForAlarm(); var myAlarmSound = "alarm2.mp3"
        if (soundChoice == "randomizer") { var rAlarm = randomAlarm(); myAlarmSound = rAlarm + ".mp3"; }
        else if (isInArray(soundChoice, allowedSounds)) { myAlarmSound = soundChoice + ".mp3"; }
        else { myAlarmSound = "alarm2.mp3"; }
        var alarmDivHTML2 = "<td align=\"center\" valign=\"middle\" width=\"100%\" height=\"100%\"><div id=\"alarmPlayingDiv\" style=\"width:100%;vertical-align:middle;\"><p><br><br></p><center>"; alarmDivHTML2 = alarmDivHTML2 + "<a href=\"//timer.onlineclock.net/off.html\" style=\"text-decoration:none;\" title=\"Click to turn Alarm OFF !\"><div style=\"font-size:30px;font-weight:700;background-color:#ff0000;color:#000000;padding:24px;\"><br>ALARM OFF</div></a>"; alarmDivHTML2 = alarmDivHTML2 + "</center></div></td>"; document.getElementById("timerDiv").innerHTML = alarmDivHTML2; topLeft.style.display = "none"; topRight.style.display = "none"; var sound = new Howl({ src: ["//timer.onlineclock.net/audio/options/" + myAlarmSound], format: ["mp3"], loop: true, volume: 1.0 }); if (sound.playing() == false) { sound.play(); }
        window.focus();
    }
    else { playBeforeRedirect(); }
}
var c1 = new Image(); c1.src = "numerals/c1.webp"; var c2 = new Image(); c2.src = "numerals/c2.webp"; var c3 = new Image(); c3.src = "numerals/c3.webp"; var c4 = new Image(); c4.src = "numerals/c4.webp"; var c5 = new Image(); c5.src = "numerals/c5.webp"; var c6 = new Image(); c6.src = "numerals/c6.webp"; var c7 = new Image(); c7.src = "numerals/c7.webp"; var c8 = new Image(); c8.src = "numerals/c8.webp"; var c9 = new Image(); c9.src = "numerals/c9.webp"; var c0 = new Image(); c0.src = "numerals/c0.webp"; var cb = new Image(); cb.src = "numerals/cb.webp"; var onePix = new Image(); onePix.src = "numerals/clear.webp"; var isPaused = 1; function doPause() {
    window.clearTimeout(timer); isPaused = 1; if (navigator.cookieEnabled) { document.title = formattedTimerTime + " (PAUSED)"; document.getElementById("timerHeader").textContent = "Timer is PAUSED (click numerals to Resume)"; }
    makeSilentAgainOrig(); makeSilentAgain();
}
function doResume() { window.clearTimeout(timer); countdown(timeRemaining, false); isPaused = 0; playQuietly(); playQuietlyOrig(); }
function togglePauseResume() {
    if (document.forms[0].minutesSelect.options[document.forms[0].minutesSelect.selectedIndex].text !== "OFF") {
        if (isPaused == 1) { doResume(); }
        else { doPause(); }
    }
}
var timeRemaining; var timer; function countdown(targettime, reset) {
    if (reset == true) clearInterval(timer); timer = setInterval(function () {
        minutefield = Math.floor(targettime / 60); secondfield = (targettime % 60 < 10 ? "0" : "") + targettime % 60; secondfieldForDisplay = targettime % 60; if (minutefield <= 9) { document.images.h.src = c0.src; document.images.i.src = eval("c" + minutefield + ".src"); }
        else { document.images.h.src = eval("c" + Math.floor(minutefield / 10) + ".src"); document.images.i.src = eval("c" + (minutefield % 10) + ".src"); }
        if (secondfield <= 9) { document.k.src = c0.src; document.images.l.src = eval("c" + secondfieldForDisplay + ".src"); }
        else { document.images.k.src = eval("c" + Math.floor(secondfieldForDisplay / 10) + ".src"); document.images.l.src = eval("c" + (secondfieldForDisplay % 10) + ".src"); }
        timeRemaining = targettime; isPaused = 0; if (--targettime < 0) { clearInterval(timer); return playAlarm(); }
    }, 1000);
}
function doMinuteTimer() {
    if (document.forms[0].minutesSelect.options[document.forms[0].minutesSelect.selectedIndex].text !== "OFF") { countdown(document.forms[0].minutesSelect.options[document.forms[0].minutesSelect.selectedIndex].value, true); }
    else { clearInterval(timer); document.images.h.src = c0.src; document.images.i.src = c0.src; document.images.k.src = c0.src; document.images.l.src = c0.src; }
}
function removeUnderline(linknumber) {
    var linkArray = []; var i; linkArray[0] = "lsmall"; linkArray[1] = "lmedium"; linkArray[2] = "llarge"; linkArray[3] = "lxlarge"; for (i = 0; i < 4; i++) {
        if (i == linknumber) { document.getElementById(linkArray[i]).style.textDecoration = "none"; document.getElementById(linkArray[i]).style.fontWeight = "normal"; }
        else { document.getElementById(linkArray[i]).style.textDecoration = "underline"; document.getElementById(linkArray[i]).style.fontWeight = "bold"; }
    }
}
function removeUnderline2(linknumber) {
    var linkArray2 = []; linkArray2[4] = "l_city"; linkArray2[5] = "l_black"; linkArray2[6] = "l_space"; linkArray2[7] = "l_woods"; linkArray2[8] = "l_ocean"; linkArray2[9] = "l_snow"; linkArray2[10] = "l_blue"; linkArray2[11] = "l_silver"; linkArray2[12] = "l_green"; linkArray2[13] = "l_orange"; linkArray2[14] = "l_violet"; linkArray2[15] = "l_tan"; linkArray2[16] = "l_clouds"; linkArray2[17] = "l_factory"; linkArray2[18] = "l_leather"; linkArray2[19] = "l_panel"; for (i = 4; i < 20; i++) {
        if (i == linknumber) { document.getElementById(linkArray2[i]).style.textDecoration = "none"; document.getElementById(linkArray2[i]).style.fontWeight = "normal"; }
        else { document.getElementById(linkArray2[i]).style.textDecoration = "underline"; document.getElementById(linkArray2[i]).style.fontWeight = "bold"; }
    }
}
function changeImageSize(theWidthVar, theSizeName, theLinkNumber) {
    var thatWidth = Math.floor(document.body.clientWidth); var mediumTimerSize = Math.floor(thatWidth / 16); var mediumTimerSizeA = mediumTimerSize + "px"; var mediumTimerSizeB = Math.floor(mediumTimerSize / 2) + "px"; if (theWidthVar === "medium") { document.getElementById("h").style.width = mediumTimerSizeA; document.getElementById("i").style.width = mediumTimerSizeA; document.getElementById("k").style.width = mediumTimerSizeA; document.getElementById("l").style.width = mediumTimerSizeA; document.getElementById("j").style.width = mediumTimerSizeB; setTimerSizeCookie("medium"); setTimerSizeNameCookie("medium"); removeUnderline(1); }
    else {
        var changedTimerSize = Math.floor(thatWidth / (theWidthVar)); var changedTimerSizeA = changedTimerSize + "px"; var changedTimerSizeB = Math.floor(changedTimerSize / 2) + "px"; document.getElementById("h").style.width = changedTimerSizeA; document.getElementById("i").style.width = changedTimerSizeA; document.getElementById("k").style.width = changedTimerSizeA; document.getElementById("l").style.width = changedTimerSizeA; document.getElementById("j").style.width = changedTimerSizeB; setTimerSizeCookie(theWidthVar); setTimerSizeNameCookie(theSizeName); if (theLinkNumber !== "") { removeUnderline(theLinkNumber); }
        else if (theSizeName == "small") { removeUnderline(0); }
        else if (theSizeName == "large") { removeUnderline(2); }
        else if (theSizeName == "x-large") { removeUnderline(3); }
    }
    document.getElementById("h").style.height = "auto"; document.getElementById("i").style.height = "auto"; document.getElementById("k").style.height = "auto"; document.getElementById("l").style.height = "auto"; document.getElementById("j").style.height = "auto";
}
function changeBackgroundColor(color, linkNumber) {
    setTextureCookie(color); var fudgedLinkNumber; document.bgColor = color; if (color == "black" || color == "#000000") { document.body.style.backgroundImage = "none"; fudgedLinkNumber = 5; }
    else { document.body.style.backgroundImage = "url('//onlineclock.net/images/textures/fabric.png')"; document.body.style.backgroundSize = "auto"; }
    if (color == "blue") { fudgedLinkNumber = 10; }
    else if (color == "silver") { fudgedLinkNumber = 11; }
    else if (color == "#006400") { fudgedLinkNumber = 12; }
    else if (color == "orange") { fudgedLinkNumber = 13; }
    else if (color == "#7f00ff") { fudgedLinkNumber = 14; }
    else if (color == "#4b3832") { fudgedLinkNumber = 15; }
    if (linkNumber !== "") { removeUnderline2(linkNumber); }
    else { removeUnderline2(fudgedLinkNumber); }
}
function loopThroughClass(className, newValue) { var elements = document.getElementsByClassName(className); for (var i = 0; i < elements.length; i++) { elements[i].style.color = newValue; } }
function loopThroughClass2(className, newValue) { var elements = document.getElementsByClassName(className); for (var i = 0; i < elements.length; i++) { elements[i].style.filter = newValue; } }
function darkMode() {
    if (document.getElementById("h").style.webkitFilter == "grayscale(100%)") { document.getElementById("h").style.webkitFilter = "grayscale(0%)"; document.getElementById("i").style.webkitFilter = "grayscale(0%)"; document.getElementById("j").style.webkitFilter = "grayscale(0%)"; document.getElementById("k").style.webkitFilter = "grayscale(0%)"; document.getElementById("l").style.webkitFilter = "grayscale(0%)"; document.getElementById("h").style.webkitFilter = "grayscale(0%)"; document.getElementById("h").style.filter = "grayscale(0%)"; document.getElementById("i").style.filter = "grayscale(0%)"; document.getElementById("j").style.filter = "grayscale(0%)"; document.getElementById("k").style.filter = "grayscale(0%)"; document.getElementById("l").style.filter = "grayscale(0%)"; document.getElementById("dMode").style.textDecoration = "underline"; document.getElementById("minutesSelect").style.backgroundColor = "#FFFFFF"; document.getElementById("timerHeader").style.color = "#999999"; loopThroughClass("sizeLink", "#FFFFFF"); loopThroughClass("newMSG", "red"); loopThroughClass2("numeral_IMG", "drop-shadow(0px 0px 3px #ff0000aa) blur(0px) brightness(1.3)"); }
    else { document.getElementById("h").style.webkitFilter = "grayscale(100%)"; document.getElementById("i").style.webkitFilter = "grayscale(100%)"; document.getElementById("j").style.webkitFilter = "grayscale(100%)"; document.getElementById("k").style.webkitFilter = "grayscale(100%)"; document.getElementById("l").style.webkitFilter = "grayscale(100%)"; document.getElementById("h").style.filter = "grayscale(100%)"; document.getElementById("i").style.filter = "grayscale(100%)"; document.getElementById("j").style.filter = "grayscale(100%)"; document.getElementById("k").style.filter = "grayscale(100%)"; document.getElementById("l").style.filter = "grayscale(100%)"; document.getElementById("dMode").style.textDecoration = "line-through"; document.getElementById("minutesSelect").style.backgroundColor = "#666666"; document.getElementById("timerHeader").style.color = "#666666"; loopThroughClass("sizeLink", "#666666"); loopThroughClass("newMSG", "#666666"); }
}
function toggleVis() {
    var topLeft = document.getElementById("topLeft"); var topRight = document.getElementById("topRight"); var midNavBlock = document.getElementById("midNav"); var botMid = document.getElementById("botMid"); var aHideShow = document.getElementById('linkHideShow'); if (midNavBlock.style.display === "none") { topLeft.style.display = "block"; topRight.style.display = "block"; midNavBlock.style.display = "block"; botMid.style.display = "block"; aHideShow.innerHTML = "<img src=\"//onlineclock.net/images/hide-icon20.png\" width=\"20\" height=\"20\" border=\"0\" alt=\"Hide/Show Navigation\">"; aHideShow.title = "Hide Navigation"; } else { topLeft.style.display = "none"; topRight.style.display = "none"; midNavBlock.style.display = "none"; botMid.style.display = "none"; aHideShow.innerHTML = "<img src=\"//onlineclock.net/images/show-icon20.png\" width=\"20\" height=\"20\" border=\"0\" alt=\"Hide/Show Navigation\">"; aHideShow.title = "Show Navigation"; }
}
var inFullScreenNow = 0; function ieVersion() { uaString = navigator.userAgent; var match = /\b(MSIE |Trident.*?rv:|Edge\/)(\d+)/.exec(uaString); if (match) return parseInt(match[2]) }
var detectMsieVersion = ieVersion(); function toggleFullscreen() {
    if ((detectMsieVersion !== "undefined") && (detectMsieVersion < 12)) { window.alert("Click the F11 key to toggle Fullscreen"); }
    else { if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement) { if (document.documentElement.requestFullscreen) { document.documentElement.requestFullscreen(); } else if (document.documentElement.mozRequestFullScreen) { document.documentElement.mozRequestFullScreen(); } else if (document.documentElement.webkitRequestFullscreen) { document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT); } } else { if (document.cancelFullScreen) { document.cancelFullScreen(); } else if (document.mozCancelFullScreen) { document.mozCancelFullScreen(); } else if (document.webkitCancelFullScreen) { document.webkitCancelFullScreen(); } } }
}
function toggleFullScreenButtons() {
    var fsLink = document.getElementById("linkFullscreen"); if (inFullScreenNow == 1) { fsLink.style.textDecoration = "line-through"; fsLink.title = "Exit Fullscreen Mode"; }
    else { fsLink.style.textDecoration = "underline"; fsLink.title = "Enter Fullscreen Mode"; }
}
function toggleFSCounter() {
    if (inFullScreenNow == 1) { inFullScreenNow = 0; }
    else { inFullScreenNow = 1; }
}
document.addEventListener("fullscreenchange", function () { toggleFSCounter(); toggleFullScreenButtons(); }, false); document.addEventListener("mozfullscreenchange", function () { toggleFSCounter(); toggleFullScreenButtons(); }, false); document.addEventListener("webkitfullscreenchange", function () { toggleFSCounter(); toggleFullScreenButtons(); }, false); document.addEventListener("msRequestFullscreen", function () { toggleFSCounter(); toggleFullScreenButtons(); }, false); var formattedTimerTime = ""; function formatAlarmForTitle() {
    if (navigator.cookieEnabled) {
        if ((document.minutesForm.minutesSelect.value) > 30) {
            if (Math.ceil(document.minutesForm.minutesSelect.value / 60) < 2) { rawTimeForHeader = Math.ceil(document.minutesForm.minutesSelect.value / 60) + " Minute"; }
            else { rawTimeForHeader = Math.ceil(document.minutesForm.minutesSelect.value / 60) + " Minutes"; }
            formattedTimerTime = Math.ceil(document.minutesForm.minutesSelect.value / 60) + " Min Timer";
        }
        else { rawTimeForHeader = (Math.ceil(document.minutesForm.minutesSelect.value) + 1) + " Seconds"; formattedTimerTime = (Math.ceil(document.minutesForm.minutesSelect.value) + 1) + " Sec Timer"; }
        document.title = formattedTimerTime + " (counting...)"; document.getElementById("timerHeader").textContent = "Timer for " + rawTimeForHeader + " (click numerals to Pause):";
    }
    if (isSafari) { document.getElementById("safariFixer").innerHTML = "<br><br><center><div style=\"width: 300px; border: solid 1px #FFFFFF;padding: 10px;background: #000000;\" onclick=\"this.style.visibility='hidden';\"><a class=\"sizeLink\">Safari Users: click HERE to activate sound</a></div></center>"; }
}
var soundPlay = "<audio autoplay loop><source src=\"//onlineclock.net/audio/silence.mp3\" type=\"audio/mpeg\"></audio>"; function makeSilentAgainOrig() { document.getElementById("playFix").innerHTML = ""; }
var origPageTitle = document.title; function playQuietlyOrig() {
    try {
        if ((document.minutesForm.minutesSelect.value !== "OFF")) { document.getElementById("playFix").innerHTML = soundPlay; formatAlarmForTitle(); }
        else { document.title = origPageTitle; document.getElementById("timerHeader").textContent = origHeader; makeSilentAgainOrig(); makeSilentAgain(); }
    }
    catch (err) { }
}
function showDropDownMenu() {
    var dropDownLeft = document.getElementById("dropDownLeft"); var dropbtn = document.getElementById("dropbtn"); if (dropDownLeft.style.display === "none") { dropDownLeft.style.display = "block"; dropbtn.style.border = "1px solid #0000FF"; dropbtn.style.backgroundColor = "#2980B9"; }
    else { dropDownLeft.style.display = "none"; dropbtn.style.border = "0"; dropbtn.style.backgroundColor = "transparent"; }
}
function showDropDownMenu2() {
    var dropDownRight = document.getElementById("dropDownRight"); var dropbtn2 = document.getElementById("dropbtn2"); if (dropDownRight.style.display === "none") { dropDownRight.style.display = "block"; dropbtn2.style.border = "1px solid #0000FF"; dropbtn2.style.backgroundColor = "#2980B9"; }
    else { dropDownRight.style.display = "none"; dropbtn2.style.border = "0"; dropbtn2.style.backgroundColor = "transparent"; }
}
function createOCCookie(cookieName, cookieValue) { var date = new Date(); date.setTime(date.getTime() + (364 * 24 * 60 * 60 * 1000)); document.cookie = cookieName + "=" + cookieValue + "; expires=" + date.toGMTString(); }
function accessOCCookie(cookieName) {
    var name = cookieName + "="; var allCookieArray = document.cookie.split(';'); for (var i = 0; i < allCookieArray.length; i++) {
        var temp = allCookieArray[i].trim(); if (temp.indexOf(name) == 0)
            return temp.substring(name.length, temp.length);
    }
    return "";
}
function checkTextureCookie() {
    var texture = accessOCCookie("ocTimerTexture"); if (texture != "" && texture != null) { return texture; }
    else { return "black"; }
}
function setTextureCookie(texture) {
    if (texture != "" && texture != null) { createOCCookie("ocTimerTexture", texture); }
}
function checkTimerSizeCookie() {
    var mainTimerSize = accessOCCookie("ocTimerSize"); if (mainTimerSize != "" && mainTimerSize != null) { return mainTimerSize; }
    else { return "medium"; }
}
function setTimerSizeCookie(size) {
    if (size != "" && size != null) { createOCCookie("ocTimerSize", size); }
}
function checkTimerSizeNameCookie() {
    var mainTimerSizeName = accessOCCookie("ocTimerSizeName"); if (mainTimerSizeName != "" && mainTimerSizeName != null) { return mainTimerSizeName; }
    else { return "medium"; }
}
function setTimerSizeNameCookie(sizeName) {
    if (sizeName != "" && sizeName != null) { createOCCookie("ocTimerSizeName", sizeName); }
}