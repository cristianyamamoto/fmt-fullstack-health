let botaoAdicionar = document.querySelector("#botaoAdicionar");
botaoAdicionar.addEventListener("click", adicionarTarefa);

let contadorTarefas = document.querySelector("#contadorTarefas");
contadorTarefas.innerHTML = document.querySelectorAll("#to-do-list ul li").length;

let tarefasArmazenadas = [];

window.onload = function (){
    addEventToCheckbox();
    addEventToDeleteButton();
    tarefasArmazenadas = getTarefas();
    carregarTarefas(tarefasArmazenadas);
}

function getTarefas(){
    const tarefas = localStorage.getItem("tarefas");
    if (!!tarefas){
        return JSON.parse(tarefas);
    } else {
        localStorage.setItem("tarefas", []);
        return [];
    }
}

function armazenarTarefaLocal(tarefa) {
    tarefasArmazenadas.push(tarefa);
    localStorage.setItem("tarefas", JSON.stringify(tarefasArmazenadas));
} 

function deletarTarefaLocal(idTarefa) {
    tarefasArmazenadas = tarefasArmazenadas.filter(t => {
        if(t.id != idTarefa){
            return true;
        }
    });
    localStorage.setItem("tarefas", JSON.stringify(tarefasArmazenadas));
}

function atualizarTarefaLocal(idTarefa){
    tarefasArmazenadas.find(t => {
        if(t.id == Number(idTarefa)){
            t.checked = !t.checked;
            return true;
        }
    });
    localStorage.setItem("tarefas", JSON.stringify(tarefasArmazenadas));
}

function addEventToCheckbox(listItem = undefined) {
    if (!listItem){
        let caixas = document.querySelectorAll('.caixaSelecaoTarefa');
        // Transforma os elementos do HTMLCollection em array e para cada elemento atribui um evento para mundança de estado
        Array.from(caixas).forEach(caixa => caixa.addEventListener('change', function(){
            this.parentNode.classList.toggle('checked');
            atualizarTarefaLocal(this.closest("li").id);
        }));
    } else {
        let caixa = listItem.querySelector(".caixaSelecaoTarefa")
        caixa.addEventListener('change', function(){
            this.parentNode.classList.toggle('checked');
            atualizarTarefaLocal(listItem.id);
        });
    }
}

function addEventToDeleteButton(listItem = undefined) {
    if (!listItem){
        let botoesDeletar = document.querySelectorAll('.delete-button');
        Array.from(botoesDeletar).forEach(botao => botao.addEventListener('click', function(){
            if (confirm("A tarefa será excluída permanentemente!")) {
                deletarTarefaLocal(this.closest("li").id);
                this.closest("li").remove();
                contadorTarefas.innerHTML = Number(contadorTarefas.innerHTML) - 1;
            } 
        }));
    } else {
        let botaoDeletar = listItem.querySelector('.delete-button');
        botaoDeletar.addEventListener('click', function(){
            if (confirm("A tarefa será excluída permanentemente!")) {
                deletarTarefaLocal(listItem.id);
                listItem.remove();
                contadorTarefas.innerHTML = Number(contadorTarefas.innerHTML) - 1;
            } 
        });
    }
}

function adicionarTarefa() {
    let tarefa = document.querySelector("#tarefa");
    if(tarefa.value){
        let listaDeAfazeres = document.querySelector("#to-do-list ul");

        // condição para checar se uma tarefa com mesma descrição já existe
        if (!Array.from(listaDeAfazeres.querySelectorAll("li"))
                .find(t => t.querySelector("span").innerText == tarefa.value)) {

            let id = 0;
            if (tarefasArmazenadas.length != 0){
                id = tarefasArmazenadas[tarefasArmazenadas.length - 1].id + 1;
            }
            let objetoTarefa = {
                id: id,
                value: tarefa.value,
                checked: false
            };
            carregarTarefas([objetoTarefa]);
            armazenarTarefaLocal(objetoTarefa);
            tarefa.value = "";

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

function carregarTarefas(tarefas){
    let listaDeAfazeres = document.querySelector("#to-do-list ul");
    for (t of tarefas){
        let listItem = document.createElement("li");
        listItem.id = t.id;
        listItem.innerHTML = 
        `<div class="flex-box">
            <div ${t.checked? "class=checked": ""}>
                <input type="checkbox" class="caixaSelecaoTarefa" ${t.checked? "checked": ""}>
                <span>${t.value}</span>
            </div>
            <button class="delete-button"><i class='bx bxs-trash'></i></button>
        </div>
        `;

        listaDeAfazeres.appendChild(listItem);
        addEventToCheckbox(listItem);
        addEventToDeleteButton(listItem);
        contadorTarefas.innerHTML = Number(contadorTarefas.innerHTML) + 1;
    }
}
