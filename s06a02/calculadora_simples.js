let botaoSoma = document.querySelector("#soma");
let botaoSubtrai = document.querySelector("#subtrai");
let botaoMultiplica = document.querySelector("#multiplica");
let botaoDivide = document.querySelector("#divide");

botaoSoma.addEventListener("click", sum);
botaoSubtrai.addEventListener("click", subtract);
botaoMultiplica.addEventListener("click", multiply);
botaoDivide.addEventListener("click", divide);

let number1;
let number2;

function updateNumbers() {
    number1 = Number(document.querySelector("#n1").value);
    number2 = Number(document.querySelector("#n2").value);
}

function sum(){
    updateNumbers();
    document.querySelector("#result").value = number1 + number2;
}

function subtract(){
    updateNumbers();
    document.querySelector("#result").value = number1 - number2;
}

function multiply(){
    updateNumbers();
    document.querySelector("#result").value = number1 * number2;
}

function divide(){
    updateNumbers();
    document.querySelector("#result").value = number1 / number2;
}
