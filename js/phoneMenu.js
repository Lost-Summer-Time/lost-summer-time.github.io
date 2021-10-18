function phoneMenu(){
    if(body.clientWidth<=470){
        header.classList.remove("justifyContentFlexEnd")
        headerTwo.classList.add("positionFixed");
        headerTwo.classList.add("bottom0");
        headerTwo.classList.add("padding10");
        headerTwo.classList.add("widthFull");
        headerTwo.style.maxWidth=main.clientWidth+"px";
        headerTwoNav.classList.add("widthFull");
        headerTwoUl.classList.add("widthFull");
        homeP.classList.add("displayNone");
        homeImg.classList.add("img32");
        libraryLi.classList.remove("marginLeft10px");
        libraryP.classList.add("displayNone");
        libraryImg.classList.add("img32");
        messagesLi.classList.remove("marginLeft10px");
        messagesP.classList.add("displayNone");
        messagesImg.classList.add("img32");
        checkboxThemeLi.classList.add("displayNone");
        basement.classList.remove("displayNone");
        menuLi.classList.remove("displayNone");
    }
};
phoneMenu()
window.addEventListener("resize",()=>{
    if(body.clientWidth<=470){
        phoneMenu()
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
        homeImg.classList.remove("img32");
        libraryLi.classList.add("marginLeft10px");
        libraryP.classList.remove("displayNone");
        libraryImg.classList.remove("img32");
        messagesLi.classList.add("marginLeft10px");
        messagesP.classList.remove("displayNone");
        messagesImg.classList.remove("img32");
        checkboxThemeLi.classList.remove("displayNone");
        basement.classList.add("displayNone");
        menuLi.classList.add("displayNone");
    }
});
function phoneMenuFullScreen(){
    headerTwo.classList.toggle("wHFull");
    headerTwoUl.classList.toggle("flexDirectionColumn");
    headerTwoUl.classList.toggle("center");
    homeP.classList.toggle("displayNone");
    libraryP.classList.toggle("displayNone");
    messagesP.classList.toggle("displayNone");
    homeImg.classList.toggle("img24");
    libraryImg.classList.toggle("img24");
    messagesImg.classList.toggle("img24");
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