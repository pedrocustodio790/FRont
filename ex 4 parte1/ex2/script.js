// Adiciona um evento de clique ao botão com id 'calcular' para outra funcionalidade
document.getElementById('calcular').onclick = function() {
    // Obtém o valor do número e o converte para float
    const numero = parseFloat(document.getElementById('numero').value);
    // Define uma função para calcular a raiz quadrada
    const raiz = function(num) {
        return Math.sqrt(num);
    };
    // Define uma função para calcular a exponencial
    const exponencial = function(num) {
        return Math.exp(num);
    };
    // Calcula a raiz quadrada do número
    const resultadoRaiz = raiz(numero);
    // Calcula a exponencial do número
    const resultadoExponencial = exponencial(numero);
    // Exibe os resultados na página
    document.getElementById('resultado').innerHTML = 
        `Raiz: ${resultadoRaiz} <br> Exponencial: ${resultadoExponencial}`;
};