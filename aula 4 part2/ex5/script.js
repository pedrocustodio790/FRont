// Função que compara dois números e retorna verdadeiro se o primeiro for maior que o segundo
const compararNumeros = (a, b) => a > b; 

// Função que encontra o maior número entre três valores
function encontrarMaiorNumero(a, b, c) {
  let maior = a; // Inicializa a variável maior com o primeiro número
  // Compara o segundo número com o maior atual e atualiza se necessário
  if (compararNumeros(b, maior)) maior = b; 
  // Compara o terceiro número com o maior atual e atualiza se necessário
  if (compararNumeros(c, maior)) maior = c; 
  return maior; // Retorna o maior número encontrado
}

// Função que realiza a comparação dos números inseridos pelo usuário
function comparar() {
  // Obtém os valores dos campos de entrada e os converte para float
  const n1 = parseFloat(document.getElementById("num1").value); 
  const n2 = parseFloat(document.getElementById("num2").value); 
  const n3 = parseFloat(document.getElementById("num3").value); 

  // Verifica se algum dos valores não é um número
  if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
    // Exibe mensagem de erro se os valores não forem válidos
    document.getElementById("resultado").innerText = "Digite três números válidos."; 
    return; // Interrompe a execução da função
  }

  // Chama a função para encontrar o maior número
  const maior = encontrarMaiorNumero(n1, n2, n3); 
  // Exibe o maior número encontrado
  document.getElementById("resultado").innerText = `O maior número é: ${maior}`; 
}