class Carrinho {
  constructor() {
      this.produtos = []; // Inicializa um array vazio para armazenar os produtos no carrinho
  }

  // Adiciona um produto ao carrinho
  adicionarProduto(produto, quantidade) {
      // Verifica se o produto tem estoque suficiente
      if (produto.verificarEstoque(quantidade)) {
          this.produtos.push({ produto, quantidade }); // Adiciona o produto e sua quantidade ao carrinho
          produto.atualizarEstoque(quantidade); // Atualiza o estoque do produto
          alert(`Produto "${produto.nome}" adicionado ao carrinho.`); // Notifica o usuário sobre a adição
      } else {
          alert(`Estoque insuficiente para o produto "${produto.nome}".`); // Notifica o usuário sobre a falta de estoque
      }
  }

  // Remove um produto do carrinho
  removerProduto(produto) {
      // Filtra os produtos, removendo o que foi especificado
      this.produtos = this.produtos.filter(item => item.produto !== produto);
      alert(`Produto "${produto.nome}" removido do carrinho.`); // Notifica o usuário sobre a remoção
  }

  // Calcula o valor total da compra
  calcularTotal() {
      let total = 0; // Inicializa a variável total
      // Itera sobre os produtos para calcular o total
      this.produtos.forEach(item => {
          total += item.produto.preco * item.quantidade; // Adiciona o preço do produto multiplicado pela quantidade
      });
      return total; // Retorna o valor total calculado
  }

  // Aplica um desconto no valor total
  aplicarDesconto(desconto) {
      let total = this.calcularTotal(); // Obtém o total atual
      return total - (total * (desconto / 100)); // Retorna o total após aplicar o desconto
  }

  // Finaliza a compra
  finalizarCompra() {
      let total = this.calcularTotal(); // Obtém o total da compra
      alert(`Compra finalizada! Total: R$ ${total.toFixed(2)}`); // Notifica o usuário sobre a finalização da compra
      this.produtos = []; // Limpa o carrinho após a finalização
  }
}