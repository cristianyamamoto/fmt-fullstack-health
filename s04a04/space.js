//board DECLARANDO O TAMANHO BOARD
let tileSize = 32;
let rows = 16;
let columns = 16;

let board;
let boardWidth = tileSize * columns; // 32 * 16
let boardHeight = tileSize * rows; // 32 * 16
let context;

//ship DECLARANDO A NAVE
let shipWidth = tileSize*2;
let shipHeight = tileSize;
let shipX = tileSize * columns/2 - tileSize;
let shipY = tileSize * rows - tileSize*2;

let ship = {
    x : shipX,
    y : shipY,
    width : shipWidth,
    height : shipHeight
}

let shipImg;
let shipVelocityX = tileSize; //ship moving speed

//aliens DECLARANDO OS ALIENS
let alienArray = [];
let alienWidth = tileSize*2;
let alienHeight = tileSize;
let alienX = tileSize;
let alienY = tileSize;
let alienImg;

// COMEÇA COM 2 LINHAS E 3 COLUNAS E AUMENTA 1 DE CADA A CADA NÍVEL
let alienRows = 2;
let alienColumns = 3;
let alienCount = 0; //number of aliens to defeat
let alienVelocityX = 1; //alien moving speed

//bullets DECLARANDO A MUNIÇÃO
let bulletArray = [];
let bulletVelocityY = -10; //bullet moving speed

let score = 0;
let gameOver = false;

window.onload = function() {
    board = document.getElementById("board"); // CANVAS DO index.html
    // JANELA PRETA DO JOGO
    board.width = boardWidth; // LARGURA DA ÁREA DO JOGO 
    board.height = boardHeight; // ALTURA DA ÁREA DO JOGO 
    context = board.getContext("2d"); //used for drawing on the board

    //draw initial ship
    // context.fillStyle="green";
    // context.fillRect(ship.x, ship.y, ship.width, ship.height);

    //load images
    shipImg = new Image();
    shipImg.src = "./ship.png";
    shipImg.onload = function() {
        context.drawImage(shipImg, ship.x, ship.y, ship.width, ship.height);
    }

    alienImg = new Image();
    alienImg.src = "./alien.png";
    createAliens(); // DESENHANDO OS ALIENS DEPENDENDO DO NÍVEL DO JOGO

    requestAnimationFrame(update);
    document.addEventListener("keydown", moveShip);
    document.addEventListener("keyup", shoot);
}

function update() {
    requestAnimationFrame(update);

    if (gameOver) {
        return;
    }

    // APAGA O DESENHO DOS ALIENS NO CANVAS (SEM ESSA ATUALIZAÇÃO, OS ALIENS NUNCA SAEM DA TELA)
    context.clearRect(0, 0, board.width, board.height); 

    //ship ATUALIZANDO A POSIÇÃO DA NAVE
    context.drawImage(shipImg, ship.x, ship.y, ship.width, ship.height);

    //alien 
    for (let i = 0; i < alienArray.length; i++) {
        let alien = alienArray[i]; // ATUALIZA A POSIÇÃO DO CONJUNTO DE ALIENS
        if (alien.alive) {
            alien.x += alienVelocityX; // ATULIAZA A VELOCIDADE DOS ALIENS

            //if alien touches the borders
            // ATUALIZA A DIREÇÃO QUE OS ALIENS SE MOVEM (DIRETA OU ESQUERDA)
            if (alien.x + alien.width >= board.width || alien.x <= 0) {
                alienVelocityX *= -1;
                alien.x += alienVelocityX*2;

                //move all aliens up by one row
                // ALIENS VAO PRA BAIXO
                for (let j = 0; j < alienArray.length; j++) {
                    alienArray[j].y += alienHeight;
                }
            }
            // DESENHANDO OS ALINES NO CANVAS
            context.drawImage(alienImg, alien.x, alien.y, alien.width, alien.height);

            // SE ALIEN ENCONSTA NA NAVE ENTÃO ACABA O JOGO
            if (alien.y >= ship.y) {
                gameOver = true;
            }
        }
    }

    //bullets
    for (let i = 0; i < bulletArray.length; i++) {
        let bullet = bulletArray[i]; // ATUALIZA A POSIÇÃO DOS TIROS
        bullet.y += bulletVelocityY; // ATUALIZA A VELOCIDADE DOS TIROS
        context.fillStyle="green"; // DANDO A COR BRANCA PRA MUNIÇÃO
        context.fillRect(bullet.x, bullet.y, bullet.width, bullet.height); // PINTANDO A MUNIÇÃO DE BRANCO NO CANVAS 

        //bullet collision with aliens
        //LÓGICA DO TIRO MATANDO O ALIEN
        for (let j = 0; j < alienArray.length; j++) {
            let alien = alienArray[j];
            if (!bullet.used && alien.alive && detectCollision(bullet, alien)) {
                bullet.used = true;
                alien.alive = false;
                alienCount--;
                score += 100;
            }
        }
    }

    //clear bullets
    while (bulletArray.length > 0 && (bulletArray[0].used || bulletArray[0].y < 0)) {
        bulletArray.shift(); //removes the first element of the array
    }

    //next level
    if (alienCount == 0) {
        //increase the number of aliens in columns and rows by 1
        score += alienColumns * alienRows * 100; //bonus points :)
        alienColumns = Math.min(alienColumns + 1, columns/2 -2); //cap at 16/2 -2 = 6
        alienRows = Math.min(alienRows + 1, rows-4);  //cap at 16-4 = 12
        if (alienVelocityX > 0) {
            alienVelocityX += 0.2; //increase the alien movement speed towards the right
        }
        else {
            alienVelocityX -= 0.2; //increase the alien movement speed towards the left
        }
        alienArray = [];
        bulletArray = [];
        createAliens();
    }

    //score
    context.fillStyle="white";
    context.font="16px courier";
    context.fillText(score, 5, 20);
}

function moveShip(e) {
    if (gameOver) {
        return;
    }

    if (e.code == "ArrowLeft" && ship.x - shipVelocityX >= 0) {
        ship.x -= shipVelocityX; //move left one tile
    }
    else if (e.code == "ArrowRight" && ship.x + shipVelocityX + ship.width <= board.width) {
        ship.x += shipVelocityX; //move right one tile
    }
}

function createAliens() {
    for (let c = 0; c < alienColumns; c++) {
        for (let r = 0; r < alienRows; r++) {
            let alien = {
                img : alienImg,
                x : alienX + c*alienWidth,
                y : alienY + r*alienHeight,
                width : alienWidth,
                height : alienHeight,
                alive : true
            }
            alienArray.push(alien);
        }
    }
    alienCount = alienArray.length;
}

function shoot(e) {
    if (gameOver) {
        return;
    }

    if (e.code == "Space") {
        //shoot
        let bullet = {
            x : ship.x + shipWidth*15/32,
            y : ship.y,
            width : tileSize/8,
            height : tileSize/2,
            used : false
        }
        bulletArray.push(bullet);
    }
}

function detectCollision(a, b) {
    return a.x < b.x + b.width &&   //a's top left corner doesn't reach b's top right corner
           a.x + a.width > b.x &&   //a's top right corner passes b's top left corner
           a.y < b.y + b.height &&  //a's top left corner doesn't reach b's bottom left corner
           a.y + a.height > b.y;    //a's bottom left corner passes b's top left corner
}