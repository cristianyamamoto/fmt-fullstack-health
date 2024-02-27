import {Cliente, Conta} from "./Conta.js";

const tblClientes = [];
const tblContas = [];
let camposFormVisiveis = []
let opcao; // 1- cadastro; 2- saldo; 3- deposito; 4- saque.

const btnCadastro = document.querySelector("#btn-cadastrar");
const btnSaldo = document.querySelector("#btn-ver-saldo");
const btnDeposito = document.querySelector("#btn-depositar");
const btnSaque = document.querySelector("#btn-sacar");
const formBase = document.querySelector("#form-base");
const btnSubmitForm = document.createElement("button");
btnSubmitForm.type = "submit";
btnSubmitForm.innerHTML = "Enviar";

formBase.addEventListener("submit", definirAcao);

function criarLabelsParaInputs(elements) {
    for(const e of elements){
        console.log(e);
        if(e instanceof HTMLInputElement){
            let newLabel = document.createElement("label");
            newLabel.setAttribute("for", e.id);
            const labelNames = {
                "inputNome": "Nome: ",
                "inputCpf": "CPF: ",
                "inputNumConta": "Número da Conta: ",
                "inputSaldo": "Saldo: ",
                "inputValor": "Valor: "
            }
            newLabel.innerHTML = labelNames[e.id];
            e.parentNode.insertBefore(newLabel, e);
            e.insertAdjacentElement("afterEnd", document.createElement("br"));
        }
    }
}

function exibirFormCadastro() {
    resetaCampos();
    opcao = 1;
    const inputNome = document.createElement("input");
    const inputCpf = document.createElement("input");
    const inputNumConta = document.createElement("input");
    const inputSaldoInicial = document.createElement("input");

    camposFormVisiveis = [inputCpf, inputNome, inputNumConta, inputSaldoInicial, btnSubmitForm];

    inputNome.type = "text";
    inputNome.id = "inputNome";
    inputCpf.type = "text";
    inputCpf.id = "inputCpf";
    inputNumConta.type = "number";
    inputNumConta.id = "inputNumConta";
    inputSaldoInicial.type = "number";
    inputSaldoInicial.id = "inputSaldo";

    formBase.appendChild(inputNome);
    formBase.appendChild(inputCpf);
    formBase.appendChild(inputNumConta);
    formBase.appendChild(inputSaldoInicial);
    formBase.appendChild(btnSubmitForm);
    criarLabelsParaInputs(camposFormVisiveis);
}

function exibirFormSaldo() {
    resetaCampos();
    opcao = 2;
    const inputNumConta = document.createElement("input");
    camposFormVisiveis = [inputNumConta, btnSubmitForm];
    inputNumConta.type = "number";
    inputNumConta.id = "inputNumConta";
    formBase.appendChild(inputNumConta);
    formBase.appendChild(btnSubmitForm);
    criarLabelsParaInputs(camposFormVisiveis);
}

function exibirFormDeposito() {
    resetaCampos();
    opcao = 3;
    const inputNumConta = document.createElement("input");
    const inputValor = document.createElement("input");
    camposFormVisiveis = [inputNumConta, btnSubmitForm, inputValor];
    inputNumConta.type = "number";
    inputNumConta.id = "inputNumConta";
    inputValor.type = "number";
    inputValor.id = "inputValor";
    formBase.appendChild(inputNumConta);
    formBase.appendChild(inputValor);
    formBase.appendChild(btnSubmitForm);
    criarLabelsParaInputs(camposFormVisiveis);
}

function exibirFormSaque() {
    resetaCampos();
    opcao = 4;
    const inputNumConta = document.createElement("input");
    const inputValor = document.createElement("input");
    camposFormVisiveis = [inputNumConta, btnSubmitForm, inputValor];
    inputNumConta.type = "number";
    inputNumConta.id = "inputNumConta";
    inputValor.type = "number";
    inputValor.id = "inputValor";
    formBase.appendChild(inputNumConta);
    formBase.appendChild(inputValor);
    formBase.appendChild(btnSubmitForm);
    criarLabelsParaInputs(camposFormVisiveis);
}

function cadastrar() {
    const inputNome = document.querySelector("#inputNome");
    const inputCpf = document.querySelector("#inputCpf");
    const inputNumConta = document.querySelector("#inputNumConta");
    const inputSaldoInicial = document.querySelector("#inputSaldo");

    const cpfInserido = inputCpf.value;
    const numContaInserido = Number(inputNumConta.value);

    const cliente = new Cliente(inputNome.value, cpfInserido);
    const conta = new Conta(numContaInserido, cliente, inputSaldoInicial.value);

    if (tblClientes.some(cliente => cliente.cpf === cpfInserido)) {
        alert("CPF já cadastrado.");
    } else if (tblContas.some(conta => conta.numeroConta === numContaInserido)) {
        alert("Numero de conta já cadastrado.");
    } else {
        tblClientes.push(cliente);
        tblContas.push(conta);
        resetaCampos();
    }

    console.log(tblClientes);
    console.log(tblContas);
}

function verSaldo() {
    const conta = getContaInput();

    if (conta) {
        alert(conta.saldo);
        resetaCampos();
    }
}

function depositar() {
    const conta = getContaInput();
    if (conta) {
        const valorInserido = document.querySelector("#inputValor").value;
        if (valorInserido) {
            conta.depositar(valorInserido);
            resetaCampos();
            console.log(tblContas);
        } else {
            alert("Insira um valor");
        }
    }
}

function sacar() {
    const conta = getContaInput();
    if (conta) {
        const valorInserido = document.querySelector("#inputValor").value;
        if (valorInserido) {
            conta.sacar(valorInserido);
            resetaCampos();
            console.log(tblContas);
        } else {
            alert("Insira um valor");
        }
    }
}

function definirAcao(event) {
    event.preventDefault();
    switch (opcao) {
        case 1:
            cadastrar();
            break;
        case 2:
            verSaldo();
            break;
        case 3:
            depositar();
            break;
        case 4:
            sacar();
            break;
        default:
            console.log("Opção inválida.");
    }
}

btnCadastro.addEventListener("click", exibirFormCadastro);
btnSaldo.addEventListener("click", exibirFormSaldo);
btnDeposito.addEventListener("click", exibirFormDeposito);
btnSaque.addEventListener("click", exibirFormSaque);

function resetaCampos() {
    camposFormVisiveis.forEach(campo => {
        if(campo instanceof HTMLInputElement){
            formBase.removeChild(campo.previousSibling);
            formBase.removeChild(campo.nextSibling);
        }
        formBase.removeChild(campo);
    });

    camposFormVisiveis = [];
}

function getContaInput() {
    const inputNumConta = document.querySelector("#inputNumConta");

    if (inputNumConta.value) {
        const contaEncontrada = tblContas.find(conta => conta.numeroConta == inputNumConta.value);
        if (contaEncontrada) {
            return contaEncontrada;
        } else {
            alert("Não há uma conta com esse número.");
        }
    } else {
        alert("Insira um valor para o número da conta.");
    }
}
