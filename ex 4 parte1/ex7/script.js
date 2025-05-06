function gerarTriangulo() {
    // Obtém o número de linhas a partir do input
    let linhas = parseInt(document.getElementById('linhas').value);

    // Verifica se o número de linhas é válido
    if (isNaN(linhas) || linhas < 1) {
      alert("Por favor, insira um número válido de linhas.");
      return;
    }

    // Exibe o triângulo no console
    for (let i = 1; i <= linhas; i++) {
      console.log('*'.repeat(i));
    }
  }