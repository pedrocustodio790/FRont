function calcularArea() {
    // Pegar o valor do raio do input
    const raio = parseFloat(document.getElementById("raio").value);
    
    // Verificar se é um número válido
    if (isNaN(raio)) {
        document.getElementById("resultado").innerHTML = "Por favor, digite um valor numérico válido para o raio.";
        return;
    }
    
    // Verificar se o raio é positivo
    if (raio <= 0) {
        document.getElementById("resultado").innerHTML = "O raio deve ser um valor positivo maior que zero.";
        return;
    }
    
    // Calcular a área do círculo (π × r²)
    const area = Math.PI * Math.pow(raio, 2);
    
    // Mostrar o resultado com 2 casas decimais
    document.getElementById("resultado").innerHTML = 
        `Para um círculo com raio r = ${raio.toFixed(2)}:<br><br>
         Área = π × r²<br>
         = ${Math.PI.toFixed(5)} × ${raio.toFixed(2)}²<br>
         = ${area.toFixed(2)}`;
}