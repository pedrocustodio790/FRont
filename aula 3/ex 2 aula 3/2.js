function contarParesImpares() {
    const num1 = parseInt(document.getElementById('num1').value); // Obtém o primeiro número do input e converte para inteiro
    const num2 = parseInt(document.getElementById('num2').value); // Obtém o segundo número do input e converte para inteiro
    const resultado = document.getElementById('resultado'); // Obtém o elemento HTML onde o resultado será exibido
    
    if (isNaN(num1) || isNaN(num2)) { // Verifica se algum dos números não é válido
        resultado.innerHTML = 'Por favor, digite dois números válidos.'; // Exibe mensagem de erro
        return; // Encerra a função se os números não forem válidos
    }
    
    let inicio = Math.min(num1, num2); // Define o início do intervalo como o menor número
    let fim = Math.max(num1, num2); // Define o fim do intervalo como o maior número
    let pares = 0; // Inicializa o contador de números pares
    let impares = 0; // Inicializa o contador de números ímpares
    
    for (let i = inicio; i <= fim; i++) { // Loop através do intervalo definido
        if (i % 2 === 0) pares++; // Se o número for par, incrementa o contador de pares
        else impares++; // Se o número for ímpar, incrementa o contador de ímpares
    }
    
    resultado.innerHTML = `Entre ${inicio} e ${fim}:<br>
                         Números pares: ${pares}<br>
                         Números ímpares: ${impares}`; // Exibe o resultado final no elemento resultado
}