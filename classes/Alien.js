class Alien {
    constructor(bombSpeed, fireRate) {
        this.bombSpeed = bombSpeed;
        this.fireRate = fireRate;
        this.bombs = [];
        this.logic = [];

    }

    spawn() {
        this.element = document.createElement("div");
        this.element.className = "alien";
        this.element.style.zIndex = "2";
        this.element.style.left = Math.floor(Math.random() * document.body.offsetWidth) + "px";
        document.body.appendChild(this.element);
        this.logic.push(setInterval(this.spawnBomb, this.fireRate))
        this.logic.push(setInterval(this.fall, 50));
        console.log("Alien Spawned");
        return this;
    }

    spawnBomb() {
        var bomb = document.createElement("div");
        bomb.className = "bomb";
        bomb.style.left = "28px";
        bomb.style.top = "70px";
        bomb.style.zIndex = "1";
        bomb.style.display = "absolute";
        this.element.appendChild(bomb);
        this.bombs.push(bomb);
        console.log("Bomb Spawned");
    }

    /*Makes a random bomb fall a set amount and explodes if colliding with the floor*/
    fall() {
        for (let bomb of this.bombs) {
            if (element.classList.contains("explosion")) {
                var elemRect = element.getBoundingClientRect();
                var playerRect = document.getElementById("player").getBoundingClientRect();
                if (elemRect.bottom >= playerRect.top && elemRect.right >= playerRect.left && elemRect.left <= playerRect.right && elemRect.top <= playerRect.bottom) {
                    document.getElementById("player").style.display = "none";
                }
            }
            else {
                bomb.style.top = (bomb.offsetTop + this.bombSpeed) + "px";
                var closestElement = document.bombFromPoint(bomb.offsetLeft, bomb.offsetTop+10);
                if (!closestElement.classList.contains("sky") && !closestElement.classList.contains("alien") && !closestElement.classList.contains("bomb") && !closestElement.classList.contains("explosion")) {
                    if(Math.floor(Math.random() * 100) < 10 || bomb.bottom >= document.body.bottom || closestElement.classList.contains("character")) {
                        bomb.className = "explosion";
                        console.log("Explosion")
                        setTimeout(() => {bomb.remove()}, 3000);
                        bombs.splice(bombs.indexOf(bomb),1);
                        console.log("Bomb Despawned");
                    }
                }
            }
        }
    }

    removeBombs() {
        for (let bomb of this.bombs) {
            bomb.remove();
        }
    }
}