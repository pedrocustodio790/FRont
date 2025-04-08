// @ts-ignore
const tarefas = [];

function cadastrarTarefa() {
    // @ts-ignore
    const entradaTarefa = document.getElementById('tarefa').value.trim();
    if (entradaTarefa && !tarefas.includes(entradaTarefa)) {
        tarefas.push(entradaTarefa);
        atualizarListaTarefas();
        // @ts-ignore
        document.getElementById('tarefa').value = ''; // Limpa o campo de entrada
    } else if (tarefas.includes(entradaTarefa)) {
        alert('Tarefa já cadastrada.');
    } else {
        alert('Por favor, insira um valor válido.');
    }
}

function atualizarListaTarefas() {
    const listaTarefas = document.getElementById('resultado');
    if (!listaTarefas) return;

    listaTarefas.innerHTML = ''; // Limpa a lista antes de adicionar as tarefas

    const ul = document.createElement('ul');
    tarefas.forEach((tarefa) => {
        const li = document.createElement('li');
        li.textContent = tarefa;
        ul.appendChild(li);
    });
    listaTarefas.appendChild(ul);
}

function removerconteudo() {
    if (tarefas.length > 0) {
        tarefas.pop();
        atualizarListaTarefas();
    } else {
        alert('Não há tarefas para remover.');
    }
}