// criando classe Cliente
class Cliente {
    #saldo;
    #conta;
    constructor(nome, conta, saldo){
        this._nome = nome; 
        this.#conta = conta;
        this.#saldo = saldo;
    }

    get conta(){
        return this.#conta;
    }

    get saldo(){
        return this.#saldo;
    }

    sacar(qtdSaque){
        if (this.#saldo >= qtdSaque) {
            this.#saldo -= qtdSaque;
            alert(`Valor do saque: ${qtdSaque}`);
        } else {
            alert("Conta não possui saldo suficiente!")
        }
    }

    depositar(qtdDeposito){
        this.#saldo += qtdDeposito;
        alert(`Valor do depósito: ${qtdDeposito}`);
    }

}

// lista de objetos/clientes (instancias da classe Cliente)
let clientes = [];
// instanciando primeiro cliente e adicionando a lista
const primeiroCliente = new Cliente("Cristian Yamamoto", 0, 500);
clientes.push(primeiroCliente);
atulizaListasSuspensas(primeiroCliente);
console.log(clientes);

// adicionando evento para formulario de cadastro do cliente
let formularioCadastro = document.querySelector("#formularioCadastro");
formularioCadastro.addEventListener("submit", cadastrarCliente);

// funcao para cadastrar novo cliente (instanciando e adicionando a lista de clientes)
function cadastrarCliente(event){
    event.preventDefault();

    let dadosCliente = document.querySelectorAll("#formularioCadastro input");
    let novoCliente = new Cliente(
        dadosCliente[0].value,         // nome
        Number(dadosCliente[1].value), // conta
        Number(dadosCliente[2].value), // saldo
    );

    clientes.push(novoCliente);
    atulizaListasSuspensas(novoCliente);
    formularioCadastro.reset();

    console.log(clientes);
}

// atualizando listas suspensas (adicionando contas na lista de dropdown)
function atulizaListasSuspensas(cliente) {
    let dropdownLists = document.querySelectorAll("select");
    for(select of dropdownLists){
        let newOption = document.createElement("option");
        newOption.value = cliente.conta;
        newOption.innerHTML = cliente._nome + " - Conta " + cliente.conta;
        select.appendChild(newOption);
    }
    
}

// adicionando evento para o campo de numero da conta, validando se ja existe o numero
let conta = document.querySelector("#conta");
conta.addEventListener("change", validaConta);
function validaConta(){
    for(i in clientes){
        if (clientes[i].conta == Number(conta.value)){
            conta.setCustomValidity("Esse número de conta já existe!");
        } else {
            conta.setCustomValidity('');
        }
    }
}

// adicionando evento para consulta de saldo
const contasSaldo = document.querySelector("#contasSaldo");
let contaParaConsulta = contasSaldo.querySelector("option:checked");
contasSaldo.addEventListener("change", 
    () => {
        contaParaConsulta = contasSaldo.querySelector("option:checked")
        let cliente = clientes.find((cliente) => cliente.conta == contaParaConsulta.value);
        let consultaSaldo = document.querySelector("#consultaSaldo");
        if (contaParaConsulta.value !== "selecioneConta"){
            consultaSaldo.value = cliente.saldo;
        } else {
            consultaSaldo.value = "";
        }
    }
);

// adicionanto evento para formulario de saque
const contasSaque = document.querySelector("#contasSaque");
let contaParaSaque = contasSaque.querySelector("option:checked");
contasSaque.addEventListener("change",() => contaParaSaque = contasSaque.querySelector("option:checked"));

let formularioSaque = document.querySelector("#formularioSaque"); 
formularioSaque.addEventListener("submit", 
    (event) => {
        event.preventDefault();
        if (contaParaSaque.value !== "selecioneConta"){
            let cliente = clientes.find((cliente) => cliente.conta == contaParaSaque.value);
            const qtdSaque = document.querySelector("#qtdSaque")
            cliente.sacar(Number(qtdSaque.value));
            console.log(cliente);
            qtdSaque.value = "";
        } else {
            alert("Selecione uma conta para realizar o saque!")
        }
    }
);

// adicionanto evento para formulario de deposito
const contasDeposito = document.querySelector("#contasDeposito");
let contaParaDeposito = contasDeposito.querySelector("option:checked");
contasDeposito.addEventListener("change",() => contaParaDeposito = contasDeposito.querySelector("option:checked"));

let formularioDeposito = document.querySelector("#formularioDeposito"); 
formularioDeposito.addEventListener("submit", 
    (event) => {
        event.preventDefault();
        if (contaParaDeposito.value !== "selecioneConta"){
            let cliente = clientes.find((cliente) => cliente.conta == contaParaDeposito.value);
            const qtdDeposito = document.querySelector("#qtdDeposito");
            cliente.depositar(Number(qtdDeposito.value));
            console.log(cliente);
            qtdDeposito.value = "";
        } else {
            alert("Selecione uma conta para realizar o depósito!")
        }
    }
);
