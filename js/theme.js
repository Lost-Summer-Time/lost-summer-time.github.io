let checkboxTheme = document.getElementById("checkboxTheme");
// ----------
function checkboxThemeFunction(){
    let cookie_path = "path=/; expires=Tue, 01 Jan 2033 00:00:00 GMT;";
    // ----------
    let cssTheme = document.getElementById("cssTheme");
    // ----------
    let imgHome = document.getElementById("imgHome");
    let imgLibrary = document.getElementById("imgLibrary");
    let imgMessages = document.getElementById("imgMessages");
    let imgMenu = document.getElementById("imgMenu");
    // ----------
    if(checkboxTheme.checked==true){
        cssTheme.href="/css/themeLight.css";
        imgHome.src="/img/icon/dark/home.png";
        imgLibrary.src="/img/icon/dark/document-text.png";
        imgMessages.src="/img/icon/dark/chatbubble.png";
        if (imgMenu.src.match(/img(.+?)(;|$)/)[0] == "img/icon/light/close.png") {
            imgMenu.src = "/img/icon/dark/close.png";
        };
        document.cookie="theme=light; "+cookie_path;
    }else{
        cssTheme.href="/css/themeDark.css";
        imgHome.src="/img/icon/light/home.png";
        imgLibrary.src="/img/icon/light/document-text.png";
        imgMessages.src="/img/icon/light/chatbubble.png";
        if (imgMenu.src.match(/img(.+?)(;|$)/)[0] == "img/icon/dark/close.png") {
            imgMenu.src = "/img/icon/light/close.png";
        };
        document.cookie="theme=dark; "+cookie_path;
    };
};
// ----------
checkboxTheme.addEventListener("click",()=>{checkboxThemeFunction()});