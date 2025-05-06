function substituirPalavra() {
    // Obter valores dos inputs
    const frase = document.getElementById('inputFrase').value;
    const palavraAlvo = document.getElementById('inputPalavraAlvo').value;
    const palavraSubstituta = document.getElementById('inputSubstituta').value;
    
    // Verificar se a palavra-alvo existe na frase
    if (!frase.includes(palavraAlvo)) {
        document.getElementById('resultado').textContent = 
            `A palavra "${palavraAlvo}" não foi encontrada na frase.`;
        return;
    }
    
    // Substituir todas as ocorrências
    const novaFrase = frase.replaceAll(palavraAlvo, palavraSubstituta);
    
    // Mostrar resultado
    document.getElementById('resultado').textContent = novaFrase;
}