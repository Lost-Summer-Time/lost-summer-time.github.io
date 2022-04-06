function setLangSite(lang) {
   localStorage.setItem("lang", lang)
   document.documentElement.setAttribute("lang", lang);
}

function getLangSite() {
   return localStorage.getItem("lang");
}

