function calcularArea() {
    /* Pegar o valor do raio do input */
    const raio = parseFloat(document.getElementById("raio").value);
    
    /* Verificar se é um número válido */
    if (isNaN(raio)) {
        document.getElementById("resultado").innerHTML = "Por favor, digite um valor numérico válido para o raio.";
        return; // Interrompe a execução da função se o valor não for válido
    }
    
    /* Verificar se o raio é positivo */
    if (raio <= 0) {
        document.getElementById("resultado").innerHTML = "O raio deve ser um valor positivo maior que zero.";
        return; // Interrompe a execução da função se o raio não for positivo
    }
    
    /* Calcular a área do círculo (π × r²) */
    const area = Math.PI * Math.pow(raio, 2);
    
    /* Mostrar o resultado com 2 casas decimais */
    document.getElementById("resultado").innerHTML = 
        `Para um círculo com raio r = ${raio.toFixed(2)}:<br><br>
         Área = π × r²<br>
         = ${Math.PI.toFixed(5)} × ${raio.toFixed(2)}²<br>
         = ${area.toFixed(2)}`; // Exibe o resultado formatado
}
