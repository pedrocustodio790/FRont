const carrinho = new Carrinho(); // Cria uma nova instância do carrinho de compras

function adicionarProduto() {
  const nome = document.getElementById("produtoNome").value; // Obtém o nome do produto do campo de entrada
  const preco = parseFloat(document.getElementById("produtoPreco").value); // Obtém o preço do produto e converte para número decimal
  const quantidade = parseInt(document.getElementById("produtoQuantidade").value); // Obtém a quantidade do produto e converte para número inteiro

  if (nome && preco && quantidade) { // Verifica se todos os campos foram preenchidos corretamente
    const produto = new Produto(nome, preco, quantidade); // Cria uma nova instância do produto com os dados fornecidos
    carrinho.adicionarProduto(produto, 1); // Adiciona uma unidade ao carrinho
    atualizarCarrinhoUI(); // Atualiza a interface do usuário do carrinho
  } else {
    alert("Por favor, preencha todos os campos corretamente!"); // Exibe um alerta se os campos não estiverem preenchidos corretamente
  }
}

function atualizarCarrinhoUI() {
  const listaCarrinho = document.getElementById("listaCarrinho"); // Obtém a lista do carrinho na interface do usuário
  listaCarrinho.innerHTML = ""; // Limpa a lista existente
  
  carrinho.produtos.forEach(item => { // Itera sobre cada item no carrinho
    const li = document.createElement("li"); // Cria um novo elemento de lista
    li.textContent = `${item.produto.nome} - Quantidade: ${item.quantidade} - Preço: R$ ${item.produto.preco.toFixed(2)}`; // Define o texto do item da lista
    listaCarrinho.appendChild(li); // Adiciona o item à lista do carrinho
  });
  
  const total = carrinho.calcularTotal(); // Calcula o total da compra
  document.getElementById("totalCompra").textContent = `R$ ${total.toFixed(2)}`; // Atualiza o total na interface do usuário
}

function aplicarDesconto() {
  const desconto = parseFloat(document.getElementById("desconto").value); // Obtém o valor do desconto e converte para número decimal
  if (desconto >= 0 && desconto <= 100) { // Verifica se o desconto está dentro do intervalo válido
    const totalComDesconto = carrinho.aplicarDesconto(desconto); // Aplica o desconto ao total da compra
    document.getElementById("totalCompra").textContent = `R$ ${totalComDesconto.toFixed(2)}`; // Atualiza o total com desconto na interface do usuário
  } else {
    alert("Desconto inválido! Insira um valor entre 0 e 100."); // Exibe um alerta se o desconto for inválido
  }
}

function finalizarCompra() {
  carrinho.finalizarCompra(); // Finaliza a compra no carrinho
  atualizarCarrinhoUI(); // Atualiza a interface do usuário do carrinho
}