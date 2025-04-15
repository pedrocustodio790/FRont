function calcularDesconto() {
    const produtoSelect = document.getElementById("produto"); // Obtém o elemento do produto selecionado
    const descontoSelect = document.getElementById("desconto"); // Obtém o elemento do desconto selecionado
    const resultado = document.getElementById("resultado"); // Obtém o elemento onde o resultado será exibido
    
    const precoOriginal = parseFloat(produtoSelect.value); // Converte o valor do produto selecionado para um número
    const percentualDesconto = parseFloat(descontoSelect.value); // Converte o valor do desconto selecionado para um número
    
    // Verificar se ambos foram selecionados
    if (isNaN(precoOriginal) || isNaN(percentualDesconto)) { // Verifica se os valores são válidos
        resultado.innerHTML = "Por favor, selecione um produto e um desconto antes de continuar."; // Mensagem de erro
        resultado.style.display = "block"; // Exibe a mensagem de erro
        return; // Interrompe a execução da função
    }
    
    // Calcular desconto
    const valorDesconto = precoOriginal * (percentualDesconto / 100); // Calcula o valor do desconto
    const precoComDesconto = precoOriginal - valorDesconto; // Calcula o preço após aplicar o desconto
    
    // Exibir resultado
    resultado.innerHTML = `
        <p>Produto selecionado: ${produtoSelect.options[produtoSelect.selectedIndex].text}</p> // Exibe o nome do produto selecionado
        <p>Desconto aplicado: ${percentualDesconto}%</p> // Exibe o percentual de desconto aplicado
        <p class="preco-original">Preço original: R$ ${precoOriginal.toFixed(2)}</p> // Exibe o preço original formatado
        <p class="preco-desconto">Preço com desconto: R$ ${precoComDesconto.toFixed(2)}</p> // Exibe o preço com desconto formatado
        <p class="economia">Você economizou: R$ ${valorDesconto.toFixed(2)}</p> // Exibe o valor economizado formatado
    `;
    
    resultado.style.display = "block"; // Exibe o resultado final
}
