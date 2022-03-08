/*
let script = document.createElement("script");

if (browser.lastIndexOf("Android") > 0) {
    if (browser.lastIndexOf("Chrome") > 0) {
        if (browser.lastIndexOf("SamsungBrowser") > 0) {
            script.src = "/device/android/samsungbrowser.js";
            document.querySelector("footer").after(script);
        }
    }
}
*/

/*
let browser = navigator.userAgent;

if (browser.lastIndexOf("Android") > 0) {
    if (browser.lastIndexOf("Chrome") > 0) {
        if (browser.lastIndexOf("SamsungBrowser") > 0) {
            document.documentElement.setAttribute("data-browser", "samsungbrowser");
            localStorage.setItem("data-browser", "samsungbrowser");
            document.getElementById("linkCssTheme").href = "/device/android/samsungbrowser.css";
        } else {
            document.documentElement.setAttribute("data-browser", "chrome");
            localStorage.setItem("data-browser", "chrome");
            document.getElementById("linkCssTheme").href = "/device/android/chrome.css";
        }
    } else {
        alertBrowserNotSupported();
    }
} else if(browser.lastIndexOf("Windows") > 0) {
    if (browser.lastIndexOf("Chrome") > 0) {
        document.documentElement.setAttribute("data-browser", "chrome");
        localStorage.setItem("data-browser", "chrome");
        document.getElementById("linkCssTheme").href = "/device/windows/chrome.css";
    } else if(browser.lastIndexOf("Firefox") > 0) {
        document.documentElement.setAttribute("data-browser", "firefox");
        localStorage.setItem("data-browser", "firefox");
        document.getElementById("linkCssTheme").href = "/device/windows/firefox.css";
    } else {
        alertBrowserNotSupported();
    }
} else {
    alertBrowserNotSupported();
}

function alertBrowserNotSupported() {
    alert("Ваш браузер временно не поддерживает\n Поддерживаются:\n - Windows \n Chrome | Firefox");
    alert("Сообщите следующию информацию нам");
    alert(navigator.userAgent);
}
*/