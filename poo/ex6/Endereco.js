  // Declaração da classe Endereco
  class Endereco {
    // Construtor da classe Endereco que inicializa os atributos do endereço
    constructor(cidade = "", bairro = "", rua = "", numero = "", cep = "", estado = "", pais = "") {
      this.cidade = cidade; // Atribui a cidade ao objeto
      this.bairro = bairro; // Atribui o bairro ao objeto
      this.rua = rua; // Atribui a rua ao objeto
      this.numero = numero; // Atribui o número ao objeto
      this.cep = cep; // Atribui o CEP ao objeto
      this.estado = estado; // Atribui o estado ao objeto
      this.pais = pais; // Atribui o país ao objeto
    }

  // Método para obter a cidade  
  getCidade() { return this.cidade; } 
  // Método para definir a cidade
  setCidade(cidade) { this.cidade = cidade; } 

  // Método para obter o bairro
  getBairro() { return this.bairro; } 
  // Método para definir o bairro
  setBairro(bairro) { this.bairro = bairro; } 

  // Método para obter a rua
  getRua() { return this.rua; } 
  // Método para definir a rua
  setRua(rua) { this.rua = rua; } 

  // Método para obter o número
  getNumero() { return this.numero; } 
  // Método para definir o número
  setNumero(numero) { this.numero = numero; } 

  // Método para obter o CEP
  getCep() { return this.cep; } 
  // Método para definir o CEP
  setCep(cep) { this.cep = cep; } 

  // Método para obter o estado
  getEstado() { return this.estado; } 
  // Método para definir o estado
  setEstado(estado) { this.estado = estado; } 

  // Método para obter o país
  getPais() { return this.pais; } 
  // Método para definir o país
  setPais(pais) { this.pais = pais; } 

  // Método que retorna uma string formatada com os dados do endereço
  toString() {
    return `Endereço: Rua ${this.rua}, Nº ${this.numero}, Bairro ${this.bairro}, ${this.cidade} - ${this.estado}, CEP: ${this.cep}, País: ${this.pais}`;
  }
}

// Exporta a classe Endereco para ser utilizada em outros módulos