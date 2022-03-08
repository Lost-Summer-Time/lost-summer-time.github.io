const checkboxtheme = document.getElementById("theme");
let root = document.documentElement;

checkboxtheme.addEventListener("change", e => {
    if (e.target.checked) {
        root.style.setProperty("--background-html", "white");
        root.style.setProperty("--background-div", "#eee");
        root.style.setProperty("--color-text", "black");
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("data-theme", 'light');
    } else {
        root.style.setProperty("--background-html", "#101010");
        root.style.setProperty("--background-div", "#1b1b1b");
        root.style.setProperty("--color-text", "white");
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("data-theme", "dark");
    }
})