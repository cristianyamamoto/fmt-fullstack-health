let valorInicial = Number(prompt("Qual é o valor inicial?"));
let raiz = Number(prompt("Qual o valor da raiz?"));

function progressaoAritmetica(valorInicial, raiz){
    progressao = [];
    progressao[0] = valorInicial;
    for (i = 0; i < 9; i++){
        progressao[i+1] = progressao[i] + raiz;
    }
    return progressao;
}

console.log(progressaoAritmetica(valorInicial, raiz));