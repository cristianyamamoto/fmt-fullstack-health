// DECLARAR VÁRIAVEIS DO BOARD 
let box = 32;
let rows = 16;
let columns = 16;

let board;
let boardWidth = box * columns; // 32 * 16
let boardHeight = box * rows; // 32 * 16
let context;

let snake = [
    {
        x: 8 * box,
        y: 8 * box
    },
];
let snakeX = snake[0].x;
let snakeY = snake[0].y;

let direction = "right";

let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
};

let game = setInterval(startGame, 100);

function createBG(context) {
    context.fillStyle = "white";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function createSnake(context) {
    
    // for (i = 0; i < snake.length; i++) {
    //     ontext.fillStyle = "green";
    //     context.fillRect(snake[i].x, snake[i].y, box, box);
    // }

    for (let i in snake) {
        context.fillStyle = "gold";
        context.fillRect(snake[i].x, snake[i].y, box, box);
      }

}

function createFood() {
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
}

// passo 5 função update() no step by step
function moveSnake(event) {
    if (event.keyCode == 37 && direction != 'right') direction = 'left';
    if (event.keyCode == 38 && direction != 'down') direction = 'up';
    if (event.keyCode == 39 && direction != 'left') direction = 'right';
    if (event.keyCode == 40 && direction != 'up') direction = 'down';
}

function startGame(){
    if (snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if (snake[0].x < 0 && direction == 'left') snake[0].x = 16 * box;
    if (snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if (snake[0].y < 0 && direction == 'up') snake[0].y = 16 * box;

    for (i in snake) {
        if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
            clearInterval(game);
            alert("Game Over");
        }
      }
}

function snakeDirection(){
    if (direction == "right") snakeX += box;
    if (direction == "left") snakeX -= box;
    if (direction == "up") snakeY -= box;
    if (direction == "down") snakeY += box;
}

window.onload = function() {
    board = document.getElementById("snake");
    board.width = boardWidth;
    board.height = boardHeight;
    context = board.getContext("2d");

    createBG(context);
    createSnake(context);
    createFood();

    document.addEventListener("keydown", moveSnake);
    
}