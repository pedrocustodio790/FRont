document.addEventListener('DOMContentLoaded', function() {
  // Cache de elementos DOM
  const codigoInput = document.getElementById('codigo');
  const classificarBtn = document.getElementById('classificar-btn');
  const resultadoProduto = document.getElementById('resultado-produto');

  // Adiciona evento de click ao botão
  classificarBtn.addEventListener('click', classificarProduto);

  // Adiciona evento de tecla Enter no input
  codigoInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      classificarProduto();
    }
  });

  function classificarProduto() {
    // Validação do input
    if (!codigoInput.value) {
      resultadoProduto.textContent = "Por favor, digite um código.";
      resultadoProduto.style.color = "red";
      return;
    }

    const codigo = parseInt(codigoInput.value);
    let classificacao = '';

    // Switch para classificação do produto
    switch (codigo) {
      case 1:
        classificacao = "Alimento não-perecível";
        break;
      case 2:
      case 3:
      case 4:
        classificacao = "Alimento perecível";
        break;
      case 5:
      case 6:
        classificacao = "Vestuário";
        break;
      case 7:
        classificacao = "Higiene Pessoal";
        break;
      default:
        if (codigo >= 8 && codigo <= 15) {
          classificacao = "Limpeza e Utensílios Domésticos";
        } else {
          classificacao = "Código inválido";
        }
    }

    // Exibe o resultado
    resultadoProduto.textContent = `Código ${codigo}: ${classificacao}`;
    resultadoProduto.style.color = codigo >= 1 && codigo <= 15 ? "green" : "red";
    
    // Limpa o input e mantém o foco
    codigoInput.value = '';
    codigoInput.focus();
  }
});