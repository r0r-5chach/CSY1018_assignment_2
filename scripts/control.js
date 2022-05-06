/* player movement logic */
var currentKey = 0;
var lastKey = 0;
var lives = 3;

function setVars() {
    let player = document.getElementById("player");
}

document.onloadend = setVars;

/*Controls vertical movement*/
function verticalMovement(keyCode) {
    var playerLeft = player.offsetLeft;
    var playerTop = player.offsetTop;
    switch(keyCode) {
        case 38: /*Up*/
        case 87: /*W*/
            var element = document.elementFromPoint(playerLeft, playerTop-5);
            if (element.classList.contains("sky") == false) { /*change to only trigger when not grass*/
                player.style.top = (playerTop - 5) + "px";
            }
            player.className = "character walk up";
            console.log("Up");
            break;
        case 40: /*Down*/
        case 83: /*S*/
            var element = document.elementFromPoint(playerLeft, playerTop+5);
            if (element.classList.contains("sky") == false) {
                player.style.top = (playerTop + 5) + "px";
            }
            player.className = "character walk down";
            console.log("Down");
            break;
    }
}

/*Controls horizontal movement*/
function horizontalMovement(keyCode) {
    var playerLeft = player.offsetLeft;
    var playerTop = player.offsetTop;
    switch(keyCode) {
        case 37: /*Left*/
        case 65: /*A*/
            var element = document.elementFromPoint(playerLeft-5, playerTop);
            if (element.classList.contains("sky") == false) {
                player.style.left = (playerLeft - 5) + "px";
            }
            player.className = "character walk left";
            console.log("Left");
            break;
        case 39: /*Right*/
        case 68: /*D*/
            var element = document.elementFromPoint(playerLeft+5, playerTop);
            if (element.classList.contains("sky") == false) {
                player.style.left = (playerLeft + 5) + "px";
            }
            player.className = "character walk right";
            console.log("Right");
            break;
    }
}

/*Controls movement interval*/
function move() {
    if (currentKey == 0) {
        verticalMovement(lastKey);
        horizontalMovement(lastKey);
        if (lastKey != 0) {
            currentKey = lastKey;
        }
    }
    else {
        verticalMovement(currentKey);
        horizontalMovement(currentKey);
    }
    
}

/*Gets triggered keystroke*/
function getKey(event) {
    lastKey = currentKey;
    currentKey = event.keyCode;
}

/*Identifies if no keys are pressed*/
function stop(event) {
    if (currentKey == lastKey) {
        currentKey = 0;
        lastKey = 0;
    }
    else if (event.keyCode == currentKey) {
        currentKey = 0;
    }
    else if (event.keyCode == lastKey) {
        lastKey = 0;
    }

    if (!player.classList.contains("dead")) {
        switch(event.keyCode) {   
            case 38: /*Up*/
            case 87: /*W*/
                player.className = "character stand up";
                break;
            case 40: /*Down*/
            case 83: /*S*/
                player.className = "character stand down";
                break;
            case 37: /*Left*/
            case 65: /*A*/
                player.className = "character stand left";
                break;
            case 39: /*Right*/
            case 68: /*D*/
                player.className = "character stand right";
                break;

        }
    }
}