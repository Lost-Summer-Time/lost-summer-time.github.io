function phoneMenu(){
    if (document.cookie = "") {
        ;
    }else{
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
    }
};
phoneMenu()