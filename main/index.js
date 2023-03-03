
function onlyNumbers(inputId) {
    document.getElementById(inputId).value = document.getElementById(inputId).value.replace(/\D/g, "");
}