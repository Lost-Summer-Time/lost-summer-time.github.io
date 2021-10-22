let fixJCFE = document.getElementById("fixJCFE");
let menu = document.getElementById("menu");
// ----------
let liName = document.getElementById("liName");
let liHome = document.getElementById("liHome");
let liLibrary = document.getElementById("liLibrary");
let liMessages = document.getElementById("liMessages");
let liCheckboxTheme = document.getElementById("liCheckboxTheme");
let liMenu = document.getElementById("liMenu");
// ----------
let imgHome = document.getElementById("imgHome");
let imgLibrary = document.getElementById("imgLibrary");
let imgMessages = document.getElementById("imgMessages");
let imgMenu = document.getElementById("imgMenu");
// ----------
let pHome = document.getElementById("pHome");
let pLibrary = document.getElementById("pLibrary");
let pMessages = document.getElementById("pMessages");
let pCheckboxTheme = document.getElementById("pCheckboxTheme");
// ----------
let basement = document.getElementById("basement");
// ----------
function phoneMenu(){
    fixJCFE.classList.remove("justifyContentFlexEnd");
    menu.classList.add("menuFixed","widthFull","padding10");
    // ----------
    liLibrary.classList.remove("marginLeft10px");
    liMessages.classList.remove("marginLeft10px");
    liCheckboxTheme.classList.add("displayNone");
    liMenu.classList.remove("displayNone");
    // ----------
    imgHome.classList.add("img32");
    imgLibrary.classList.add("img32");
    imgMessages.classList.add("img32");
    // ----------
    pHome.classList.add("displayNone");
    pLibrary.classList.add("displayNone");
    pMessages.classList.add("displayNone");
    // ----------
    basement.classList.remove("displayNone");
};
// ----------
function desktopMenu(){
    fixJCFE.classList.add("justifyContentFlexEnd");
    menu.classList.remove("menuFixed","widthFull","padding10");
    // ----------
    liLibrary.classList.add("marginLeft10px");
    liMessages.classList.add("marginLeft10px");
    liCheckboxTheme.classList.remove("displayNone");
    liMenu.classList.add("displayNone");
    // ----------
    imgHome.classList.remove("img32");
    imgLibrary.classList.remove("img32");
    imgMessages.classList.remove("img32");
    // ----------
    pHome.classList.remove("displayNone");
    pLibrary.classList.remove("displayNone");
    pMessages.classList.remove("displayNone");
    // ----------
    basement.classList.add("displayNone");
};
// ----------
window.addEventListener("resize",()=>{
    if(document.querySelector("body").clientWidth<=470){
        phoneMenu()
    }else{
        desktopMenu()
    }
});
// ----------
if(document.querySelector("body").clientWidth<=470){
    phoneMenu()
}
// ----------
function phoneMenuFullScreen(){
    let ul = document.querySelector("#menu nav ul")
    document.querySelector("body").classList.toggle("overflowHidden");
    // ----------
    menu.classList.toggle("wHFull");
    document.querySelector("#menu nav").classList.toggle("MenuShow");
    // ----------
    ul.classList.toggle("flexDirectionColumn");
    ul.classList.toggle("center");
    // ----------
    liHome.classList.toggle("marginTop10");
    liLibrary.classList.toggle("marginTop10");
    liMessages.classList.toggle("marginTop10");
    liCheckboxTheme.classList.toggle("marginTop10");
    liCheckboxTheme.classList.toggle("displayNone");
    liMenu.classList.toggle("marginTop10");
    // ----------
    imgHome.classList.toggle("img32");
    imgLibrary.classList.toggle("img32");
    imgMessages.classList.toggle("img32");
    // ----------
    pHome.classList.toggle("displayNone");
    pLibrary.classList.toggle("displayNone");
    pMessages.classList.toggle("displayNone");
    pCheckboxTheme.classList.toggle("displayNone");
    // ----------
    switch (document.cookie.match(/theme=(.+?)(;|$)/)[1]){
        case "dark":
            if(imgMenu.src.match(/img(.+?)(;|$)/)[0] == "img/icon/light/reorder-four.png"){
                imgMenu.src = "/img/icon/light/close.png";
            }else{
                imgMenu.src = "/img/icon/light/reorder-four.png";
            }
            break
        case "light":
            if(imgMenu.src.match(/img(.+?)(;|$)/)[0] == "img/icon/dark/reorder-four.png"){
                imgMenu.src = "/img/icon/dark/close.png";
            }else{
                imgMenu.src = "/img/icon/dark/reorder-four.png";
            }
            break
    }
}