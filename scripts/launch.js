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
    if (document.body.contains(document.getElementById("scoreBoard"))) {
        document.getElementById("scoreBoard").remove();
    }
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
    setScore();
    scoreBoard();
}

function setScore() {
    let name = prompt("Input your initials (e.g. JFK)", "AAA");
    localStorage.setItem(name, score);
}

function getScores() {
    var values = [];
    var keys = Object.keys(localStorage);

    for (let i of keys) {
        values.push([localStorage.getItem(i), i]);
    }
    return values;
}

function scoreBoard() {
    var board = document.createElement("table");
    var scores = getScores();
    scores.sort(twoDimensionalSort);
    for (let i in scores) {
        var row = document.createElement("tr");
        var col1 = document.createElement("td");
        var col2 = document.createElement("td");
        col1.innerHTML = scores[i][0];
        col2.innerHTML = scores[i][1];
        row.appendChild(col1);
        row.appendChild(col2);
        board.appendChild(row);
    }
    board.id = "scoreBoard";
    board.style.marginTop = "250px";
    board.style.marginLeft = "auto";
    board.style.marginRight = "auto";
    board.style.display = "table";
    document.body.appendChild(board);
}

function twoDimensionalSort(a, b) {
    if (a[0] === b[0]) {
        return 0;
    }
    else {
        return (a[0] > b[0]) ? -1 : 1;
    }
}

document.addEventListener("DOMContentLoaded", load);
