const testHome = "Виии\nЭто главная страничка\nДа, осмотрись, пожамкай на все";
const testGood = "О, это отлично\nНадеюсь тебе ничего не испортят)";
const textBad = "Жаль что так вышло,\nнадеюсь у вас все наладиться";
const textQuestion = "Как у тебя дела?";
const textWhoAreYou = "Я?\nНу как тебе сказать\nЯ - то что видишь";

const textHowAreYou = "А?\nТебе интересно как у меня дела?";
const textHowAreYou_Yes = "Да?\nТебе интересно?\nНу.. все хорошо?";
const textHowAreYou_No = "А, угу, хорошо";

const niktox2 = ["niktox2", "никтох2"];
const textNiktox2 = "О, хай создатель\nЕсли это ты, а не кто-то тобой притворяется";

const valeria = "valeria",
      textValeria = "",
      valerianx2 = "valerianx2",
      textValeriaNX2 = "";

const gocciolinna = "gocciolinna";
const textGocciolinna = "";

const chaos_02 = "chaos_02";
const textChaos_02 = "О, привет Хаусик\nНу или Англенин, если не нравится Хаус";

const alya2702 = "alya2702";
const textAlya2702 = "";

const rong = "rong";
const textRong = "rong";

const good = ["хорошо", "нормально", "отлично", "неплохо"];
const bad = ["плохо", "хреново", "не очень", "дела не очень", "могло быть лучше"];
const whoAreYou = ["ты кто?", "ты кто ?", "кто ты?", "кто ты ?"];
const howAreYou = ["как у тебя дела?", "как у тебя дела ?", "как дела?", "как дела ?", "как твои?", "как твои ?", "а твои?", "а твои ?", "а как твои?", "а как твои ?", "Как твои дела?", "Как твои дела ?"];

let isDialogue = false;

const canNotAnswer = "Находится в разбаботке";

let answer = null;
let answerUser = null;

function functionAnswer() {
	let auvtlc = answerUser.value.toLowerCase().trim();
	let astc = answer.textContent;
	if (isDialogue) {
		// диалог А как твои дела ?
		if (astc == textHowAreYou) {
			if (auvtlc == "да") {
				answerUser.placeholder = "";
				answerUser.value = "";
				answer.textContent = textHowAreYou_Yes;
			} else if (auvtlc == "нет") {
				answerUser.placeholder = "";
				answerUser.value = "";
				answer.textContent = textHowAreYou_No;
			}
			isDialogue = false;
		}
	} else {
		if (niktox2.includes(auvtlc)) {
			answerUser.placeholder = "";
			answerUser.value = "";
			answer.textContent = textNiktox2;
		} else if (auvtlc == valeria) {
			answerUser.placeholder = "";
			answerUser.value = "";
			answer.textContent = textValeria;
		} else if (auvtlc == valerianx2) {
			answerUser.placeholder = "";
			answerUser.value = "";
			answer.textContent = textValeriaNX2;
		} else if (auvtlc == gocciolinna) {
			answerUser.placeholder = "";
			answerUser.value = "";
			answer.textContent = textGocciolinna;
		} else if (auvtlc == chaos_02) {
			answerUser.placeholder = "";
			answerUser.value = "";
			answer.textContent = textChaos_02;
		} else if (good.includes(auvtlc)) {
			answerUser.placeholder = "";
			answerUser.value = "";
			answer.textContent = testGood;
		} else if (bad.includes(auvtlc)) {
			answerUser.placeholder = "";
			answerUser.value = "";
			answer.textContent = textBad;
		} else if(whoAreYou.includes(auvtlc)) {
			answerUser.placeholder = "";
			answerUser.value = "";
			answer.textContent = textWhoAreYou;
		} else if(howAreYou.includes(auvtlc)) {
			answerUser.placeholder = "";
			answerUser.value = "";
			answer.textContent = textHowAreYou;
			isDialogue = true;
		} else {
			answerUser.placeholder = textQuestion;
			answer.textContent = testHome;
		}
	}
}