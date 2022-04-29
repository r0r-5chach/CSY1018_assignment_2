/*Add events to webpage*/
var intervals = []

function showDisplay(mode) {
    for (let element of document.body.getElementsByTagName("*")) {
        element.style.display = mode;
    }
}

/*Registers interval functions and trigger functions*/
function load() {
    document.addEventListener("keydown", getKey)
    document.addEventListener("keyup", stop)
    document.getElementById("start").addEventListener("click", startGame)

    showDisplay("none");
    document.getElementById("start").style.display = "block";
}

/*Starts game functionality*/
function startGame() {
    document.getElementById("player").className = "character";
    lives = 3;
    showDisplay("block");
    document.getElementById("start").style.display = "none";
    document.getElementsByClassName("weapon")[0].style.display = "none";
    intervals.push(setInterval(move, 10));
    intervals.push(setInterval(spawnEnemy, 2500));
    setTimeout(intervals.push(setInterval(fall, 50)), 2500);
    intervals.push(setInterval(checkExplosion, 1));
}

function endGame() {
    for (let item of intervals) {
        clearInterval(item);
    }

    for (let item of document.getElementsByClassName("bomb")) {
        item.remove();
    }

    for (let item of document.getElementsByClassName("explosions")) {
        item.remove();
    }

    for (let alien of aliens) {
        clearInterval(alien[1]);
        alien[0].remove();
    }

    var button = document.getElementById("start");
    var text = document.createElement("p");
    text.innerHTML = "GAME OVER";
    button.appendChild(text);
    showDisplay("none");
    button.style.display = "block";
    text.style.display = "block";
}

document.addEventListener("DOMContentLoaded", load);
