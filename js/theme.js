function functionCheckboxTheme(){
    if(checkboxTheme.checked==true){
        cssTheme.href="/css/themeLight.css";
        homeImg.src="/img/icon/dark/home.png";
        libraryImg.src="/img/icon/dark/document-text.png";
        messagesImg.src="/img/icon/dark/chatbubble.png";
        if (menuImg.src.match(/img(.+?)(;|$)/)[0] == "img/icon/light/close.png") {
            menuImg.src = "/img/icon/dark/close.png";
        };
        document.cookie="theme=light; "+cookie_path;
    }else{
        cssTheme.href="/css/themeDark.css";
        homeImg.src="/img/icon/light/home.png";
        libraryImg.src="/img/icon/light/document-text.png";
        messagesImg.src="/img/icon/light/chatbubble.png";
        if (menuImg.src.match(/img(.+?)(;|$)/)[0] == "img/icon/dark/close.png") {
            menuImg.src = "/img/icon/light/close.png";
        };
        document.cookie="theme=dark; "+cookie_path;
    };
};
functionCheckboxTheme();
checkboxTheme.addEventListener("click",()=>{functionCheckboxTheme()});