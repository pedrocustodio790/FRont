class Produto {
  // Construtor da classe Produto que inicializa os atributos nome, preco e quantidadeDisponivel
  constructor(nome, preco, quantidadeDisponivel) {
    this.nome = nome; // Atribui o nome do produto
    this.preco = preco; // Atribui o preço do produto
    this.quantidadeDisponivel = quantidadeDisponivel; // Atribui a quantidade disponível do produto
  }

  // Método para verificar se a quantidade é suficiente
  verificarEstoque(quantidade) {
    // Retorna verdadeiro se a quantidade disponível for maior ou igual à quantidade solicitada
    return this.quantidadeDisponivel >= quantidade;
  }

  // Método para atualizar o estoque após a compra
  atualizarEstoque(quantidadeComprada) {
    // Subtrai a quantidade comprada da quantidade disponível
    this.quantidadeDisponivel -= quantidadeComprada;
  }
}