const keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    KeyW: false,
    KeyS: false,
    KeyD: false
};

function manageKeyDown(e) {
    const inputPlayer1 = document.querySelector("#nicknames div").children[0];
    const inputPlayer2 = document.querySelector("#nicknames div").children[1];

    if(document.activeElement != inputPlayer1 && document.activeElement != inputPlayer2) {
        switch(e.code) {
            case "ArrowUp":
                keys.ArrowUp = true;
                player1.movingUp = true;
                e.preventDefault();
                break;
            case "ArrowDown":
                keys.ArrowDown = true;
                player1.movingDown = true;
                e.preventDefault();
                break;
            case "ArrowLeft":
                keys.ArrowLeft = true;
                if(ball.hSpeed > 0) {
                    if(typeof(collision(ball, player1)) == "number" && collision(ball, player1) >= -StrongStrikeGap) {
                        player1.strongStrike = true;
                    }
                }
                break;
            /*
            case "KeyW":
                keys.KeyW = true;
                player2.movingUp = true;
                break;
            case "KeyS":
                keys.KeyS = true;
                player2.movingDown = true;
                break;
            case "KeyD":
                keys.KeyD = true;
                if(ball.hSpeed < 0) {
                    if(typeof(collision(ball, player2)) == "number" && collision(ball, player2) <= StrongStrikeGap) {
                        player2.strongStrike = true;
                    }
                }
            */
        }
    }

    getNick(e);
}

function manageKeyUp(e) {
    const inputPlayer1 = document.querySelector("#nicknames div").children[0];
    const inputPlayer2 = document.querySelector("#nicknames div").children[1];

    if(document.activeElement != inputPlayer1 && document.activeElement != inputPlayer2) {
        switch(e.code) {
            case "ArrowUp":
                keys.ArrowUp = false;
                player1.movingUp = false;
                break;
            case "ArrowDown":
                keys.ArrowDown = false;
                player1.movingDown = false;
                break;
            case "ArrowLeft":
                keys.ArrowLeft = false;
                break;
            /*
            case "KeyW":
                keys.KeyW = false;
                player2.movingUp = false;
                break;
            case "KeyS":
                keys.KeyS = false;
                player2.movingDown = false;
                break;
            case "KeyD":
                keys.KeyD = false;
            */
        }
    }
}

function getNick(e) {
    const inputPlayer1 = document.querySelector("#nicknames div").children[0];
    //const inputPlayer2 = document.querySelector("#nicknames div").children[1];
    if(e.code == "Enter") {
        if(document.activeElement == inputPlayer1 && inputPlayer1.value) {
            player1.nickname = inputPlayer1.value;
            //inputPlayer2.focus();
            document.activeElement.blur();
        }
        /*
        if(document.activeElement == inputPlayer2 && inputPlayer2.value) {
            player2.nickname = inputPlayer2.value;
            document.activeElement.blur();
        }
        */
    }
}

window.onkeydown = manageKeyDown;

window.onkeyup = manageKeyUp;