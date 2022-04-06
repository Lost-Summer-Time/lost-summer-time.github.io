function getLang() {
	let langSite = document.documentElement.getAttribute("lang");

	if (!localStorage.getItem("lang")) {
		localStorage.setItem("lang", langSite)
	} else {
		document.documentElement.setAttribute("lang", getLangSite());
		langSite = document.documentElement.getAttribute("lang");
		setLang(lang = langSite);
	}
}

function setLang(lang) {
	let i;

	const home = ["Главная", "Home"],
		profile = ["Профиль", "Profile"],
		messages = ["Сообщения", "Messages"],
		groups = ["Группы", "Groups"],
		audio = ["Аудио", "Audio"],
		video = ["Видео", "Video"],
		story = ["Рассказы", "Story"],
		games = ["Игры", "Games"],
		apps = ["Приложения", "Apps"],
		settings = ["Настройки", "Settings"]

	const title = document.getElementById("lang-title"),
		menu_home = document.getElementById("lang-home"),
		menu_profile = document.getElementById("lang-profile"),
		menu_messages = document.getElementById("lang-messages"),
		menu_groups = document.getElementById("lang-groups"),
		menu_audio = document.getElementById("lang-audio"),
		menu_video = document.getElementById("lang-video"),
		menu_story = document.getElementById("lang-story"),
		menu_games = document.getElementById("lang-games"),
		menu_apps = document.getElementById("lang-apps"),
		menu_settings = document.getElementById("lang-settings")

	switch (lang) {
		case "ru": i = 0; break;
		case "en": i = 1; break;
	}

	menu_home.textContent = home[i];
	menu_profile.textContent = profile[i];
	menu_messages.textContent = messages[i];
	menu_groups.textContent = groups[i];
	menu_audio.textContent = audio[i];
	menu_video.textContent = video[i];
	menu_story.textContent = story[i];
	menu_games.textContent = games[i];
	menu_apps.textContent = apps[i];
	menu_settings.textContent = settings[i];

	switch (true) {
		case home.includes(title.textContent): title.textContent = home[i]; break;
		case profile.includes(title.textContent): title.textContent = profile[i]; break;
		case messages.includes(title.textContent): title.textContent = messages[i]; break;
		case groups.includes(title.textContent): title.textContent = groups[i]; break;
		case audio.includes(title.textContent): title.textContent = audio[i]; break;
		case video.includes(title.textContent): title.textContent = video[i]; break;
		case story.includes(title.textContent): title.textContent = story[i]; break;
		case games.includes(title.textContent): title.textContent = games[i]; break;
		case apps.includes(title.textContent): title.textContent = apps[i]; break;
		case settings.includes(title.textContent): title.textContent = settings[i]; break;
	}

	setLangSite(lang);
}