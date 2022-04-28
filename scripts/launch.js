/*Add events to webpage*/

function loadScripts() {
    document.addEventListener("keydown", move)
    document.addEventListener("keyup", stop)
    document.getElementById("start").addEventListener("click", startGame)
}

function startGame() {
    var button = document.getElementById("start");
    button.style.display = "none";
}
document.addEventListener("DOMContentLoaded", loadScripts);
