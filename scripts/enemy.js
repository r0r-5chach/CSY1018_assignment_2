/* enemy spawning logic */
var aliens = [];
var bombs = [];
var score = 0;

/*Spawns Enemies*/
function spawnEnemy() {
   var alien = document.createElement("div");
   alien.className = "alien";
   alien.id = "alien";
   alien.style.zIndex = "2"
   while (true) {
        alien.style.left = Math.floor(Math.random() * document.body.offsetWidth) + "px";
        if (document.elementFromPoint(alien.offsetLeft, alien.offsetTop).classList.contains("alien") == false) {   
            document.body.appendChild(alien);
            alienLogic = setInterval(spawnBomb, Math.floor(Math.random() * 3000));
            aliens.push([alien, alienLogic]);
            console.log("Alien Spawned")
            break;
        }
   }
}

/*Spawns a bomb*/
function spawnBomb() {
    var alien = aliens[Math.floor(Math.random() * aliens.length)];
    var bomb = document.createElement("div");
    bomb.className = "bomb";
    bomb.style.left = "28px";
    bomb.style.top = "70px";
    bomb.style.zIndex = "1";
    bomb.style.display = "absolute";
    alien[0].appendChild(bomb);
    bombs.push(bomb);
    console.log("Bomb Spawned")
}

/*Makes a random bomb fall a set amount and explodes if colliding with the floor*/
function fall() {
    for (let element of bombs) {
        element.style.top = (element.offsetTop + 10) + "px";
        var elemRect = element.getBoundingClientRect();
        var bodyRect = document.body.getBoundingClientRect();
        var skyRect = document.getElementsByClassName("sky")[0].getBoundingClientRect();
        if (elemRect.bottom >= skyRect.bottom || elemRect.bottom <= bodyRect.offsetHeight) {
            if(Math.floor(Math.random() * 100) < 10) {
                element.className = "explosion";
                console.log("Explosion")
                setTimeout(() => {element.remove()}, 3000);
                bombs.splice(bombs.indexOf(element),1);
                console.log("Bomb Despawned");
                score += 1;

            }
        }
    }
}

/*Checks to see if player is colliding with exploded bomb*/
function checkExplosion() {
    for (let element of document.getElementsByClassName("explosion")) {
        var elemRect = element.getBoundingClientRect();
        var playerRect = document.getElementById("player").getBoundingClientRect();
        if (elemRect.bottom >= playerRect.top && elemRect.right >= playerRect.left && elemRect.left <= playerRect.right && elemRect.top-40 <= playerRect.bottom) {
            score -= 1;
            if (lives <= 1) {
                document.getElementById("player").className = "character dead";
                endGame();
            }
            else {
                element.remove();
                document.getElementsByTagName("li")[lives-1].style.display = "none";
                lives -= 1;            
            }
        }
    }
}