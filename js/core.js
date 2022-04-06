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

   if (document.getElementById("answer")) {
      answer = document.getElementById("answer");
      answerUser = document.getElementById("answer-user");
      answer.textContent = testHome;
      answerUser.placeholder = textQuestion;
      answerUser.addEventListener("keyup", function(event) { 
         if (event.code == "Enter" || event.key == "Enter") {
            functionAnswer();
         }
      });
   }

   getLang();
});

window.onload = function() {
   if (document.querySelectorAll("audio").length) {
      let i = 0
      while (i < document.querySelectorAll("audio").length) {
         let main = document.querySelectorAll("audio")[i].parentNode;
         let audio = document.querySelectorAll("audio")[i];
         main.querySelector(".music-name").textContent = audio.attributes[0].nodeValue.replace("/mp3/", "").replace(".mp3", "")
         main.querySelector(".time").textContent = fixTime(time = Math.round(audio.duration));
         i++
      }
   }
};

/*
window.onbeforeunload = function(e) {
   return false;
};
*/