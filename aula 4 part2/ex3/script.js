// Função que verifica se um número é par ou ímpar
const verificarPar = (numero) => numero % 2 === 0 ? "O número é Par" : "O número é Ímpar"; // Retorna uma string indicando se o número é par ou ímpar

// Função que verifica o número inserido pelo usuário
function verificar() {
  const numero = parseInt(document.getElementById("numero").value); // Obtém o valor do input e converte para inteiro
  const resultado = verificarPar(numero); // Chama a função verificarPar para determinar se o número é par ou ímpar
  document.getElementById("resultado").innerText = resultado; // Exibe o resultado na tela
} // Função de seta que calcula o quadrado