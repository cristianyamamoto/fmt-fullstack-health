let botaoAdicionar = document.querySelector("#botaoAdicionar");
botaoAdicionar.addEventListener("click", adicionarTarefa);

let tarefa = document.querySelector("#tarefa");
tarefa.setCustomValidity("Preencha o campo da tarefa!");

let contadorTarefas = document.querySelector("#contadorTarefas");
contadorTarefas.innerHTML = document.querySelectorAll("#to-do-list ul li").length;

function adicionarTarefa() {
    if(tarefa.value){
        let listaDeAfazeres = document.querySelector("#to-do-list ul");

        if (!Array.from(listaDeAfazeres.querySelectorAll("li"))
                .find(t => t.querySelector("span").innerText == tarefa.value)) {

            let listItem = document.createElement("li");
            listItem.id = "tarefa-" + (listaDeAfazeres.querySelectorAll("li").length + 1);
            listItem.innerHTML = 
            `<div class="flex-box">
                <div>
                    <input type="checkbox" class="caixaSelecaoTarefa">
                    <span>${tarefa.value}</span>
                </div>
                <button class="delete-button"><i class='bx bxs-trash'></i></button>
            </div>
            `;
            listaDeAfazeres.appendChild(listItem);

            let caixa = listItem.querySelector(".caixaSelecaoTarefa")
            caixa.addEventListener('change', function(){
                this.parentNode.classList.toggle('checked');
            });
            // caixa.onchange = function() {
            //     caixa.parentNode.classList.toggle('checked');
            // };
            
            let botaoDeletar = listItem.querySelector('.delete-button');
            botaoDeletar.addEventListener('click', function(){
                if (confirm("A tarefa será excluída permanentemente!")) {
                    this.closest("li").remove();
                    contadorTarefas.innerHTML = Number(contadorTarefas.innerHTML) - 1;
                    // contadorTarefas.innerHTML = document.querySelectorAll("#to-do-list ul li").length;
                } 
            });

            tarefa.value = "";
            contadorTarefas.innerHTML = Number(contadorTarefas.innerHTML) + 1;
            // contadorTarefas.innerHTML = document.querySelectorAll("#to-do-list ul li").length;
        }
        else {
            tarefa.setCustomValidity("Tarefa já existe!");
            tarefa.reportValidity();
        }
    } else {
        tarefa.setCustomValidity("Preencha o campo da tarefa!");
        tarefa.reportValidity();
    }
    tarefa.focus();
}

let caixas = document.querySelectorAll('.caixaSelecaoTarefa');
// Transforma os elementos do HTMLCollection em array e para cada elemento atribui um evento para mundança de estado
Array.from(caixas).forEach(caixa => caixa.addEventListener('change', function(){
    this.parentNode.classList.toggle('checked');
}));

let botoesDeletar = document.querySelectorAll('.delete-button');
Array.from(botoesDeletar).forEach(botao => botao.addEventListener('click', function(){
    if (confirm("A tarefa será excluída permanentemente!")) {
        this.closest("li").remove();
        contadorTarefas.innerHTML = Number(contadorTarefas.innerHTML) - 1;
        // contadorTarefas.innerHTML = document.querySelectorAll("#to-do-list ul li").length;
    } 
}));
