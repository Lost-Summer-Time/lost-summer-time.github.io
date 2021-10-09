function phoneMenu(){
    let bodySizeWidth = document.getElementById("body");
    let mainSizeWidth = document.getElementById("main");
    if(bodySizeWidth.clientWidth<=470){
        header.classList.remove("justifyContentFlexEnd")
        headerTwo.classList.add("positionFixed");
        headerTwo.classList.add("bottom0");
        headerTwo.classList.add("padding10");
        headerTwo.classList.add("widthFull");
        headerTwo.style.maxWidth=mainSizeWidth.clientWidth+"px";
        headerTwoNav.classList.add("widthFull");
        headerTwoUl.classList.add("widthFull");
        homeP.classList.add("displayNone");
        homeImg.classList.remove("height24");
        libraryLi.classList.remove("marginLeft10px");
        libraryP.classList.add("displayNone");
        libraryImg.classList.remove("height24");
        messagesLi.classList.remove("marginLeft10px");
        messagesP.classList.add("displayNone");
        messagesImg.classList.remove("height24");
        checkboxThemeLi.classList.add("displayNone");
        basement.classList.remove("displayNone");
        menuLi.classList.remove("displayNone");
    }else{
        header.classList.add("justifyContentFlexEnd")
        headerTwo.classList.remove("positionFixed");
        headerTwo.classList.remove("bottom0");
        headerTwo.classList.remove("padding10");
        headerTwo.classList.remove("widthFull");
        headerTwo.style.maxWidth="";
        headerTwoNav.classList.remove("widthFull");
        headerTwoUl.classList.remove("widthFull");
        homeP.classList.remove("displayNone");
        homeImg.classList.add("height24");
        libraryLi.classList.add("marginLeft10px");
        libraryP.classList.remove("displayNone");
        libraryImg.classList.add("height24");
        messagesLi.classList.add("marginLeft10px");
        messagesP.classList.remove("displayNone");
        messagesImg.classList.add("height24");
        checkboxThemeLi.classList.remove("displayNone");
        basement.classList.add("displayNone");
        menuLi.classList.add("displayNone");
    }
};
phoneMenu();
window.addEventListener("resize",()=>{phoneMenu()});
function phoneMenuFullScreen(){
    headerTwo.classList.toggle("wHFull");
    headerTwoUl.classList.toggle("flexDirectionColumn");
    headerTwoUl.classList.toggle("center");
    homeP.classList.toggle("displayNone");
    libraryP.classList.toggle("displayNone");
    messagesP.classList.toggle("displayNone");
    homeImg.classList.toggle("height24");
    libraryImg.classList.toggle("height24");
    messagesImg.classList.toggle("height24");
    libraryLi.classList.toggle("marginTop10");
    messagesLi.classList.toggle("marginTop10");
    menuLi.classList.toggle("marginTop10");
    headerTwo.classList.toggle("padding10");
    checkboxThemeLi.classList.toggle("displayNone");
    checkboxThemeP.classList.toggle("displayNone");
    checkboxThemeLi.classList.toggle("marginTop10");
    homeLi.classList.toggle("marginTop10");
    nameLi.classList.toggle("displayNone");
    let whatTheme = document.cookie.match(/theme=(.+?)(;|$)/)[1];
    if(menuImg.src.match(/img(.+?)(;|$)/)[0] == "img/icon/light/reorder-four.png"){
        menuImg.src = "/img/icon/light/close.png";
    }else if(menuImg.src.match(/img(.+?)(;|$)/)[0] == "img/icon/dark/reorder-four.png"){
        menuImg.src = "/img/icon/dark/close.png";
    }else{
        if (whatTheme == "dark"){
            menuImg.src = "/img/icon/light/reorder-four.png";
        }else if (whatTheme == "light"){
            menuImg.src = "/img/icon/dark/reorder-four.png";
        };
    }
}