if (document.cookie == ""){
    document.cookie = "theme=dark; "+cookie_path;
}else{
    let whatTheme = document.cookie.match(/theme=(.+?)(;|$)/)[1];
    if (whatTheme == "dark"){
        checkboxTheme.checked=false;
    }else if (whatTheme == "light"){
        checkboxTheme.checked=true;
    };
};