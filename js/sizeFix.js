function fixSize(){
    let contentTextOne = document.getElementById("contentTextOne").scrollHeight;
    let contentTextTwo = document.getElementById("contentTextTwo").scrollHeight;
    let contentTextThree = document.getElementById("contentTextThree").scrollHeight;
    body.style.minHeight=contentTextOne+contentTextTwo+contentTextThree+80+"px"
}
fixSize();
window.addEventListener("resize",()=>{fixSize()});