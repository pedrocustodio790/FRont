document.addEventListener('DOMContentLoaded', function() {
  // Cache de elementos do DOM
  const estacaoInput = document.getElementById('estacao');
  const botaoEstacao = document.getElementById('botao-estacao');
  const resultadoEstacao = document.getElementById('resultado-estacao');

  // Adiciona evento de click ao botão
  botaoEstacao.addEventListener('click', mostrarEstacao);

  function mostrarEstacao() {
    // Validação da entrada
    if (!estacaoInput.value) {
      resultadoEstacao.textContent = "Por favor, digite um número.";
      return;
    }

    const numero = parseInt(estacaoInput.value);
    let mensagem = '';

    // Switch case para determinar a estação
    switch (numero) {
      case 1:
        mensagem = "Primavera: estação das flores e do clima ameno.";
        break;
      case 2:
        mensagem = "Verão: dias quentes e ensolarados.";
        break;
      case 3:
        mensagem = "Outono: folhas caem e o clima começa a esfriar.";
        break;
      case 4:
        mensagem = "Inverno: estação fria, ideal para bebidas quentes.";
        break;
      default:
        mensagem = "Número inválido. Digite um número entre 1 e 4.";
    }

    // Exibe o resultado e limpa o input
    resultadoEstacao.textContent = mensagem;
    estacaoInput.value = '';
    estacaoInput.focus();
  }
});