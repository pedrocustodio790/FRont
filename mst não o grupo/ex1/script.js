function converterParaArrayNumerico() {
    const input = document.getElementById('numeroInput').value.trim();
    if (!input) return [];
    
    // Divide a string pela vírgula, remove espaços em branco e converte para números
    return input.split(',').map(item => Number(item.trim()));
}

function encontrarMaximo() {
    const numeros = converterParaArrayNumerico();
    if (numeros.length === 0) {
        document.getElementById('resultado').textContent = "Por favor, insira números válidos";
        return;
    }
    
    const maximo = Math.max(...numeros);
    document.getElementById('resultado').textContent = `O valor máximo é: ${maximo}`;
}

function encontrarMinimo() {
    const numeros = converterParaArrayNumerico();
    if (numeros.length === 0) {
        document.getElementById('resultado').textContent = "Por favor, insira números válidos";
        return;
    }
    
    const minimo = Math.min(...numeros);
    document.getElementById('resultado').textContent = `O valor mínimo é: ${minimo}`;
}