const tarefasSet = new Set(); // Cria um novo conjunto para armazenar tarefas

function cadastrarTarefa(entradaTarefa) {
  if (entradaTarefa) { // Verifica se a entrada da tarefa não está vazia
    if (!tarefasSet.has(entradaTarefa)) { // Verifica se a tarefa já não está cadastrada
      tarefasSet.add(entradaTarefa); // Adiciona a nova tarefa ao conjunto
      exibirConteudo(); // Atualiza a exibição das tarefas
    } else {
      alert('Tarefa já cadastrada.'); // Alerta se a tarefa já existe
    }
  } else {
    alert('Por favor, insira um valor válido.'); // Alerta se a entrada for inválida
  }
}

function removerTarefa(tarefa) {
  if (tarefasSet.has(tarefa)) { // Verifica se a tarefa existe no conjunto
    tarefasSet.delete(tarefa); // Remove a tarefa do conjunto
    exibirConteudo(); // Atualiza a exibição das tarefas
  }
}

function exibirConteudo() {
  let saida = document.getElementById('resultado'); // Obtém o elemento onde as tarefas serão exibidas
  if (saida) { // Verifica se o elemento existe
    // Limpa o conteúdo anterior
    while (saida.firstChild) {
      saida.removeChild(saida.firstChild); // Remove todos os filhos do elemento
    }
    // Adiciona cada tarefa como um novo parágrafo com botão de remoção
    tarefasSet.forEach(tarefa => {
      let p = document.createElement('p'); // Cria um novo parágrafo para a tarefa
      p.textContent = tarefa; // Define o texto do parágrafo como a tarefa

      let botaoRemover = document.createElement('button'); // Cria um botão para remover a tarefa
      botaoRemover.textContent = 'Remover'; // Define o texto do botão
      botaoRemover.addEventListener('click', () => removerTarefa(tarefa)); // Adiciona evento de clique para remover a tarefa

      p.appendChild(botaoRemover); // Adiciona o botão ao parágrafo
      saida.appendChild(p); // Adiciona o parágrafo ao elemento de saída
    });
  }
}

const configurarCadastroDeTarefasEx2 = () => {
  let entradaTarefa = document.getElementById('tarefa'); // Obtém o campo de entrada da tarefa
  let botaoCadastrarTarefa = document.getElementById('cadastrarTarefaBtn'); // Obtém o botão de cadastrar tarefa

  //prettier-ignore
  if((botaoCadastrarTarefa instanceof HTMLButtonElement) && (entradaTarefa instanceof HTMLInputElement)){ // Verifica se os elementos são do tipo correto
    botaoCadastrarTarefa.addEventListener('click',() =>{ // Adiciona evento de clique ao botão
            cadastrarTarefa(entradaTarefa.value); // Chama a função para cadastrar a tarefa com o valor da entrada
        })
    }
};

document.addEventListener('DOMContentLoaded', configurarCadastroDeTarefasEx2); // Adiciona evento para configurar o cadastro de tarefas quando o DOM estiver carregado