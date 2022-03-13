const testHome = "Виии\nЭто главная страничка\nДа, осмотрись, понажимай на все";
const testGood = "О, это отлично\nНадеюсь тебе ничего не испортят)";
const textBad = "Жаль что так вышло,\nнадеюсь у вас все наладиться";
const textQuestion = "Как у тебя дела?";
const textWhoAreYou = "Я?\nНу как тебе сказать\nЯ - то что видишь";

const textHowAreYou = "А?\nТебе интересно как у меня дела?";
const textHowAreYou_Yes = "Да?\nТебе интересно?\nНу.. все хорошо?";
const textHowAreYou_No = "А, угу, хорошо";

const niktox2 = ["niktox2", "никтох2"];
const textNiktox2 = "О, хай создатель\nЕсли это ты, а не кто-то тобой притворяется";

const valeria = "valeria";
const textValeria = "";
const valerianx2 = "valerianx2";
const textValeriaNX2 = "";

const gocciolinna = "gocciolinna";
const textGocciolinna = "";

const chaos_02 = "chaos_02";
const textChaos_02 = "О, привет Хаусик\nНу или Англенин, если не нравится Хаус";

const alya2702 = "alya2702";
const textAlya2702 = "";

const rong = "rong";
const textRong = "rong";

const good = ["хорошо", "нормально", "отлично"];
const bad = ["плохо", "хреново", "не очень", "дела не очень"];
const whoAreYou = ["ты кто?", "ты кто ?"];
const howAreYou = ["как у тебя дела?", "как у тебя дела ?", "как твои?", "как твои ?", "а твои?", "а твои ?", "а как твои?", "а как твои ?"];

let isDialogue = false;

const canNotAnswer = "Находится в разбаботке";

let answerSite = document.getElementById("answer-site");
answerSite.textContent = testHome;
let answerUser = document.getElementById("answer-user");
let question = document.getElementById("question");
question.textContent = textQuestion;

function functionAnswer() {
    let auvtlc = answerUser.value.toLowerCase().trimEnd();
    let astc = answerSite.textContent;
    if (isDialogue) {
        // диалог А как твои дела ?
        if (astc == textHowAreYou) {
            if (auvtlc == "да") {
                question.textContent = "";
                answerUser.value = "";
                answerSite.textContent = textHowAreYou_Yes;
            } else {
                question.textContent = "";
                answerUser.value = "";
                answerSite.textContent = textHowAreYou_No;
            }
            isDialogue = false;
        }
    } else {
        if (niktox2.includes(auvtlc)) {
            question.textContent = "";
            answerUser.value = "";
            answerSite.textContent = textNiktox2;
        } else if (auvtlc == valeria) {
            
        } else if (auvtlc == valerianx2) {
            
        } else if (auvtlc == gocciolinna) {
            
        } else if (auvtlc == chaos_02) {
            
        } else if (good.includes(auvtlc)) {
            question.textContent = "";
            answerUser.value = "";
            answerSite.textContent = testGood;
        } else if (bad.includes(auvtlc)) {
            question.textContent = "";
            answerUser.value = "";
            answerSite.textContent = textBad;
        } else if(whoAreYou.includes(auvtlc)) {
            question.textContent = "";
            answerUser.value = "";
            answerSite.textContent = textWhoAreYou;
        } else if(howAreYou.includes(auvtlc)) {
            question.textContent = "";
            answerUser.value = "";
            answerSite.textContent = textHowAreYou;
            isDialogue = true;
        } else {
            question.textContent = textQuestion;
            answerSite.textContent = testHome;
        }
    }
}

answerUser.addEventListener("keyup", function(event) { if (event.code == "Enter" || event.key == "Enter") {functionAnswer();}});