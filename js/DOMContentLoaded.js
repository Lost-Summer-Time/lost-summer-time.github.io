// загружен только DOM-дерево
document.addEventListener("DOMContentLoaded", () => {
   if (document.body.clientWidth <= 430) {
      document.getElementById("css").href = "/css/phone.css";
      document.getElementById("pc").classList.toggle("displayNone");
      //document.getElementById("pc").remove();
   } else {
      document.getElementById("phone").classList.toggle("displayNone");
      //document.getElementById("phone").remove();
   }
});