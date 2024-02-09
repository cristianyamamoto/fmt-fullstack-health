// EXERCÍCIO 1 - DECLARAÇÃO DE VARIÁVEIS
let box = 32;
let board = document.getElementById("snake");
let context = board.getContext("2d");

let snake = [
    {
        x: 8 * box,
        y: 8 * box
    },
]

let direction = "right";

let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
};

// EXERCÍCIO 2 - CRIAÇÃO DO BACKGROUD
function createBG() {
    context.fillStyle = "black";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

// EXERCÍCIO 3 - CRIAÇÃO DA COBRA
function createSnake() {
    for (let i in snake) {
        context.fillStyle = "gold";
        context.fillRect(snake[i].x, snake[i].y, box, box);
      }
}

// EXERCÍCIO 4 - CRIAÇÃO DA COMIDA
function createFood() {
    context.fillStyle = "silver";
    context.fillRect(food.x, food.y, box, box);
}

// EXERCÍCIO 5 - MECÂNICA DO MOVIMENTO - função update() no passo a passo
function moveSnake(event) {
    if (event.keyCode == 37 && direction != 'right') direction = 'left';
    if (event.keyCode == 38 && direction != 'down') direction = 'up';
    if (event.keyCode == 39 && direction != 'left') direction = 'right';
    if (event.keyCode == 40 && direction != 'up') direction = 'down';
}

// EXERCÍCIO 6 - ALGORITMO PRINCIPAL P1
function startGame(){
    // ESSA PARTE COMENTADA SUBSTITUI A FUNÇÃO DO setInterval() COM requestAnimationFrame()
    // let fps = 25;
    // setTimeout(() => {
    //     requestAnimationFrame(startGame);
    // }, 1000 / fps);

    if (snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if (snake[0].x < 0 && direction == 'left') snake[0].x = 16 * box;
    if (snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if (snake[0].y < 0 && direction == 'up') snake[0].y = 16 * box;

    for (i = 1; i < snake.length; i++) {
        if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
            clearInterval(game);
            alert("Game Over");
            // return;
        }
    }

    createBG();
    createSnake();
    createFood();

    // EXERCÍCIO 7 - ALGORITMO PRINCIPAL P2
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (direction == "right") snakeX += box;
    if (direction == "left") snakeX -= box;
    if (direction == "up") snakeY -= box;
    if (direction == "down") snakeY += box;

    // EXERCÍCIO 8 - ALGORITMO PRINCIPAL P3
    if (snakeX != food.x || snakeY != food.y) {
        snake.pop(); 
    } else {
        food.x = Math.floor(Math.random() * 15 + 1) * box;
        food.y = Math.floor(Math.random() * 15 + 1) * box;
    }

    let newHead = {
        x: snakeX,
        y: snakeY
    };

    snake.unshift(newHead);
}

// ESSA PARTE COMENTADA SUBSTITUI A FUNÇÃO DO setInterval() COM requestAnimationFrame()
// window.onload = function() {
//     requestAnimationFrame(startGame);
//     document.addEventListener("keydown", moveSnake);
// }

// EXERCÍCIO 9 - COMEÇANDO O JOGO
document.addEventListener("keydown", moveSnake);
let game = setInterval(startGame, 100);