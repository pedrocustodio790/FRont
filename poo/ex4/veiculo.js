class Veiculo { // Classe que representa um veículo
  constructor(placa, modelo, tempo) { // Construtor da classe, inicializa os atributos
    this.placa = placa; // Atributo que armazena a placa do veículo
    this.modelo = modelo; // Atributo que armazena o modelo do veículo
    this.tempo = tempo; // Atributo que armazena o tempo em horas
  }

  calcularValor() { // Método que calcula o valor com base no tempo
    return this.tempo * 5; // Retorna o valor calculado (R$ 5 por hora)
  }

  getDetalhes() { // Método que retorna os detalhes do veículo
    return `Placa: ${this.placa} | Modelo: ${this.modelo} | Tempo: ${this.tempo}h | Valor: R$ ${this.calcularValor().toFixed(2)}`; // Formata e retorna os detalhes do veículo
  }
}