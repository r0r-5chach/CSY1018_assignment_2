/*Add events to webpage*/

function loadScripts() {
    document.addEventListener("keydown", getKey)
    document.addEventListener("keyup", stop)
    setInterval(move, 10);
    document.getElementById("start").addEventListener("click", startGame)
}

function startGame() {
    var button = document.getElementById("start");
    button.style.display = "none";
}
document.addEventListener("DOMContentLoaded", loadScripts);
