let timeOwningBall = 0;
let timeToWait = parseInt(Math.random() * 100) % 61 + 30;
let hitStrongStrike;
let timeMovingUp;
let timeMovingDown;
let timeStoped = 0;

function throwBall() {
    keys.KeyD = false;
    if(ballOwner == 2) {
        timeOwningBall = 0;
        timeToWait = parseInt(Math.random() * 100) % 61 + 30;
    }
    timeOwningBall++;

    if(timeOwningBall >= timeToWait) {
        keys.KeyD = true;
        timeOwningBall = 0;
    }
}

function strongStrike() {
    if(typeof(collision(ball, player2)) == "number" && collision(ball, player2) <= StrongStrikeGap && typeof(hitStrongStrike) == "undefined") {
        hitStrongStrike = parseInt(Math.random() * 10) % 2;
    }

    if(hitStrongStrike) {
        keys.KeyD = true;
        player2.strongStrike = true;
    }

    if(ball.hSpeed > 0 && keys.KeyD) {
        keys.KeyD = false;
        hitStrongStrike = undefined;
    }
}

function move() {
    const shouldStop = parseInt(Math.random() * 100) + 1;

    if(keys.KeyW) {
        timeMovingUp++;
        timeStoped = 0;
        timeMovingDown = 0;
    }
    else if(keys.KeyS) {
        timeMovingDown++;
        timeStoped = 0;
        timeMovingUp = 0;
    }
    else {
        timeMovingUp = 0;
        timeMovingDown = 0;
        timeStoped++;
    }
    
    if(ball.moving) {
        if(ball.y < player2.y + player2.height && ball.y + ball.height > player2.y) {
            if(shouldStop == 100) {
                keys.KeyW = false;
                player2.movingUp = false;
                keys.KeyS = false;
                player2.movingDown = false;
            }
        }
        else if(ball.y + ball.height < player2.y) {
            if(timeMovingDown >= 10 || timeMovingDown == undefined || timeStoped >= 15 || timeStoped == undefined) {
                keys.KeyS = false;
                player2.movingDown = false;
                keys.KeyW = true;
                player2.movingUp = true;
            }
        }
        else if(ball.y > player2.y + player2.height) {
            if(timeMovingUp >= 10 || timeMovingUp == undefined || timeStoped >= 15 || timeStoped == undefined) {
                keys.KeyW = false;
                player2.movingUp = false;
                keys.KeyS = true;
                player2.movingDown = true;
            }
        }
    }
}

function handleAI() {
    throwBall();
    strongStrike();
    move();
}