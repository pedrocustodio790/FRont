document.addEventListener('DOMContentLoaded', function() {
  // Cache de elementos DOM
  const num1Input = document.getElementById('num1');
  const num2Input = document.getElementById('num2');
  const operacaoSelect = document.getElementById('operacao');
  const calcularBtn = document.getElementById('calcular-btn');
  const resultadoOperacao = document.getElementById('resultado-operacao');

  // Adiciona evento de click ao botão
  calcularBtn.addEventListener('click', calcular);

  function calcular() {
    // Validação dos inputs
    if (!num1Input.value || !num2Input.value) {
      resultadoOperacao.textContent = "Por favor, preencha ambos os números.";
      return;
    }

    if (!operacaoSelect.value) {
      resultadoOperacao.textContent = "Por favor, selecione uma operação.";
      return;
    }

    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const escolha = parseInt(operacaoSelect.value);
    let resultado = '';

    // Switch para operações matemáticas
    switch (escolha) {
      case 1:
        resultado = `Média: ${((num1 + num2) / 2).toFixed(2)}`;
        break;
      case 2:
        resultado = `Diferença: ${Math.abs(num1 - num2)}`;
        break;
      case 3:
        resultado = `Produto: ${(num1 * num2).toFixed(2)}`;
        break;
      case 4:
        if (num2 !== 0) {
          resultado = `Divisão: ${(num1 / num2).toFixed(2)}`;
        } else {
          resultado = "Erro: Divisão por zero não permitida.";
        }
        break;
      default:
        resultado = "Operação inválida.";
    }

    // Exibe o resultado
    resultadoOperacao.textContent = resultado;
  }
});