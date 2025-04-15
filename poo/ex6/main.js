import Endereco from '.Endereco.js'; // Importa a classe Endereco do arquivo endereco.j
import Pessoa from './pessoa.js'; // Importa a classe Pessoa do arquivo pessoa.js
import Validador from './validador.js'; // Importa a classe Validador do arquivo validador.js

// Adiciona um listener para o evento de envio do formulário
document.getElementById("formPessoa").addEventListener("submit", function(event) {
  event.preventDefault(); // Previne o comportamento padrão do formulário

  // Obter dados do formulário
  const nome = document.getElementById("nome").value; // Obtém o valor do campo nome
  const idade = parseInt(document.getElementById("idade").value); // Obtém e converte o valor da idade para um número inteiro
  const cpf = document.getElementById("cpf").value; // Obtém o valor do campo CPF
  const rua = document.getElementById("rua").value; // Obtém o valor do campo rua
  const numero = document.getElementById("numero").value; // Obtém o valor do campo número
  const bairro = document.getElementById("bairro").value; // Obtém o valor do campo bairro
  const cidade = document.getElementById("cidade").value; // Obtém o valor do campo cidade
  const estado = document.getElementById("estado").value; // Obtém o valor do campo estado
  const cep = document.getElementById("cep").value; // Obtém o valor do campo CEP
  const pais = document.getElementById("pais").value; // Obtém o valor do campo país

  // Criar objetos
  const endereco = new Endereco(cidade, bairro, rua, numero, cep, estado, pais); // Cria um novo objeto Endereco
  const pessoa = new Pessoa(nome, idade, cpf, endereco); // Cria um novo objeto Pessoa

  // Validar e exibir
  const resultado = document.getElementById("resultado"); // Obtém o elemento onde o resultado será exibido
  if (Validador.validarPessoa(pessoa)) { // Valida os dados da pessoa
    resultado.textContent = pessoa.toString(); // Exibe os dados da pessoa se forem válidos
  } else {
    resultado.textContent = "Dados inválidos. Verifique o CPF ou o endereço!"; // Mensagem de erro se os dados forem inválidos
  }
});