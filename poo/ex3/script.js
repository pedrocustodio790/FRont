const pedido = new Pedido(); // Cria uma nova instância da classe Pedido

function adicionarItem() {
  const nome = document.getElementById("nomeItem").value; // Obtém o valor do campo de entrada do nome do item
  const quantidade = parseInt(document.getElementById("quantidade").value); // Converte o valor da quantidade para um número inteiro
  const preco = parseFloat(document.getElementById("preco").value); // Converte o valor do preço para um número de ponto flutuante

  // Verifica se os campos estão preenchidos corretamente
  if (!nome || quantidade <= 0 || preco <= 0) {
    alert("Preencha os campos corretamente."); // Exibe um alerta se os campos não estiverem corretos
    return; // Interrompe a execução da função
  }

  pedido.adicionarItem(nome, quantidade, preco); // Adiciona o item ao pedido
  atualizarResumo(); // Atualiza o resumo do pedido
}

function atualizarResumo() {
  const lista = document.getElementById("resumoPedido"); // Obtém o elemento da lista onde o resumo será exibido
  lista.innerHTML = ""; // Limpa a lista antes de adicionar novos itens

  // Itera sobre os itens do pedido e os adiciona à lista
  pedido.itens.forEach((item, index) => {
    const li = document.createElement("li"); // Cria um novo elemento de lista
    li.textContent = `${item.nome} - ${item.quantidade} x R$ ${item.preco.toFixed(2)}`; // Define o texto do item
    lista.appendChild(li); // Adiciona o item à lista
  });

  const total = pedido.calcularTotal(); // Calcula o total do pedido
  document.getElementById("totalPedido").textContent = `Total com 10%: R$ ${total.toFixed(2)}`; // Exibe o total formatado
}

function finalizarPedido() {
  // Verifica se não há itens no pedido
  if (pedido.itens.length === 0) {
    alert("Nenhum item no pedido."); // Exibe um alerta se não houver itens
    return; // Interrompe a execução da função
  }

  const confirmacao = confirm("Deseja finalizar o pedido?"); // Solicita confirmação para finalizar o pedido
  if (confirmacao) {
    // Se o usuário confirmar
    alert("Pedido Finalizado!\n\n" + pedido.obterResumo() + `\n\nTotal com 10%: R$ ${pedido.calcularTotal().toFixed(2)}`); // Exibe o resumo do pedido e o total
    pedido.limparPedido(); // Limpa o pedido
    atualizarResumo(); // Atualiza o resumo do pedido
  }
}