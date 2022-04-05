const testHome = "Виии\nЭто главная страничка\nДа, осмотрись, пожамкай на все",
		testGood = "О, это отлично\nНадеюсь тебе ничего не испортят)",
		textBad = "Жаль что так вышло,\nнадеюсь у вас все наладиться",
		textQuestion = "Как у тебя дела?",
		textWhoAreYou = "Я?\nНу как тебе сказать\nЯ - то что видишь",
		textHowAreYou = "А?\nТебе интересно как у меня дела?",
		textHowAreYou_Yes = "Да?\nТебе интересно?\nНу.. все хорошо?",
		textHowAreYou_No = "А, угу, ладно",
		textAreYouReady = "Ты готов?\nК чему? Взлету?\nНет, падению",
		textNiktox2 = "О, хай создатель\nЕсли это ты, а не кто-то тобой притворяется"

const nx2Valeria = "nx2_valeria",
		nx2Gocciolinna = "nx2_gocciolinna",
		nx2Chaos_02 = "nx2_chaos_02",
		nx2Alya2702 = "nx2_alya2702",
		nx2Rong = "nx2_rong"

const textNx2Valeria = "Котииик, привет!\nЯ не придумал что-то гениального..\nТак что...\nЯ тебя люблю (^///^)",
		textNx2Gocciolinna = "Соофиии!\nПривет, как жизнь?",
		textNx2Chaos_02 = "О, привет Хаусик\nНу или Англенин, если не нравится Хаус",
		textNx2Alya2702 = "О, хай Ал\nКак настроение?",
		textNx2Rong = "Ооо, Вася зашел на сайт\nНу как, нравится?"

const niktox2 = ["niktox2", "никтох2"],
		good = ["хорошо", "нормально", "отлично", "неплохо", "замечательно", "превосходно"],
		bad = ["плохо", "хреново", "не очень", "дела не очень", "могло быть лучше"],
		whoAreYou = ["ты кто?", "ты кто ?", "кто ты?", "кто ты ?"],
		howAreYou = ["как у тебя дела?", "как дела?", "как твои?", "а твои?", "а как твои?", "как твои дела?"],
		areYouReady = ["готов?", " ты готов?"]

let isDialogue = false, answer = null, answerUser = null

function functionAnswer() {
	let text = answerUser.value.toLowerCase().trim(),
		textFix = `${text.substr(0, text.length - 2).trim()}?`,
		newAnswer = answer.textContent;

	text[text.length - 2] == " " ? text = textFix : null;

	if (isDialogue) {
		switch (newAnswer) {
			case textHowAreYou:
				text == "да" ? setAnswerText(setText = textHowAreYou_Yes) : setAnswerText(setText = textHowAreYou_No);
				isDialogue = false; break;
			default: resetAnswerText(); break;
		}
	} else {
		switch (text) {
			case nx2Valeria: setAnswerText(setText = textNx2Valeria); break;
			case nx2Gocciolinna: setAnswerText(setText = textNx2Gocciolinna); break;
			case nx2Chaos_02: setAnswerText(setText = textNx2Chaos_02); break;
			case nx2Alya2702: setAnswerText(setText = textNx2Alya2702); break;
			case nx2Rong: setAnswerText(setText = textNx2Rong); break;
			default:
				switch (true) {
					case good.includes(text): setAnswerText(setText = testGood); break;
					case bad.includes(text): setAnswerText(setText = textBad); break;
					case whoAreYou.includes(text): setAnswerText(setText = textWhoAreYou); break;
					case howAreYou.includes(text): setAnswerText(setText = textHowAreYou, setPlaceholder = "Да / Нет"); isDialogue = true; break;
					default: resetAnswerText(); break;
				}
		}
	}
}

function setAnswerText(setText, setPlaceholder = "") {
	answerUser.placeholder = setPlaceholder;
	answerUser.value = "";
	answer.textContent = setText;
}

function resetAnswerText() {
	answerUser.placeholder = textQuestion;
	answer.textContent = testHome;
}