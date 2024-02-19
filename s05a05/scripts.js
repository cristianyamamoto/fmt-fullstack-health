let botaoAdicionar = document.querySelector("#botaoAdicionar");
botaoAdicionar.addEventListener("click", adicionarTarefa);

function adicionarTarefa() {
    let tarefa = document.querySelector("#tarefa").value;
    if(tarefa){
        let listaDeAfazeres = document.querySelector("#to-do-list ul");

        console.log(listaDeAfazeres.querySelectorAll("li").length);

        let listItem = document.createElement("li");
        listItem.id = "tarefa-" + (listaDeAfazeres.querySelectorAll("li").length + 1);
        listItem.innerHTML = 
        `<div class="flex-box">
            <div>
                <input type="checkbox" class="caixaSelecaoTarefa">
                <span>${tarefa}</span>
            </div>
            <button class="delete-button"><i class='bx bxs-trash'></i></button>
        </div>
        `;
        listaDeAfazeres.appendChild(listItem);
        // console.log(listaDeAfazeres);

        let caixa = listItem.querySelector(".caixaSelecaoTarefa")
        caixa.addEventListener('change', function(){
            this.parentNode.classList.toggle('checked');
        });
        
        let botaoDeletar = listItem.querySelector('.delete-button');
        botaoDeletar.addEventListener('click', function(){
            this.closest("li").remove();
        });

        document.querySelector("#tarefa").value = "";
    }
}

let caixas = document.querySelectorAll('.caixaSelecaoTarefa');
// Transforma os elementos do HTMLCollection em array e para cada elemento atribui um evento para mundança de estado
Array.from(caixas).forEach(caixa => caixa.addEventListener('change', function(){
    this.parentNode.classList.toggle('checked');
}));

let botoesDeletar = document.querySelectorAll('.delete-button');
Array.from(botoesDeletar).forEach(botao => botao.addEventListener('click', function(){
    this.closest("li").remove();
}));
