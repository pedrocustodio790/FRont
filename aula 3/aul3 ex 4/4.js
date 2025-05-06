function ehPrimo(num) {
    // Verifica se o número é menor ou igual a 1
    if (num <= 1) return false; // Números menores ou iguais a 1 não são primos
    // Verifica se o número é igual a 2
    if (num === 2) return true; // O número 2 é primo
    // Verifica se o número é par
    if (num % 2 === 0) return false; // Números pares maiores que 2 não são primos
    
    // Loop para verificar divisores ímpares
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        // Verifica se o número é divisível por i
        if (num % i === 0) return false; // Se for divisível, não é primo
    }
    return true; // Se não encontrou divisores, é primo
}

function mostrarPrimos() {
    // Obtém os valores de início e fim dos campos de entrada
    const inicio = parseInt(document.getElementById('inicio').value); // Converte o valor de início para inteiro
    const fim = parseInt(document.getElementById('fim').value); // Converte o valor de fim para inteiro
    const resultado = document.getElementById('resultado'); // Obtém o elemento onde o resultado será exibido
    
    // Verifica se os valores de início e fim são válidos
    if (isNaN(inicio) || isNaN(fim)) {
        resultado.innerHTML = 'Por favor, digite dois números válidos.'; // Mensagem de erro se não forem válidos
        return; // Sai da função
    }
    
    let primos = []; // Array para armazenar números primos
    // Loop para verificar todos os números entre início e fim
    for (let i = Math.min(inicio, fim); i <= Math.max(inicio, fim); i++) {
        // Verifica se o número i é primo
        if (ehPrimo(i)) primos.push(i); // Se for primo, adiciona ao array
    }
    
    // Exibe os números primos encontrados ou mensagem se não houver
    resultado.innerHTML = primos.length > 0 
        ? `Números primos entre ${inicio} e ${fim}: ${primos.join(', ')}` // Exibe os primos
        : `Não há números primos entre ${inicio} e ${fim}`; // Mensagem se não houver primos
}