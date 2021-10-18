let nameUserChat = document.getElementById("nameUserChat")
let sendMessage = document.getElementById("sendMessage")
let allMessage = document.getElementById("allMessage")
function nameUserChatFunction(){
    nameUserChat.textContent = "Bot"
};
function setBottonScrollbar() {
    let objDiv = document.getElementById("fixScrollbar");
    objDiv.scrollTop = objDiv.scrollHeight;
}
function newMessageFunction() {
    let a = allMessage.querySelectorAll('div')
    console.log(a);
}
function sendMessageFunction(){
    let a = sendMessage.value
    let div = document.createElement("div");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");
    if (a != ""){
        DataFunction()
        div3.textContent=time
        div3.classList.add("padding10")
        div.classList.add("displayFlex")
        div.classList.add("marginTop10")
        div2.textContent = a;
        div2.classList.add("displayFlex")
        //p.classList.add("maxWidth200")
        div2.classList.add("card")
        div2.classList.add("padding10")
        div2.classList.add("positionRelative")
        div2.classList.add("textAlignLeft")
        div2.classList.add("overflowWrapAnywhere")
        allMessage.append(div3);
        allMessage.append(div);
        //div.append(p)
        div.append(div2)
        sendMessage.value = "";
    }
}
//
nameUserChatFunction()
sendMessage.addEventListener('keyup', function(event) {
    if (event.code == 'Enter') {
        sendMessageFunction()
    }
});