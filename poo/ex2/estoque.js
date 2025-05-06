const produtos = []; // Array para armazenar os produtos cadastrados

function cadastrarProduto(nome, quantidade, preco) {
  const produto = new Produto(nome, quantidade, preco); // Cria uma nova instância de Produto
  produtos.push(produto); // Adiciona o produto ao array de produtos
  atualizarLista(); // Atualiza a lista de produtos exibida
}

function atualizarEstoque(nome, operacao, quantidade) {
  const produto = produtos.find(p => p.nome === nome); // Busca o produto pelo nome no array
  if (produto) { // Verifica se o produto foi encontrado
    if (operacao === "adicionar") { // Se a operação for adicionar
      produto.adicionar(quantidade); // Adiciona a quantidade ao estoque do produto
    } else if (operacao === "remover") { // Se a operação for remover
      produto.remover(quantidade); // Remove a quantidade do estoque do produto
    }
    atualizarLista(); // Atualiza a lista de produtos exibida
  } else {
    alert("Produto não encontrado."); // Exibe um alerta se o produto não for encontrado
  }
}

function atualizarLista() {
  const lista = document.getElementById("listaProdutos"); // Obtém o elemento da lista de produtos no DOM
  lista.innerHTML = ""; // Limpa a lista atual

  produtos.forEach(p => { // Itera sobre cada produto no array
    const li = document.createElement("li"); // Cria um novo elemento de lista
    li.textContent = `${p.nome} - Quantidade: ${p.quantidade} - Preço Unitário: R$ ${p.precoUnitario.toFixed(2)} - Total: R$ ${p.calcularValorTotal().toFixed(2)}`; // Define o texto do item da lista
    lista.appendChild(li); // Adiciona o item da lista ao elemento da lista no DOM
  });
}