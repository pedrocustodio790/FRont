// Solicitar temperatura em Celsius via prompt
const celsius = parseFloat(prompt("Digite a temperatura em Celsius:")); // Converte a entrada do usuário para um número decimal

// Verificar se o valor é válido
if (isNaN(celsius)) { // Verifica se a entrada não é um número
    document.getElementById("resultado").innerHTML = "Valor inválido. Por favor, recarregue a página e digite um número."; // Exibe mensagem de erro
} else {
    // Calcular Fahrenheit
    const fahrenheit = (celsius * 9/5) + 32; // Converte Celsius para Fahrenheit
    
    // Calcular Kelvin
    const kelvin = celsius + 273.15; // Converte Celsius para Kelvin
    
    // Exibir resultados
    document.getElementById("resultado").innerHTML = `
        <div class="temp">Temperatura em Celsius: ${celsius.toFixed(2)}°C</div> // Exibe a temperatura em Celsius formatada
        <div class="temp">Temperatura em Fahrenheit: ${fahrenheit.toFixed(2)}°F</div> // Exibe a temperatura em Fahrenheit formatada
        <div class="temp">Temperatura em Kelvin: ${kelvin.toFixed(2)}K</div> // Exibe a temperatura em Kelvin formatada
        <div class="temp">Fórmulas usadas:</div> // Indica que as fórmulas a seguir foram utilizadas
        <div class="temp">°F = (°C × 9/5) + 32 = (${celsius.toFixed(2)} × 9/5) + 32 = ${fahrenheit.toFixed(2)}°F</div> // Mostra a fórmula de conversão para Fahrenheit
        <div class="temp">K = °C + 273.15 = ${celsius.toFixed(2)} + 273.15 = ${kelvin.toFixed(2)}K</div> // Mostra a fórmula de conversão para Kelvin
    `;
}
