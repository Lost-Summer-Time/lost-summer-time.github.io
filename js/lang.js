let langSite = document.documentElement.getAttribute("lang");

switch (langSite) {
	case "en":
		langEn()
		break;
	default: // ru
		langRu()
		break;
}

const home = ["Главная", "Home"];
const profile = ["Профиль", "Profile"];
const messages = ["Сообщения", "Messages"];
const groups = ["Группы", "Groups"];
const music = ["Музыка", "Music"];
const video = ["Видео", "Video"];
const story = ["Рассказы", "Story"];
//const windows = ["", "Windows"]
const games = ["Игры", "Games"];
const apps = ["Приложения", "Apps"];
const settings = ["Настройки", "Settings"];

let menu_home = document.getElementById("lang-home");
let menu_profile = document.getElementById("lang-profile");
let menu_messages = document.getElementById("lang-messages");
let menu_groups = document.getElementById("lang-groups");
let menu_music = document.getElementById("lang-music");
let menu_video = document.getElementById("lang-video");
let menu_story = document.getElementById("lang-story");
//let menu_windows = document.getElementById("lang-windows");
let menu_games = document.getElementById("lang-games");
let menu_apps = document.getElementById("lang-apps");
let menu_settings = document.getElementById("lang-settings");

function langRu() {
	if (langSite == "ru") {
		;
	} else {
		document.documentElement.setAttribute("lang", "ru");
		langSite = document.documentElement.getAttribute("lang");
		menu_home.textContent = home[0];
		menu_profile.textContent = profile[0];
		menu_messages.textContent = messages[0];
		menu_groups.textContent = groups[0];
		menu_music.textContent = music[0];
		menu_video.textContent = video[0];
		menu_story.textContent = story[0];
		//menu_windows.textContent = windows[0];
		menu_games.textContent = games[0];
		menu_apps.textContent = apps[0];
		menu_settings.textContent = settings[0];
	}
};

function langEn() {
	if (langSite == "en") {
		;
	} else {
		document.documentElement.setAttribute("lang", "en");
		langSite = document.documentElement.getAttribute("lang");
		menu_home.textContent = home[1];
		menu_profile.textContent = profile[1];
		menu_messages.textContent = messages[1];
		menu_groups.textContent = groups[1];
		menu_music.textContent = music[1];
		menu_video.textContent = video[1];
		menu_story.textContent = story[1];
		//menu_windows.textContent = windows[1];
		menu_games.textContent = games[1];
		menu_apps.textContent = apps[1];
		menu_settings.textContent = settings[1];
	}
}