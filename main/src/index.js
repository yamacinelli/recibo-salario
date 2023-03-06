
function changeTheme() {
    let theme = document.body.classList[0];
    if (theme === "white-theme") {
        darkMode();
    } else {
        whiteMode();
    }
}

function whiteMode() {
    document.body.classList = "white-theme";

    document.getElementById("img-contrast").src = "/main/assets/icon/moon-outline.svg"; //icon-mode
    document.getElementById("img-contrast").classList.remove("invert-1"); //icon-mode

    document.styleSheets.item(0).cssRules.item(11).style.backgroundColor = "#eeeeee"; //input[type=text]
    document.styleSheets.item(0).cssRules.item(11).style.color = "#000000"; //input[type=text]
    document.styleSheets.item(0).cssRules.item(14).style.color = "#000000"; //label-radio
}

function darkMode() {
    document.body.classList = "dark-theme";

    document.getElementById("img-contrast").src = "/main/assets/icon/sunny-outline.svg"; //icon-mode
    document.getElementById("img-contrast").classList.add("invert-1"); //icon-mode

    document.styleSheets.item(0).cssRules.item(11).style.backgroundColor = "#222222"; //input[type=text]
    document.styleSheets.item(0).cssRules.item(11).style.color = "#ffffff"; //input[type=text]
    document.styleSheets.item(0).cssRules.item(14).style.color = "#ffffff"; //label-radio
}

function onlyNumbers(inputId) {
    document.getElementById(inputId).value = document.getElementById(inputId).value.replace(/\D/g, "");
}