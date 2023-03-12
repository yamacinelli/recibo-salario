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
    document.getElementById("titulo").classList.remove("invert-1"); //titulo

    document.styleSheets.item(0).cssRules.item(11).style.backgroundColor = "#eeeeee"; //input[type=text]
    document.styleSheets.item(0).cssRules.item(11).style.color = "#000000"; //input[type=text]
    document.styleSheets.item(0).cssRules.item(14).style.color = "#000000"; //label-radio
}

function darkMode() {
    document.body.classList = "dark-theme";

    document.getElementById("img-contrast").src = "/main/assets/icon/sunny-outline.svg"; //icon-mode
    document.getElementById("img-contrast").classList.add("invert-1"); //icon-mode
    document.getElementById("titulo").classList.add("invert-1"); //titulo

    document.styleSheets.item(0).cssRules.item(11).style.backgroundColor = "#222222"; //input[type=text]
    document.styleSheets.item(0).cssRules.item(11).style.color = "#ffffff"; //input[type=text]
    document.styleSheets.item(0).cssRules.item(14).style.color = "#ffffff"; //label-radio
}

function onlyNumbers(inputId) {
    document.getElementById(inputId).value = document.getElementById(inputId).value.replace(/[^\,0-9]*$/, "");
    if (inputId === "cpf_cnpj") cpfCnpjFormat()
}

function currencyFormat() {
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        maximumFractionDigits: 2,
        useGrouping: true,
    });
    const value = document.getElementById("valor").value.replace(',', '.').replace(/^[\D\.]+/g, '');
    document.getElementById("valor").value = formatter.format(value);
}

function cpfCnpjFormat() {
    const value = document.getElementById("cpf_cnpj").value.replace(/\D/g, "");
    value.length > 11
        ? document.getElementById("cpf_cnpj").value = value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5")
        : document.getElementById("cpf_cnpj").value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

function radioSelected(radio) {
    radio.value === "PIX" && radio.checked ?
        document.styleSheets.item(0).cssRules.item(27).style.display = "block" :
        document.styleSheets.item(0).cssRules.item(27).style.display = "none"; //row-chave
}

function openModal() {
    document.getElementById("modal").style.display = "block";
}

window.onclick = function (event) {
    if (event.target === modal) document.getElementById("modal").style.display = "none";
}