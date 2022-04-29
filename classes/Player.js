class Player {
    constructor() {
        this.element = document.getElementById("player");
        this.lives = 3;
        this.lastKey = 0;
        this.currentKey = 0;
    }

    movement(keyCode) {
        var element;
        switch(keyCode) {

            case 38: /*Up*/
            case 87: /*W*/
                element = document.elementFromPoint(this.element.offsetLeft, this.element.offsetTop-5);
                if (element.classList.contains("sky") == false) {
                    this.element.style.top = (this.element.offsetTop - 5) + "px";
                }
                this.element.className = "character walk up";
                console.log("Up");
                break;

            case 40: /*Down*/
            case 83: /*S*/
                element = document.elementFromPoint(this.element.offsetLeft, this.element.offsetTop+5);
                if (element.classList.contains("sky") == false) {
                    this.element.style.top = (this.element.offsetTop + 5) + "px";
                }
                this.element.className = "character walk down";
                console.log("Down");
                break;

            case 37: /*Left*/
            case 65: /*A*/
                element = document.elementFromPoint(this.element.offsetLeft-5, this.element.offsetTop);
                if (element.classList.contains("sky") == false) {
                    this.element.style.left = (this.element.offsetLeft - 5) + "px";
                }
                this.element.className = "character walk left";
                console.log("Left");
                break;

            case 39: /*Right*/
            case 68: /*D*/
                element = document.elementFromPoint(playerLeft+5, playerTop);
                if (element.classList.contains("sky") == false) {
                    this.element.style.left = (this.element.offsetLeft + 5) + "px";
                }
                this.element.className = "character walk right";
                console.log("Right");
                break;
        }
    }

    getKey(event) {
        this.lastKey = this.currentKey;
        this.currentKey = event.keyCode;
    }

    move() {
        if (this.currentKey == 0) {
            this.movement(this.lastKey);
            
            if (this.lastKey != 0) {
                this.currentKey = this.lastKey;
            }
        }
        else {
            this.movement(this.currentKey);
        }
    }

    stop(event) {
        if (this.currentKey == this.lastKey) {
            this.currentKey = 0;
            this.lastKey = 0;
        }
        else if (event.keyCode == this.currentKey) {
            this.currentKey = 0;
        }
        else if (event.keyCode == this.lastKey) {
            this.lastKey = 0;
        }
    
        if (!this.element.classList.contains("dead")) {
            switch(event.keyCode) {   
                
                case 38: /*Up*/
                case 87: /*W*/
                    this.element.className = "character stand up";
                    break;

                case 40: /*Down*/
                case 83: /*S*/
                    this.element.className = "character stand down";
                    break;
                    
                case 37: /*Left*/
                case 65: /*A*/
                    this.element.className = "character stand left";
                    break;

                case 39: /*Right*/
                case 68: /*D*/
                    this.element.className = "character stand right";
                    break;
    
            }
        }
    }
}