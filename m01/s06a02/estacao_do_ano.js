let date = new Date();
let month = date.getMonth() + 1;
let day = date.getDate();

console.log(month);
console.log(day);

const canvas = document.querySelector("#estacao");
const context = canvas.getContext("2d");
context.canvas.width = window.innerWidth;
context.canvas.height = window.innerHeight;

const imagemEstacao = new Image();
let estacao = estacaoDeHoje(month, day);
imagemEstacao.src = `imgs/${estacao}.jpg`;
imagemEstacao.onload = function () {
    document.querySelector("header h1").innerHTML += estacao;
    context.drawImage(imagemEstacao, 0, 0);
};

function estacaoDeHoje(month, day) {
    if (month == 12 && day >= 22 || 
        month == 03 && day <= 21 ||
        month == 01 ||
        month == 02
        ) {
        return "verao"
    }
    else if (
        month == 03 && day >= 22 || 
        month == 06 && day <= 21 ||
        month == 04 ||
        month == 05
        ) {
        return "outono"   
    }
    else if (
        month == 06 && day >= 22 || 
        month == 09 && day <= 21 ||
        month == 07 ||
        month == 08
        ){
        return "inverno"
    }
    else {
        return "primavera"
    }
}