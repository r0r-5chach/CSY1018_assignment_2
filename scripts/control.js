/* player movement logic */

function setVars() {
    let player = document.getElementById("player");
}

document.onloadend = setVars;

function verticalMovement(keyCode) {
    var playerLeft = player.offsetLeft;
    var playerTop = player.offsetTop;
    switch(keyCode) {
        case 38: /*Up*/
        case 87: /*W*/
            var element = document.elementFromPoint(playerLeft, playerTop-10);
            if (element.classList.contains("sky") == false) { /*change to only trigger when not grass*/
                player.style.top = (playerTop - 10) + "px";
            }
            player.className = "character walk up";
            console.log("Up");
            break;
        case 40: /*Down*/
        case 83: /*S*/
            var element = document.elementFromPoint(playerLeft, playerTop+10);
            if (element.classList.contains("sky") == false) {
                player.style.top = (playerTop + 10) + "px";
            }
            player.className = "character walk down";
            console.log("Down");
            break;
    }
}

function horizontalMovement(keyCode) {
    var playerLeft = player.offsetLeft;
    var playerTop = player.offsetTop;
    switch(keyCode) {
        case 37: /*Left*/
        case 65: /*A*/
            var element = document.elementFromPoint(playerLeft-10, playerTop);
            if (element.classList.contains("sky") == false) {
                player.style.left = (playerLeft - 10) + "px";
            }
            player.className = "character walk left";
            console.log("Left");
            break;
        case 39: /*Right*/
        case 68: /*D*/
            var element = document.elementFromPoint(playerLeft+10, playerTop);
            if (element.classList.contains("sky") == false) {
                player.style.left = (playerLeft + 10) + "px";
            }
            player.className = "character walk right";
            console.log("Right");
            break;
    }
}

function move(event) {
    verticalMovement(event.keyCode);
    horizontalMovement(event.keyCode);
}

function stop(event) {
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

