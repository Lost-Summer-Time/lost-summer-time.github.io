function cookieFunction() {
    if (document.cookie == ""){
        let cookie_path = "path=/; expires=Tue, 01 Jan 2033 00:00:00 GMT;";
        document.cookie = "theme=dark; lang=ru; "+cookie_path;
        document.cookie = "lang=ru; "+cookie_path;
    }else{
        let whatTheme = document.cookie.match(/theme=(.+?)(;|$)/)[1];
        let cssTheme = document.getElementById("cssTheme");
        // ----------
        let imgHome = document.getElementById("imgHome");
        let imgLibrary = document.getElementById("imgLibrary");
        let imgMessages = document.getElementById("imgMessages");
        let imgMenu = document.getElementById("imgMenu");
        if (whatTheme == "dark"){
            checkboxTheme.checked=false;
        }else if (whatTheme == "light"){
            checkboxTheme.checked=true;
            cssTheme.href="/css/themeLight.css";
            imgHome.src="/img/icon/dark/home.png";
            imgLibrary.src="/img/icon/dark/document-text.png";
            imgMessages.src="/img/icon/dark/chatbubble.png";
            if (imgMenu.src.match(/img(.+?)(;|$)/)[0] == "img/icon/light/close.png") {
                imgMenu.src = "/img/icon/dark/close.png";
            };
        };
    };
}
cookieFunction()