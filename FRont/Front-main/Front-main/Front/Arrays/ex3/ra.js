// @ts-ignore
const tarefa = [];

function cadastrarTarefa() {
    // @ts-ignore
    const entradaTarefa = document.getElementById('entradaTarefa').value;
    if(entradaTarefa && (!tarefa.includes(entradaTarefa)) ){
        tarefa.push(entradaTarefa);
        atualizarListaTarefas();
        // @ts-ignore
        document.getElementById('entradaTarefa').value = ''; // Limpa o campo de entrada
    } 
    else if (tarefa.includes(entradaTarefa)){
        alert('Tarefa já cadastrada.');
    }
    else  {
        alert('Por favor, insira um valor válido.');
    }
}

function atualizarListaTarefas() {
    const listaTarefas = document.getElementById('listaTarefas');
    //if (!listaTarefas) return;
    if(listaTarefas instanceof HTMLUListElement){
    listaTarefas.innerHTML = ''; // Limpa a lista antes de adicionar as tarefas

        tarefa.forEach((tarefa) => {
            const li = document.createElement('li');
            li.textContent = tarefa;
            listaTarefas.appendChild(li);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const botao = document.getElementById('botao');
    
    if (botao instanceof HTMLButtonElement) {
        botao.addEventListener('click', cadastrarTarefa);
    }
});
