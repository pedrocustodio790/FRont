class Produto {
  constructor(nome, quantidade, precoUnitario) {
    // Validações no construtor
    if (!nome || typeof nome !== 'string' || nome.trim() === '') {
      throw new Error('o porudto tem que ter um né animal ');
    }
    
    if (isNaN(quantidade) || quantidade < 0) {
      throw new Error('como vai ter produto negativo? viroiu antimateria?');
    }
    
    if (isNaN(precoUnitario) || precoUnitario <= 0) {
      throw new Error('se vai dar dinhero pra quem pegar pra ta negativo?');
    }

    this.nome = nome.trim();
    this.quantidade = parseFloat(quantidade);
    this.precoUnitario = parseFloat(precoUnitario);
  }

  adicionar(quantidade) {
    if (isNaN(quantidade)) {
      throw new Error('como se vai adicionar um produto ser ter ele ');
    }
    if (quantidade <= 0) {
      throw new Error('como se vai colocar produto com numero negativo, vai doar , vai enfiar no cu? ');
    }
    this.quantidade += parseFloat(quantidade);
  }

  remover(quantidade) {
    if (isNaN(quantidade)) {
      throw new Error('como se vai remover um produto ser ter ele? ');
    }
    if (quantidade <= 0) {
      throw new Error('como se vai tirar produto com numero negativo, vai fazer ele sumir como seu pai ,');
    }
    if (quantidade > this.quantidade) {
      throw new Error('não tem produto suficiente para remover, vai fazer o que? ');
    }
    this.quantidade -= parseFloat(quantidade);
  }

  calcularValorTotal() {
    return this.quantidade * this.precoUnitario;
  }
}