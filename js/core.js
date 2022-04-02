document.addEventListener("DOMContentLoaded", () => {
   if (document.body.clientWidth <= 430) {
      document.getElementById("css-device").href = "/css/phone.css";
      document.querySelectorAll(".pc").forEach(function(e) {
         e.remove();
         document.querySelectorAll(".phone").forEach(function(e) {
            e.classList.toggle("hide");
         })
      })
   } else {
      document.querySelectorAll(".phone").forEach(function(e) {
         e.remove();
         document.querySelectorAll(".pc").forEach(function(e) {
            e.classList.toggle("hide");
         })
      })
   }

   setIconSVG();

   answer = document.getElementById("answer");
   answerUser = document.getElementById("answer-user");
   answer.textContent = testHome;
   answerUser.placeholder = textQuestion;

   answerUser.addEventListener("keyup", function(event) { 
      if (event.code == "Enter" || event.key == "Enter") {
         functionAnswer();
      }
   });
});