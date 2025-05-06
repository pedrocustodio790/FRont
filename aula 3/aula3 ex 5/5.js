function calcularMedia() {
    let soma = 0; // Inicializa a variável soma para acumular as notas
    let quantidade = 0; // Inicializa a variável quantidade para contar as notas
    let nota; // Declara a variável nota que armazenará a entrada do usuário
    const resultado = document.getElementById('resultado'); // Obtém o elemento HTML onde o resultado será exibido
    resultado.innerHTML = ''; // Limpa o conteúdo anterior do resultado
    
    while (true) { // Inicia um loop infinito para coletar notas
        nota = parseFloat(prompt("Digite uma nota (0-10):")); // Solicita ao usuário que digite uma nota e converte para número
        
        if (isNaN(nota) || nota < 0 || nota > 10) { // Verifica se a nota é inválida
            break; // Sai do loop se a nota for inválida
        }
        
        soma += nota; // Adiciona a nota à soma total
        quantidade++; // Incrementa a quantidade de notas válidas
    }
    
    if (quantidade > 0) { // Verifica se foram inseridas notas válidas
        const media = soma / quantidade; // Calcula a média das notas
        resultado.innerHTML = `Média das ${quantidade} notas: ${media.toFixed(2)}`; // Exibe a média formatada
    } else {
        resultado.innerHTML = 'Nenhuma nota válida foi inserida.'; // Mensagem caso nenhuma nota válida tenha sido inserida
    }
}