// Função de seta que calcula o quadrado
const calcularQuadrado = (numero) => numero * numero; // Retorna o quadrado do número passado como argumento

// Função que aplica uma operação passada como callback
function aplicarOperacao(numero, operacao) {
  return operacao(numero); // Executa a operação recebida como argumento
}

// Função para usar no botão
function executar() {
  const numero = parseFloat(document.getElementById("numero").value); // Obtém o valor do input e converte para float
  if (isNaN(numero)) { // Verifica se o valor inserido não é um número
    document.getElementById("resultado").innerText = "Digite um número válido."; // Exibe mensagem de erro se não for um número
    return; // Interrompe a execução da função
  }
  const resultado = aplicarOperacao(numero, calcularQuadrado); // Aplica a operação de calcular o quadrado
  document.getElementById("resultado").innerText = `O quadrado de ${numero} é ${resultado}`; // Exibe o resultado na tela
}