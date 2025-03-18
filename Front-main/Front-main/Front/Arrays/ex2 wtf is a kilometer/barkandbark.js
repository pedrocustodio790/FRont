const tarefasSet = new Set();

function cadastrarTarefa(entradaTarefa) {
  if (entradaTarefa) {
    if (!tarefasSet.has(entradaTarefa)) {
      tarefasSet.add(entradaTarefa);
      exibirConteudo();
    } else {
      alert('Tarefa já cadastrada.');
    }
  } else {
    alert('Por favor, insira um valor válido.');
  }
}

function removerTarefa(tarefa) {
  if (tarefasSet.has(tarefa)) {
    tarefasSet.delete(tarefa);
    exibirConteudo();
  }
}

function exibirConteudo() {
  let saida = document.getElementById('resultado');
  if (saida) {
    // Limpa o conteúdo anterior
    while (saida.firstChild) {
      saida.removeChild(saida.firstChild);
    }
    // Adiciona cada tarefa como um novo parágrafo com botão de remoção
    tarefasSet.forEach(tarefa => {
      let p = document.createElement('p');
      p.textContent = tarefa;

      let botaoRemover = document.createElement('button');
      botaoRemover.textContent = 'Remover';
      botaoRemover.addEventListener('click', () => removerTarefa(tarefa));

      p.appendChild(botaoRemover);
      saida.appendChild(p);
    });
  }
}

const configurarCadastroDeTarefasEx2 = () => {
  let entradaTarefa = document.getElementById('tarefa');
  let botaoCadastrarTarefa = document.getElementById('cadastrarTarefaBtn');

  //prettier-ignore
  if((botaoCadastrarTarefa instanceof HTMLButtonElement) && (entradaTarefa instanceof HTMLInputElement)){
    botaoCadastrarTarefa.addEventListener('click',() =>{
            cadastrarTarefa(entradaTarefa.value);
        })
    }
};

document.addEventListener('DOMContentLoaded', configurarCadastroDeTarefasEx2);