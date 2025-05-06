function calcularArea() {
    // Pegar os valores dos inputs
    const baseMaior = parseFloat(document.getElementById("baseMaior").value); // Obtém o valor da base maior e converte para número
    const baseMenor = parseFloat(document.getElementById("baseMenor").value); // Obtém o valor da base menor e converte para número
    const altura = parseFloat(document.getElementById("altura").value); // Obtém o valor da altura e converte para número
    
    // Verificar se todos os valores são números válidos
    if (isNaN(baseMaior) || isNaN(baseMenor) || isNaN(altura)) { // Checa se algum dos valores não é um número
        document.getElementById("resultado").innerHTML = "Por favor, digite valores válidos para todas as medidas."; // Exibe mensagem de erro
        return; // Interrompe a execução da função
    }
    
    // Verificar se os valores são positivos
    if (baseMaior <= 0 || baseMenor <= 0 || altura <= 0) { // Checa se algum dos valores é menor ou igual a zero
        document.getElementById("resultado").innerHTML = "Todos os valores devem ser positivos."; // Exibe mensagem de erro
        return; // Interrompe a execução da função
    }
    
    // Verificar se a base maior é realmente maior que a base menor
    if (baseMaior < baseMenor) { // Checa se a base maior é menor que a base menor
        document.getElementById("resultado").innerHTML = "A base maior deve ser maior que a base menor."; // Exibe mensagem de erro
        return; // Interrompe a execução da função
    }
    
    // Calcular a área do trapézio
    const area = ((baseMaior + baseMenor) * altura) / 2; // Aplica a fórmula para calcular a área do trapézio
    
    // Mostrar o resultado com 2 casas decimais
    document.getElementById("resultado").innerHTML = 
        `Área do Trapézio = (B + b) × h / 2<br>
         = (${baseMaior} + ${baseMenor}) × ${altura} / 2<br>
         = ${area.toFixed(2)}`; // Exibe o resultado formatado com duas casas decimais
}
