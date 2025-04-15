import Endereco from ".Endereco.js"; // Importa a classe Endereco do arquivo endereco.js

class Pessoa {
  constructor(nome = "", idade = 0, cpf = "", endereco = null) {
    this.nome = nome; // Inicializa o nome da pessoa
    this.idade = idade; // Inicializa a idade da pessoa
    this.cpf = cpf; // Inicializa o CPF da pessoa
    this.endereco = endereco || new Endereco(); // Inicializa o endereço, criando um novo objeto Endereco se não for fornecido
  }

  getNome() { return this.nome; } // Retorna o nome da pessoa
  setNome(nome) { this.nome = nome; } // Define um novo nome para a pessoa

  getIdade() { return this.idade; } // Retorna a idade da pessoa
  setIdade(idade) { this.idade = idade; } // Define uma nova idade para a pessoa

  getCpf() { return this.cpf; } // Retorna o CPF da pessoa
  setCpf(cpf) { this.cpf = cpf; } // Define um novo CPF para a pessoa

  getEndereco() { return this.endereco; } // Retorna o endereço da pessoa
  setEndereco(endereco) { this.endereco = endereco; } // Define um novo endereço para a pessoa

  toString() {
    // Retorna uma representação em string da pessoa, incluindo nome, idade, CPF e endereço
    return `Pessoa: ${this.nome}, Idade: ${this.idade}, CPF: ${this.cpf}, Endereço: [${this.endereco.toString()}]`;
  }
}

export default Pessoa; // Exporta a classe Pessoa para uso em outros módulos