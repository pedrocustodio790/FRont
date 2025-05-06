class Produto {
  // Construtor da classe Produto que inicializa as propriedades do produto
  constructor(nome, quantidade, precoUnitario) {
    this.nome = nome; // Nome do produto
    this.quantidade = quantidade; // Quantidade disponível do produto
    this.precoUnitario = precoUnitario; // Preço unitário do produto
  }

  // Método para adicionar uma quantidade ao estoque do produto
  adicionar(quantidade) {
    this.quantidade += quantidade; // Aumenta a quantidade disponível
  }

  // Método para remover uma quantidade do estoque do produto
  remover(quantidade) {
    // Verifica se a quantidade a ser removida é menor ou igual à quantidade disponível
    if (quantidade <= this.quantidade) {
      this.quantidade -= quantidade; // Diminui a quantidade disponível
    } else {
      // Alerta o usuário se a quantidade a ser removida for maior que a disponível
      alert("Quantidade para remover maior que o disponível.");
    }
  }

  // Método para calcular o valor total do estoque do produto
  calcularValorTotal() {
    return this.quantidade * this.precoUnitario; // Retorna o valor total
  }
}