// Ex. 1
const idades = [21, 17, 19, 18, 10, 31, 22, 41, 5];
const maioresIdade = idades.filter((idade) => idade >= 18);

console.log("Lista maiores de idade:", maioresIdade);

// Ex. 2
console.log("Primeiro acima de 30:", maioresIdade.find((idade) => idade > 30));

// Ex. 3
const menoresIdade = idades.filter((idade) => idade < 18);
console.log("Lista menores de idade:", menoresIdade);
const anosParaMaioridade = menoresIdade.map((idade) => 18 - idade);
console.log("Lista anos para maioridade:", anosParaMaioridade);

// Ex. 4
const listaReduce = [1, 22, 31, 40, 3, 5];
const maiorNumero = listaReduce.reduce(
    (anterior, atual, index, arrayInicial) => {
        // console.log(index);
        // console.log(arrayInicial);
        if (anterior > atual) {
            return anterior;
        } else {
            return atual;
        }
    }, 0
);
console.log("Maior número da lista:", maiorNumero);