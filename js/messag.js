let nameUserChat = document.getElementById("nameUserChat")
let sendMessage = document.getElementById("sendMessage")
let allMessage = document.getElementById("allMessage")
function nameUserChatFunction(){
    nameUserChat.textContent = "Bot"
};
function sendMessageFunction(){
    let a = sendMessage.value
    let p = document.createElement("p");
    console.log(a);
    if (a != ""){
        p.textContent = a;
        p.classList.add("maxWidth200")
        p.classList.add("card")
        p.classList.add("padding5")
        p.classList.add("wordWrapBreakWord")
        p.classList.add("marginTop10")
        p.classList.add("positionRelative")
        allMessage.append(p);
        sendMessage.value = "";
        let objDiv = document.getElementById("fixScrollbar");
        objDiv.scrollTop = objDiv.scrollHeight;
    }
}
//
nameUserChatFunction()
sendMessage.addEventListener('keyup', function(event) {
    if (event.code == 'Enter') {
        sendMessageFunction()
    }
});