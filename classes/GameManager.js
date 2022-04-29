class GameManager {
    constructor() {
        this.intervals = [];
        this.aliens = [];
        this.player = Player();
        this.startButton = document.getElementById("start");
    }

    static showDisplay(mode) {
        for (let element of document.getElementsByTagName("*")) {
            element.style.display = mode;
        }
    }

    load() {
        document.addEventListener("keydown", this.player.getKey)
        document.addEventListener("keyup", this.player.stop)
        this.startButton.addEventListener("click", this.player.startGame)
        showDisplay("none");
        this.startButton.getElementById("start").style.display = "block";
    }

    startGame() {
        this.player.className = "character";
        this.player.lives = 3;
        showDisplay("block");
        this.startButton.style.display = "none";
        document.getElementsByClassName("weapon")[0].style.display = "none";
        this.intervals.push(setInterval(player.move, 10));
        /*Set enemy spawning*/
    }

    endGame() {
        for (let alien of this.aliens) {
            clearInterval(alien.logic[0]);
            clearInterval(alien.logic[1]);
            alien.element.remove();
        }
        this.aliens = [];

        var text = document.createElement("p");
        text.innerHTML = "GAME OVER";
        this.startButton.appendChild(text);
        showDisplay("none");
        this.startButton.style.display = "block";
        text.style.display = "block";
    }
}