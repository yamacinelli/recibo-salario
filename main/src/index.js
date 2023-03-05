
function changeTheme() {
    let theme = document.body.classList[0];
    if (theme === "white-theme") {
        document.getElementById("img-contrast").src = "/main/assets/icon/sunny-outline.svg";
        document.getElementById("img-contrast").classList.add("invert-1");
        document.body.classList = "dark-theme";
    } else {
        document.getElementById("img-contrast").src = "/main/assets/icon/moon-outline.svg";
        document.getElementById("img-contrast").classList.remove("invert-1");
        document.body.classList = "white-theme";
    }
}

function onlyNumbers(inputId) {
    document.getElementById(inputId).value = document.getElementById(inputId).value.replace(/\D,/g, "");
}