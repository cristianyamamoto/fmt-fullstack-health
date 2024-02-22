let clientes = [];

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

}

clientes.push(new Cliente("Cristian Yamamoto", 1, 1));

let formularioCadastro = document.querySelector("#formularioCadastro");
formularioCadastro.addEventListener("submit", cadastrarCliente);

function cadastrarCliente(event){
    let dadosCliente = document.querySelectorAll("#formularioCadastro input");
    // console.log(dadosCliente);

    let novoCliente = new Cliente(
        dadosCliente[0].value,         // nome
        Number(dadosCliente[1].value), // conta
        Number(dadosCliente[2].value), // saldo
    );

    clientes.push(novoCliente);
    console.log(clientes);

    formularioCadastro.reset();
    event.preventDefault();
}

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