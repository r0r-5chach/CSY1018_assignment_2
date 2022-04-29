/*Add events to webpage*/

function showDisplay(mode) {
    for (let element of document.body.getElementsByTagName("*")) {
        element.style.display = mode;
    }
}

/*Registers interval functions and trigger functions*/
function load() {
    document.addEventListener("keydown", getKey)
    document.addEventListener("keyup", stop)
    setInterval(move, 10);
    document.getElementById("start").addEventListener("click", startGame)

    showDisplay("none");
    document.getElementById("start").style.display = "block";
}

/*Starts game functionality*/
function startGame() {
    showDisplay("block");
    document.getElementById("start").style.display = "none";
    document.getElementsByClassName("weapon")[0].style.display = "none";
    setInterval(spawnEnemy, 2500);
    setInterval(checkExplosion, 10);
}

document.addEventListener("DOMContentLoaded", load);
