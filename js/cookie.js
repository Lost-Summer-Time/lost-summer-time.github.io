function cookieFunction() {
    if (document.cookie == ""){
        let cookie_path = "path=/; expires=Tue, 01 Jan 2033 00:00:00 GMT;";
        document.cookie = "theme=dark; lang=ru; "+cookie_path;
        document.cookie = "lang=ru; "+cookie_path;
    }else{
        let whatTheme = document.cookie.match(/theme=(.+?)(;|$)/)[1];
        if (whatTheme == "dark"){
            checkboxTheme.checked=false;
        }else if (whatTheme == "light"){
            checkboxTheme.checked=true;
            checkboxThemeFunction();
        };
    };
}
cookieFunction()