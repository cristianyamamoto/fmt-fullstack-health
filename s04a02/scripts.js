let valorInicial = Number(prompt("Qual é o valor inicial?"));
let raiz = Number(prompt("Qual o valor da raiz?"));

function progressaoAritmetica(valorInicial, raiz){
    progressao = [];
    progressao[0] = valorInicial;
    for (i = 0; i < 10; i++){
        console.log(progressao[i]);
        progressao[i+1] = progressao[i] + raiz;
    }
}

progressaoAritmetica(valorInicial, raiz);