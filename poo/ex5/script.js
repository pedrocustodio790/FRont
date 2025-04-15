let tarefas = []; // Inicializa um array vazio para armazenar as tarefas.

function adicionarTarefa() {
  const titulo = document.getElementById("titulo").value.trim(); // Obtém o título da tarefa e remove espaços em branco.
  const data = document.getElementById("data").value.trim(); // Obtém a data da tarefa e remove espaços em branco.
  const descricao = document.getElementById("descricao").value.trim(); // Obtém a descrição da tarefa e remove espaços em branco.

  // Verifica se todos os campos foram preenchidos corretamente.
  if (!titulo || !data || !descricao) {
    alert("Preencha todos os campos corretamente."); // Exibe um alerta se algum campo estiver vazio.
    return; // Interrompe a execução da função se os campos não estiverem preenchidos.
  }

  const tarefa = new Tarefa(titulo, data, descricao); // Cria uma nova instância de Tarefa com os dados fornecidos.
  tarefas.push(tarefa); // Adiciona a nova tarefa ao array de tarefas.
  atualizarLista(); // Atualiza a lista de tarefas exibida na interface.
  limparCampos(); // Limpa os campos de entrada após adicionar a tarefa.
}

function atualizarLista() {
  const lista = document.getElementById("listaTarefas"); // Obtém o elemento da lista de tarefas.
  lista.innerHTML = ""; // Limpa a lista existente para evitar duplicação.

  // Itera sobre cada tarefa no array de tarefas.
  tarefas.forEach((t, index) => {
    const li = document.createElement("li"); // Cria um novo elemento de lista.
    li.textContent = t.getDetalhes(); // Define o conteúdo do elemento de lista com os detalhes da tarefa.

    // Criando botão para concluir a tarefa
    const btnConcluir = document.createElement("button"); // Cria um botão para concluir a tarefa.
    btnConcluir.textContent = "Concluir"; // Define o texto do botão.
    btnConcluir.onclick = () => concluirTarefa(index); // Define a ação do botão ao ser clicado.

    // Criando botão para marcar como pendente
    const btnPendente = document.createElement("button"); // Cria um botão para marcar a tarefa como pendente.
    btnPendente.textContent = "Pendente"; // Define o texto do botão.
    btnPendente.onclick = () => marcarPendente(index); // Define a ação do botão ao ser clicado.

    // Criando botão para excluir a tarefa
    const btnExcluir = document.createElement("button"); // Cria um botão para excluir a tarefa.
    btnExcluir.textContent = "Excluir"; // Define o texto do botão.
    btnExcluir.onclick = () => excluirTarefa(index); // Define a ação do botão ao ser clicado.

    li.appendChild(btnConcluir); // Adiciona o botão de concluir ao elemento de lista.
    li.appendChild(btnPendente); // Adiciona o botão de pendente ao elemento de lista.
    li.appendChild(btnExcluir); // Adiciona o botão de excluir ao elemento de lista.
    lista.appendChild(li); // Adiciona o elemento de lista à lista de tarefas na interface.
  }); // Fecha o forEach.
} // Fecha a função atualizarLista.

function concluirTarefa(index) {
  tarefas[index].concluir(); // Marca a tarefa como concluída.
  atualizarLista(); // Atualiza a lista de tarefas exibida na interface.
}

function marcarPendente(index) {
  tarefas[index].pendente(); // Marca a tarefa como pendente.
  atualizarLista(); // Atualiza a lista de tarefas exibida na interface.
}

function excluirTarefa(index) {
  tarefas.splice(index, 1); // Remove a tarefa do array de tarefas pelo índice.
  atualizarLista(); // Atualiza a lista de tarefas exibida na interface.
}

function limparCampos() {
  document.getElementById("titulo").value = ""; // Limpa o campo de título.
  document.getElementById("data").value = ""; // Limpa o campo de data.
  document.getElementById("descricao").value = ""; // Limpa o campo de descrição.
}
