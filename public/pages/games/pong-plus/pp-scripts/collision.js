function collision(obj1, obj2) {
    let tCol = obj2.y + obj2.height - obj1.y;
    let rCol = obj1.x + obj1.width - obj2.x;
    let bCol = obj1.y + obj1.height - obj2.y;
    let lCol = obj2.x + obj2.width - obj1.x;

    if(tCol < 0 || rCol < 0 || bCol < 0 || lCol < 0) {
        if(rCol < 0 && tCol > 0 && bCol > 0) {
            return rCol;
        }
        if(lCol < 0 && tCol > 0 && bCol > 0) {
            return lCol * -1;
        }

        return null;
    }

    if(tCol == Math.min(tCol, rCol, bCol, lCol)) {
        return "top";
    }
    if(rCol == Math.min(tCol, rCol, bCol, lCol)) {
        return "right";
    }
    if(bCol == Math.min(tCol, rCol, bCol, lCol)) {
        return "bottom";
    }
    if(lCol == Math.min(tCol, rCol, bCol, lCol)) {
        return "left";
    }
}

function handleCollisions() {
    if(!ball.moving) {
        return;
    }

    //Ball boundary collisions
    if(ball.y <= 0) {
        if(!sound.wallBounce || sound.wallBounce.ended) sound.wallBounce = playSfx("wall-bounce.wav");
        ball.vSpeed *= -1;
    }
    if(ball.y + ball.height >= canvas.height) {
        if(!sound.wallBounce || sound.wallBounce.ended) sound.wallBounce = playSfx("wall-bounce.wav");
        ball.vSpeed *= -1;
    }

    //Ball & player horizontal collision
    if(collision(ball, player1) == "right") {
        ball.hSpeed *= -1;
        if(player1.strongStrike) {
            if(ball.hSpeed > -(ball.startSpeed + 7)) ball.hSpeed--;
            sound.strongStrike = playStrongStrikeSfx();
            player1.strongStrike = false;
        }
        else {
            if(!sound.strike || sound.strike.ended) sound.strike = playSfx("strike.wav");
            ball.hSpeed = -ball.startSpeed;
        }

        if(ball.vSpeed > 0) {
            if(player1.movingDown && Math.abs(ball.vSpeed) < 9) ball.vSpeed *= 1.25;
            if(player1.movingUp && Math.abs(ball.vSpeed) > 2) ball.vSpeed *= -0.9;
        }
        if(ball.vSpeed < 0) {
            if(player1.movingDown && Math.abs(ball.vSpeed) > 2) ball.vSpeed *= -0.9;
            if(player1.movingUp && Math.abs(ball.vSpeed) < 9) ball.vSpeed *= 1.25;
        }
    }
    if(collision(ball, player2) == "left") {
        ball.hSpeed *= -1;
        if(player2.strongStrike) {
            if(ball.hSpeed < ball.startSpeed + 7) ball.hSpeed++;
            sound.strongStrike = playStrongStrikeSfx();
            player2.strongStrike = false;
        }
        else {
            if(!sound.strike || sound.strike.ended) sound.strike = playSfx("strike.wav");
            ball.hSpeed = ball.startSpeed;
        }

        if(ball.vSpeed > 0) {
            if(player2.movingDown && Math.abs(ball.vSpeed) < 9) ball.vSpeed *= 1.25;
            if(player2.movingUp && Math.abs(ball.vSpeed) > 2) ball.vSpeed *= -0.9;
        }
        if(ball.vSpeed < 0) {
            if(player2.movingDown && Math.abs(ball.vSpeed) > 2) ball.vSpeed *= -0.9;
            if(player2.movingUp && Math.abs(ball.vSpeed) < 9) ball.vSpeed *= 1.25;
        }
    }

    //Ball & player vertical collision
    if(collision(ball, player1) == "top") {
        if(!sound.strike || sound.strike.ended) sound.strike = playSfx("strike.wav");
        if(ball.vSpeed < 0) ball.vSpeed *= -1;
        if(player1.isMoving()) ball.vSpeed *= 1.25;
    }
    if(collision(ball, player1) == "bottom") {
        if(!sound.strike || sound.strike.ended) sound.strike = playSfx("strike.wav");
        if(ball.vSpeed > 0) ball.vSpeed *= -1;
        if(player1.isMoving()) ball.vSpeed *= 1.25;
    }
    if(collision(ball, player2) == "top") {
        if(!sound.strike || sound.strike.ended) sound.strike = playSfx("strike.wav");
        if(ball.vSpeed < 0) ball.vSpeed *= -1;
        if(player2.isMoving()) ball.vSpeed *= 1.25;
    }
    if(collision(ball, player2) == "bottom") {
        if(!sound.strike || sound.strike.ended) sound.strike = playSfx("strike.wav");
        if(ball.vSpeed > 0) ball.vSpeed *= -1;
        if(player2.isMoving()) ball.vSpeed *= 1.25;
    }
}