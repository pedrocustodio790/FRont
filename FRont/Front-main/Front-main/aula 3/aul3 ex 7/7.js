function desenharTriangulo() {
    const linhas = parseInt(document.getElementById('linhas').value);
    const consoleOutput = document.getElementById('console');
    
    if (isNaN(linhas) || linhas < 1) {
        consoleOutput.innerHTML = 'Por favor, digite um número válido maior que 0.';
        return;
    }
    
    let triangulo = '';
    for (let i = 1; i <= linhas; i++) {
        triangulo += '*'.repeat(i) + '\n';
    }
    
    consoleOutput.innerHTML = triangulo;
}