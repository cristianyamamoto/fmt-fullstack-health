// DECLARAR VÁRIAVEIS DO BOARD 
let box = 32;
let rows = 16;
let columns = 16;

let board;
let boardWidth = box * columns; // 32 * 16
let boardHeight = box * rows; // 32 * 16
let context;

let snake = [];
//snake.length = 2;
snake[0] = {
    x: 8 * box,
    y: 8 * box
};

let direction = "right";

let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
};

function createBG(context) {
    context.fillStyle = "white";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function createSnake(context) {
    for (i = 0; i < snake.length; i++) {
        snake[i] = {
            x: snake[0].x + 1,
            y: snake[0].y + 1
        }
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function createFood(){
    
}

window.onload = function() {
    board = document.getElementById("snake");
    board.width = boardWidth;
    board.height = boardHeight;
    context = board.getContext("2d");

    createBG(context);

    createSnake(context);
}