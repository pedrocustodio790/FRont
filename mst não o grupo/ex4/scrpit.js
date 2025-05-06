function capitalizarFrase() {
    // Obter a frase do textarea de entrada
    const frase = document.getElementById('inputArea').value;
    
    // Capitalizar cada palavra da frase
    const fraseCapitalizada = frase.split(' ').map(palavra => {
        if (palavra.length === 0) return palavra;
        return palavra[0].toUpperCase() + palavra.slice(1).toLowerCase();
    }).join(' ');
    
    // Exibir o resultado no textarea de saída
    document.getElementById('outputArea').value = fraseCapitalizada;
}

// Opcional: Permitir capitalizar pressionando Enter
document.getElementById('inputArea').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        capitalizarFrase();
    }
});