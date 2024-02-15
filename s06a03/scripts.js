let botaoEnviar = document.querySelector("#botaoEnviar");
botaoEnviar.addEventListener("click", enviarDados);

// apenas logar no console (ou alert) os dados digitados pelo usuário, e limpar todos os campos.
function enviarDados() {
    let dadosFormulario = document.getElementsByTagName("input");
    console.log(dadosFormulario);

    let dados = [];

    for (elemento of dadosFormulario){

        if(elemento.type != "checkbox"){
            dados.push(elemento.value);
        } else {
            dados.push(elemento.checked? 'Sim' : 'Não');
        }
    }

    console.log(dados);

    alert(
        "Nome:" + dados[0] +
        "\nE-mail: " + dados[1] +
        "\nsenha: " + dados[2] + 
        "\nData de Nascimento: " + dados[3] +
        "\nTem filhos? " + dados[4] +
        "\nQuantidade de filhos: " + dados[5]
    );

}

let temFilhos = document.querySelector("#temFilhos");
temFilhos.addEventListener("change", habilitaInputQtdFilhos);

function habilitaInputQtdFilhos () {
    let qtdFilhos = document.querySelector("#qtdFilhos");
    if (temFilhos.checked) {
        qtdFilhos.disabled = false;
    } else {
        qtdFilhos.disabled = true;
    }
}