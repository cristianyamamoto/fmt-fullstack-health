let array = [
  {
    nome: "Rayane",
    sobrenome: "Cristina",
    idade: 21,
  },
  {
    nome: "Carlos",
    sobrenome: "Henrique",
    idade: 17,
  },
  {
    nome: "Julio",
    sobrenome: "Cesar",
    idade: 19,
  },
  {
    nome: "Camila",
    sobrenome: "Fernandes",
    idade: 18,
  },
  {
    nome: "Julia",
    sobrenome: "Fernandes",
    idade: 10,
  },
  {
    nome: "Bruno",
    sobrenome: "Albuquerque",
    idade: 31,
  },
  {
    nome: "Túlio",
    sobrenome: "Bastos",
    idade: 22,
  },
  {
    nome: "Cristiane",
    sobrenome: "Maria",
    idade: 41,
  },
];

// Ex. 1
const maioresIdade = array.filter((objeto) => objeto.idade >= 18);
console.log("Pessoas maiores de idade: ");
maioresIdade.forEach(objeto => console.log(objeto));


// Ex. 2
const primeiroMaiorTrinta = maioresIdade.find((objeto) => objeto.idade > 30);
document.querySelector("h1").innerHTML = primeiroMaiorTrinta.nome + " " + primeiroMaiorTrinta.sobrenome;


// Ex. 3
const menoresIdade = array.filter((objeto) => objeto.idade < 18);

console.log("Pessoas menores de idade: ");
menoresIdade.forEach(objeto => console.log(objeto));

menoresIdade.forEach((objeto) => objeto.anosParaMaioridade = 18 - objeto.idade);
console.log("Adicionando propriedade anos para maioridade: ");
menoresIdade.forEach(objeto => console.log(objeto));


// Ex. Extra
let user = {
    nome: "Cristian",
    sobrenome: "Yamamoto",
    dataNascimento : "06/05/1998",
    cpf: "111.111.111-11",
    possuiFilhos: false,
    calculaIdade() {
        const data = this.dataNascimento.split("/");
        let dia = data[0];
        let mes = data[1];
        let ano = data[2];

        let hoje = new Date();
        let birthDate = new Date(Number(ano), Number(mes) - 1, Number(dia));
        let idade = hoje.getFullYear() - birthDate.getFullYear();
        let diferenca = hoje.getMonth() - birthDate.getMonth();
        if (diferenca < 0 || (diferenca == 0 && hoje.getDate() < birthDate.getDate()) ) {
            idade--;
        }
        return idade;
    }
}

console.log(user.calculaIdade());
