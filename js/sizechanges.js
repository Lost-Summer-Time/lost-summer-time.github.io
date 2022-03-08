window.addEventListener("resize", () => {
    if (document.body.clientWidth <= 360) {
        console.log("Размер окна меньше/равен 360 - " + document.body.clientWidth);
    } else {
        console.log("Размер окна больше 360 - " + document.body.clientWidth);
    }
})