/* enemy spawning logic */
var aliens = [];
var bombs = [];

function spawnEnemy() {
   var alien = document.createElement("div");
   alien.className = "alien";
   alien.id = "alien";
   alien.style.zIndex = "2"
   while (true) {
        alien.style.left = Math.floor(Math.random() * document.body.offsetWidth) + "px";
        if (document.elementFromPoint(alien.offsetLeft, alien.offsetTop).classList.contains("alien") == false) {   
            document.body.appendChild(alien);
            aliens.push(alien);
            break;
        }
   }
}

function spawnBomb() {
    var alien = aliens[Math.floor(Math.random() * aliens.length)];
    var bomb = document.createElement("div");
    bomb.className = "bomb";
    bomb.style.left = "28px";
    bomb.style.top = "70px";
    bomb.style.zIndex = "1";
    bomb.style.display = "absolute";
    alien.appendChild(bomb);
    bombLogic = setInterval(fall, 100);
    bombs.push([bomb, bombLogic]);
}

function fall() {
    var bomb = bombs[Math.floor(Math.random() * bombs.length)];
    bomb[0].style.top = (bomb[0].offsetTop + 10) + "px";

    for (let element of bombs) {
        if (document.elementFromPoint(element[0].offsetLeft, element[0].offsetTop).classList.contains("sky") != true) {
            if(Math.floor(Math.random() * 4) == 3) {
                clearInterval(element[1]);
                element[0].className = "explosion";
            }
        }
    }
}