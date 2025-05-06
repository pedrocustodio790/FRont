// @ts-ignore
const tarefa = []; // Declara um array vazio para armazenar as tarefas

function cadastrarTarefa() {
    // @ts-ignore
    const entradaTarefa = document.getElementById('entradaTarefa').value; // Obtém o valor da entrada de tarefa
    if(entradaTarefa && (!tarefa.includes(entradaTarefa)) ){ // Verifica se a entrada não está vazia e se a tarefa não foi cadastrada
        tarefa.push(entradaTarefa); // Adiciona a nova tarefa ao array
        atualizarListaTarefas(); // Atualiza a lista de tarefas exibida
        // @ts-ignore
        document.getElementById('entradaTarefa').value = ''; // Limpa o campo de entrada após o cadastro
    } 
    else if (tarefa.includes(entradaTarefa)){ // Verifica se a tarefa já está cadastrada
        alert('Tarefa já cadastrada.'); // Alerta o usuário que a tarefa já existe
    }
    else  {
        alert('Por favor, insira um valor válido.'); // Alerta o usuário para inserir um valor válido
    }
}

function atualizarListaTarefas() {
    const listaTarefas = document.getElementById('listaTarefas'); // Obtém o elemento da lista de tarefas
    //if (!listaTarefas) return; // Verifica se a lista de tarefas existe (código comentado)
    if(listaTarefas instanceof HTMLUListElement){ // Verifica se o elemento é uma lista não ordenada
        listaTarefas.innerHTML = ''; // Limpa a lista antes de adicionar as tarefas

        tarefa.forEach((tarefa) => { // Itera sobre cada tarefa no array
            const li = document.createElement('li'); // Cria um novo elemento de lista
            li.textContent = tarefa; // Define o texto do elemento de lista como a tarefa
            listaTarefas.appendChild(li); // Adiciona o elemento de lista à lista de tarefas
        });
    }
}

document.addEventListener('DOMContentLoaded', () => { // Aguarda o carregamento completo do DOM
    const botao = document.getElementById('botao'); // Obtém o botão de cadastro
    
    if (botao instanceof HTMLButtonElement) { // Verifica se o elemento é um botão
        botao.addEventListener('click', cadastrarTarefa); // Adiciona um evento de clique ao botão para cadastrar a tarefa
    }
});