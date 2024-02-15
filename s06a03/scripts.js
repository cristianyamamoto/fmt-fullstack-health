// let botaoEnviar = document.querySelector("#botaoEnviar");
// botaoEnviar.addEventListener("click", enviarDados);

let formularioCadastro = document.querySelector("#formularioCadastro");
formularioCadastro.addEventListener("submit", enviarDados);

// validar confirmação de senha
let senha = document.getElementById("senha")
let confirmarSenha = document.getElementById("confirmarSenha");
senha.addEventListener("change", validaSenha);
confirmarSenha.addEventListener("change", validaSenha);

// atualizar campo de quantidade de filhos
let temFilhos = document.querySelector("#temFilhos");
temFilhos.addEventListener("change", habilitaInputQtdFilhos);


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
        "Nome: " + dados[0] +
        "\nE-mail: " + dados[1] +
        // "\nsenha: " + dados[2] + 
        "\nData de Nascimento: " + dados[4] +
        "\nTem filhos? " + dados[5] +
        "\nQuantidade de filhos: " + dados[6]
    );

    formularioCadastro.reset();
}

function validaSenha(){
    if(senha.value != confirmarSenha.value) {
        confirmarSenha.setCustomValidity("Senhas não são iguais!");
    } else {
        confirmarSenha.setCustomValidity('');
    }
}

function habilitaInputQtdFilhos () {
    let qtdFilhos = document.querySelector("#qtdFilhos");
    if (temFilhos.checked) {
        qtdFilhos.disabled = false;
        qtdFilhos.value = "1";
    } else {
        qtdFilhos.disabled = true;
        qtdFilhos.value = "0";
    }
}