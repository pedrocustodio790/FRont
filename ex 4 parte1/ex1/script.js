// Adiciona um evento de clique ao botão com id 'calcular'
document.getElementById('calcular').onclick = function() {
    // Obtém o valor do primeiro número e o converte para float
    var num1 = parseFloat(document.getElementById('num1').value);
    // Obtém o valor do segundo número e o converte para float
    var num2 = parseFloat(document.getElementById('num2').value);
    // Obtém a operação selecionada pelo usuário
    var operacao = document.getElementById('operacao').value;
    // Declara uma variável para armazenar o resultado
    var resultado;

    // Inicia uma estrutura de controle switch para determinar a operação
    switch (operacao) {
        case 'adição':
            // Executa a adição e armazena o resultado
            resultado = (function(a, b) { return a + b; })(num1, num2);
            break;
        case 'subtração':
            // Executa a subtração e armazena o resultado
            resultado = (function(a, b) { return a - b; })(num1, num2);
            break;
        case 'multiplicação':
            // Executa a multiplicação e armazena o resultado
            resultado = (function(a, b) { return a * b; })(num1, num2);
            break;
        case 'divisão':
            // Executa a divisão e armazena o resultado
            resultado = (function(a, b) { return a / b; })(num1, num2);
            break;
        default:
            // Caso a operação não seja válida, define uma mensagem de erro
            resultado = 'Operação inválida';
    }

    // Exibe o resultado na página
    document.getElementById('resultado').innerText = 'Resultado: ' + resultado;
}