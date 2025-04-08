function calcularArea() {
    // Pegar os valores dos inputs
    const baseMaior = parseFloat(document.getElementById("baseMaior").value);
    const baseMenor = parseFloat(document.getElementById("baseMenor").value);
    const altura = parseFloat(document.getElementById("altura").value);
    
    // Verificar se todos os valores são números válidos
    if (isNaN(baseMaior) || isNaN(baseMenor) || isNaN(altura)) {
        document.getElementById("resultado").innerHTML = "Por favor, digite valores válidos para todas as medidas.";
        return;
    }
    
    // Verificar se os valores são positivos
    if (baseMaior <= 0 || baseMenor <= 0 || altura <= 0) {
        document.getElementById("resultado").innerHTML = "Todos os valores devem ser positivos.";
        return;
    }
    
    // Verificar se a base maior é realmente maior que a base menor
    if (baseMaior < baseMenor) {
        document.getElementById("resultado").innerHTML = "A base maior deve ser maior que a base menor.";
        return;
    }
    
    // Calcular a área do trapézio
    const area = ((baseMaior + baseMenor) * altura) / 2;
    
    // Mostrar o resultado com 2 casas decimais
    document.getElementById("resultado").innerHTML = 
        `Área do Trapézio = (B + b) × h / 2<br>
         = (${baseMaior} + ${baseMenor}) × ${altura} / 2<br>
         = ${area.toFixed(2)}`;
}