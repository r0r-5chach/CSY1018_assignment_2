/* enemy spawning logic */
var aliens = [];

function spawnEnemy() {
   var alien = document.createElement("div");
   alien.className = "alien";
   alien.id = "alien";
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
    var alien = aliens[0];
    var bomb = document.createElement("div");
    bomb.className = "bomb";
    bomb.style.left = "28px";
    bomb.style.top = "70px";
    bomb.style.zIndex = "-1";
    alien.appendChild(bomb); 
}
