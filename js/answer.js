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
        functionAnswer();
    }
});

function functionAnswer() {
    let auvtlc = answerUser.value.toLowerCase();
    if (auvtlc == "хорошо" || auvtlc == "нормально") {
        question.textContent = "";
        answerUser.value = ""
        answerSite.textContent = testGood;
    } else if(auvtlc == "плохо" || auvtlc == "хреново"){
        question.textContent = "";
        answerUser.value = ""
        answerSite.textContent = textBad;
    } else if(auvtlc == "ты кто?" || auvtlc == "ты кто ?"){
        question.textContent = "";
        answerUser.value = ""
        answerSite.textContent = "Да хуй знает";
    } else {
        question.textContent = textQuestion;
        answerSite.textContent = testHome;
    }
}