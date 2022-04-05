let langSite = document.documentElement.getAttribute("lang");

switch (langSite) {
	case "en": langEn(); break;
	default: langRu(); break; // ru
}

const home = ["Главная", "Home"],
		profile = ["Профиль", "Profile"],
		messages = ["Сообщения", "Messages"],
		groups = ["Группы", "Groups"],
		music = ["Музыка", "Music"],
		video = ["Видео", "Video"],
		story = ["Рассказы", "Story"],
		//windows = ["", "Windows"],
		games = ["Игры", "Games"],
		apps = ["Приложения", "Apps"],
		settings = ["Настройки", "Settings"]

let title_home = document.getElementById("lang-title"),
	menu_home = document.getElementById("lang-home"),
	menu_profile = document.getElementById("lang-profile"),
	menu_messages = document.getElementById("lang-messages"),
	menu_groups = document.getElementById("lang-groups"),
	menu_music = document.getElementById("lang-music"),
	menu_video = document.getElementById("lang-video"),
	menu_story = document.getElementById("lang-story"),
	//menu_windows = document.getElementById("lang-windows"),
	menu_games = document.getElementById("lang-games"),
	menu_apps = document.getElementById("lang-apps"),
	menu_settings = document.getElementById("lang-settings")

function langRu() { langSite == "ru" ? null : setLang(lang = "ru", i = 0); }

function langEn() { langSite == "en" ? null : setLang(lang = "en", i = 1); }

function setLang(lang, i) {
	document.documentElement.setAttribute("lang", lang);
	langSite = document.documentElement.getAttribute("lang");

	//title_home.textContent = home[i];

	menu_home.textContent = home[i];
	menu_profile.textContent = profile[i];
	menu_messages.textContent = messages[i];
	menu_groups.textContent = groups[i];
	menu_music.textContent = music[i];
	menu_video.textContent = video[i];
	menu_story.textContent = story[i];
	//menu_windows.textContent = windows[0];
	menu_games.textContent = games[i];
	menu_apps.textContent = apps[i];
	menu_settings.textContent = settings[i];
}