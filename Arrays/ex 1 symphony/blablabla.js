// @ts-ignore
const tarefas = []; // Declara um array vazio para armazenar as tarefas

function cadastrarTarefa() {
    // @ts-ignore
    const entradaTarefa = document.getElementById('tarefa').value.trim(); // Obtém o valor da entrada e remove espaços em branco
    if (entradaTarefa && !tarefas.includes(entradaTarefa)) { // Verifica se a entrada não está vazia e se a tarefa não foi cadastrada
        tarefas.push(entradaTarefa); // Adiciona a nova tarefa ao array
        atualizarListaTarefas(); // Atualiza a lista de tarefas exibida
        // @ts-ignore
        document.getElementById('tarefa').value = ''; // Limpa o campo de entrada após o cadastro
    } else if (tarefas.includes(entradaTarefa)) { // Verifica se a tarefa já está cadastrada
        alert('Tarefa já cadastrada.'); // Exibe um alerta se a tarefa já existir
    } else { // Caso a entrada esteja vazia
        alert('Por favor, insira um valor válido.'); // Solicita um valor válido ao usuário
    }
}

function atualizarListaTarefas() {
    const listaTarefas = document.getElementById('resultado'); // Obtém o elemento onde a lista de tarefas será exibida
    if (!listaTarefas) return; // Retorna se o elemento não existir

    listaTarefas.innerHTML = ''; // Limpa a lista antes de adicionar as tarefas

    const ul = document.createElement('ul'); // Cria um novo elemento de lista não ordenada
    tarefas.forEach((tarefa) => { // Itera sobre cada tarefa no array
        const li = document.createElement('li'); // Cria um novo item de lista
        li.textContent = tarefa; // Define o texto do item como a tarefa
        ul.appendChild(li); // Adiciona o item à lista
    });
    listaTarefas.appendChild(ul); // Adiciona a lista de tarefas ao elemento de resultado
}

function removerconteudo() {
    if (tarefas.length > 0) { // Verifica se há tarefas no array
        tarefas.pop(); // Remove a última tarefa do array
        atualizarListaTarefas(); // Atualiza a lista de tarefas exibida
    } else { // Caso não haja tarefas
        alert('Não há tarefas para remover.'); // Exibe um alerta informando que não há tarefas
    }
}