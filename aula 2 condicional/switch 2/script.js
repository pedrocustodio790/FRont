// Função do exercício 2: calcular operação entre dois números
function calcular() {
    const num1 = parseFloat(document.getElementById('num1').value); // Número 1 convertido para float
    const num2 = parseFloat(document.getElementById('num2').value); // Número 2 convertido para float
    const escolha = parseInt(document.getElementById('operacao').value); // Tipo de operação escolhida
    let resultado = ''; // Variável para armazenar o resultado
  
    // Switch para escolher qual operação fazer
    switch (escolha) {
      case 1:
        resultado = `Média: ${(num1 + num2) / 2}`;
        break;
      case 2:
        resultado = `Diferença: ${Math.abs(num1 - num2)}`; // diferença absoluta
        break;
      case 3:
        resultado = `Produto: ${num1 * num2}`;
        break;
      case 4:
        // Verifica se o segundo número é diferente de zero
        if (num2 !== 0) {
          resultado = `Divisão: ${(num1 / num2).toFixed(2)}`; // divisão com 2 casas decimais
        } else {
          resultado = "Erro: Divisão por zero não permitida.";
        }
        break;
      default:
        resultado = "Operação inválida. Escolha entre 1 e 4.";
    }
  
    document.getElementById('resultado-operacao').textContent = resultado; // Exibe resultado
  }