const testHome = "Виии\nЭто главная страничка\nДа, осмотрись, понажимай на все";
const testGood = "О, это отлично\nНадеюсь тебе ничего не испортят)";
const textBad = "Жаль что так вышло,\nнадеюсь у вас все наладиться";
const textQuestion = "Как у тебя дела?"

let answerSite = document.getElementById("answer-site");
answerSite.textContent = testHome;
let answerUser = document.getElementById("answer-user");
let question = document.getElementById("question");
question.textContent = textQuestion;

answerUser.addEventListener("keyup", function(event) {
    if (event.code == "Enter" || event.key == "Enter") {
        switch (answerUser.value.toLowerCase()) {
            case "хорошо", "нормально":
                question.textContent = "";
                answerUser.value = ""
                answerSite.textContent = testGood;
                break;
            case "плохо":
                question.textContent = "";
                answerUser.value = ""
                answerSite.textContent = textBad;
                break;
            case "ты кто?", "ты кто ?":
                question.textContent = "";
                answerUser.value = ""
                answerSite.textContent = "Да хуй знает";
                break;
            default:
                question.textContent = textQuestion;
                answerSite.textContent = testHome;
                break;
        }
    }
});