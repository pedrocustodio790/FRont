function calcular() {
    // Pegar o valor do input
    const numero = parseInt(document.getElementById("numeroInput").value); /* Obtém o valor do campo de entrada e converte para um número inteiro */
    
    // Verificar se é um número válido
    if (isNaN(numero)) { /* Verifica se o valor obtido não é um número */
        document.getElementById("resultado").innerHTML = "Por favor, digite um número válido."; /* Exibe uma mensagem de erro se o valor não for válido */
        return; /* Interrompe a execução da função se o número não for válido */
    }
    
    // Calcular antecessor e sucessor
    const antecessor = numero - 1; /* Calcula o antecessor do número */
    const sucessor = numero + 1; /* Calcula o sucessor do número */
    
    // Mostrar o resultado
    document.getElementById("resultado").innerHTML = 
        `Número digitado: ${numero}<br> /* Exibe o número digitado pelo usuário */
         Antecessor: ${antecessor}<br> /* Exibe o antecessor do número */
         Sucessor: ${sucessor}`; /* Exibe o sucessor do número */
}
