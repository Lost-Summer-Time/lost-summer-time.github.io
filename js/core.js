switch (localStorage.getItem("data-theme")) {
    case "dark":
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("data-theme", "dark");
        break;
    case "light":
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("data-theme", 'light');
        break;
    default:
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("data-theme", "dark");
        break;
}