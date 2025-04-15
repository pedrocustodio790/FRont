// Função que calcula o fatorial de um número
const calcularFatorial = (n) => {
  // Verifica se o número é negativo, retornando indefinido
  if (n < 0) return undefined; 
  // Se o número for 0 ou 1, o fatorial é 1
  if (n === 0 || n === 1) return 1; 

  // Inicializa a variável resultado com 1
  let resultado = 1; 
  // Loop que multiplica os números de 2 até n
  for (let i = 2; i <= n; i++) {
    resultado *= i; // Multiplica o resultado pelo número atual
  }
  // Retorna o resultado final do fatorial
  return resultado; 
};

// Função que exibe o fatorial de um número
function exibirFatorial(numero) {
  // Chama a função calcularFatorial e armazena o resultado
  const resultado = calcularFatorial(numero); 
  // Verifica se o resultado é indefinido e retorna a mensagem apropriada
  return resultado === undefined
    ? "Fatorial não é definido para números negativos." // Mensagem para números negativos
    : `${numero}! = ${resultado}`; // Formata a string com o resultado do fatorial
}

// Função que é chamada para calcular e exibir o fatorial
function calcular() {
  // Obtém o valor do input e converte para inteiro
  const numero = parseInt(document.getElementById("numero").value); 
  // Chama a função exibirFatorial e armazena o texto retornado
  const texto = exibirFatorial(numero); 
  // Atualiza o elemento HTML com o resultado
  document.getElementById("resultado").innerText = texto; 
}
