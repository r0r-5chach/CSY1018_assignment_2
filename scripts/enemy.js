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
            alienLogic = setInterval(spawnBomb, 3000);
            aliens.push([alien, alienLogic]);
            console.log("Alien Spawned")
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
    alien[0].appendChild(bomb);
    bombLogic = setInterval(fall, 100);
    bombs.push([bomb, bombLogic]);
    console.log("Bomb Spawned")
}

function fall() {
    var bomb = bombs[Math.floor(Math.random() * bombs.length)];
    bomb[0].style.top = (bomb[0].offsetTop + 10) + "px";

    for (let element of bombs) {
        var closestElement = document.elementFromPoint(element[0].offsetLeft, element[0].offsetTop+10);
        if (!closestElement.classList.contains("sky") && !closestElement.classList.contains("alien") && !closestElement.classList.contains("bomb") && !closestElement.classList.contains("explosion")) {
            if(Math.floor(Math.random() * 2) == 1) {
                clearInterval(element[1]);
                element[0].className = "explosion";
                console.log("Explosion")
                setTimeout(() => {element[0].remove()}, 3000);
                bombs.splice(bombs.indexOf(element),1);
                console.log("Bomb Despawned");
            }
        } 
    }
}

function checkExplosion() {
    for (let element of document.getElementsByClassName("explosion")) {
        var elemRect = element.getBoundingClientRect();
        var playerRect = document.getElementById("player").getBoundingClientRect();
        if (elemRect.bottom >= playerRect.top && elemRect.right >= playerRect.left) {
            document.getElementById("player").style.display = "none";
        }
    }
}