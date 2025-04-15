// Função do exercício 3: classificar produto com base no código
function classificarProduto() {
    const codigo = parseInt(document.getElementById('codigo').value); // Código do produto
    let classificacao = ''; // Mensagem de classificação
  
    // Switch para classificar conforme o código
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
        // Verifica se está entre 8 e 15
        if (codigo >= 8 && codigo <= 15) {
          classificacao = "Limpeza e Utensílios Domésticos";
        } else {
          classificacao = "Código inválido";
        }
    }
  
    document.getElementById('resultado-produto').textContent = classificacao; // Mostra resultado
  }