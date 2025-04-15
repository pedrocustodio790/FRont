function desenharTriangulo() {
    const linhas = parseInt(document.getElementById('linhas').value); // Obtém o número de linhas do input e converte para inteiro
    const consoleOutput = document.getElementById('console'); // Obtém o elemento onde o triângulo será exibido
    
    if (isNaN(linhas) || linhas < 1) { // Verifica se o número de linhas é inválido
        consoleOutput.innerHTML = 'Por favor, digite um número válido maior que 0.'; // Mensagem de erro se o número for inválido
        return; // Sai da função se o número for inválido
    }
    
    let triangulo = ''; // Inicializa a string que armazenará o triângulo
    for (let i = 1; i <= linhas; i++) { // Loop para construir o triângulo
        triangulo += '*'.repeat(i) + '\n'; // Adiciona a linha do triângulo com a quantidade de asteriscos correspondente
    }
    
    consoleOutput.innerHTML = triangulo; // Exibe o triângulo no elemento HTML
}