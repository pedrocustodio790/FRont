function calcularDesconto() {
    const produtoSelect = document.getElementById("produto");
    const descontoSelect = document.getElementById("desconto");
    const resultado = document.getElementById("resultado");
    
    const precoOriginal = parseFloat(produtoSelect.value);
    const percentualDesconto = parseFloat(descontoSelect.value);
    
    // Verificar se ambos foram selecionados
    if (isNaN(precoOriginal) || isNaN(percentualDesconto)) {
        resultado.innerHTML = "Por favor, selecione um produto e um desconto antes de continuar.";
        resultado.style.display = "block";
        return;
    }
    
    // Calcular desconto
    const valorDesconto = precoOriginal * (percentualDesconto / 100);
    const precoComDesconto = precoOriginal - valorDesconto;
    
    // Exibir resultado
    resultado.innerHTML = `
        <p>Produto selecionado: ${produtoSelect.options[produtoSelect.selectedIndex].text}</p>
        <p>Desconto aplicado: ${percentualDesconto}%</p>
        <p class="preco-original">Preço original: R$ ${precoOriginal.toFixed(2)}</p>
        <p class="preco-desconto">Preço com desconto: R$ ${precoComDesconto.toFixed(2)}</p>
        <p class="economia">Você economizou: R$ ${valorDesconto.toFixed(2)}</p>
    `;
    
    resultado.style.display = "block";
}