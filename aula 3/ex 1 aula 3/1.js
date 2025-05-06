function gerarTabuada() { /* Função para gerar a tabuada de um número */
    const numero = parseInt(document.getElementById('numero').value); /* Obtém o valor do input e converte para inteiro */
    let resultado = document.getElementById('resultado'); /* Seleciona o elemento onde o resultado será exibido */
    resultado.innerHTML = ''; /* Limpa o conteúdo anterior do resultado */
    
    if (isNaN(numero)) { /* Verifica se o valor inserido não é um número */
        resultado.innerHTML = 'Por favor, digite um número válido.'; /* Mensagem de erro caso não seja um número */
        return; /* Interrompe a execução da função */
    }
    
    for (let i = 1; i <= 10; i++) { /* Loop para calcular a tabuada de 1 a 10 */
        resultado.innerHTML += `${numero} x ${i} = ${numero * i}<br>`; /* Adiciona cada linha da tabuada ao resultado */
    }
}