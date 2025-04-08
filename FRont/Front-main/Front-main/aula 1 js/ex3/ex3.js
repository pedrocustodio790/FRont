    // Solicitar temperatura em Celsius via prompt
    const celsius = parseFloat(prompt("Digite a temperatura em Celsius:"));
        
    // Verificar se o valor é válido
    if (isNaN(celsius)) {
        document.getElementById("resultado").innerHTML = "Valor inválido. Por favor, recarregue a página e digite um número.";
    } else {
        // Calcular Fahrenheit
        const fahrenheit = (celsius * 9/5) + 32;
        
        // Calcular Kelvin
        const kelvin = celsius + 273.15;
        
        // Exibir resultados
        document.getElementById("resultado").innerHTML = `
            <div class="temp">Temperatura em Celsius: ${celsius.toFixed(2)}°C</div>
            <div class="temp">Temperatura em Fahrenheit: ${fahrenheit.toFixed(2)}°F</div>
            <div class="temp">Temperatura em Kelvin: ${kelvin.toFixed(2)}K</div>
            <div class="temp">Fórmulas usadas:</div>
            <div class="temp">°F = (°C × 9/5) + 32 = (${celsius.toFixed(2)} × 9/5) + 32 = ${fahrenheit.toFixed(2)}°F</div>
            <div class="temp">K = °C + 273.15 = ${celsius.toFixed(2)} + 273.15 = ${kelvin.toFixed(2)}K</div>
        `;
    }