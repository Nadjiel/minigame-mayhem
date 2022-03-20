const canvas = document.getElementById("pong-plus");
canvas.width = parseInt(window.getComputedStyle(canvas).getPropertyValue("width"));
canvas.height = parseInt(window.getComputedStyle(canvas).getPropertyValue("height"));
const ctx = canvas.getContext("2d");

const tileSize = Math.round(canvas.height / 22);
const PointsToWin = 10;
const StrongStrikeGap = tileSize * 2;
let startTime;
let finishTime;

//Main code

let winner = null;
let winnerScore = null;
const player1 = new Racket(1);
const player2 = new Racket(2);
let ballOwner = randomizeBallOwner();
let ball = new Ball();

let objs = [player1, player2, ball];



function loop() {
    //Refresh screen
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    background();
    
    //Game flow
    if(!winner) {
        handleCollisions();
        handlePoints();
        if(ballOwner) {
            ball = new Ball();
            objs[2] = ball;
        }
        moveObjs();
        if(ball.moving && !startTime) startTime = Date.now();
        drawObjs();
        drawPoints();

        requestAnimationFrame(loop);
    }
    else {
        if(!finishTime) finishTime = Date.now();
        displayVictory();
        winnerScore = winner.points * 1000 - Math.round((finishTime - startTime) / 1000) * 10;
        if(winner.nickname) updateRanking( { "name": winner.nickname, "score": winnerScore } );
    }
}
loop();