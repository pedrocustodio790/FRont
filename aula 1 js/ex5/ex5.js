function processarFrase() {
    /* Obter a frase digitada pelo usuário */
    const frase = document.getElementById('frase').value; // Captura o valor do campo de entrada
    const resultadoDiv = document.getElementById('resultado'); // Seleciona a div onde os resultados serão exibidos
    
    /* Verificar se a frase não está vazia */
    if (frase.trim() === '') { // Verifica se a frase, após remover espaços, está vazia
        alert('Por favor, digite uma frase!'); // Exibe um alerta solicitando que o usuário digite uma frase
        return; // Interrompe a execução da função se a frase estiver vazia
    }
    
    /* Manipular a frase */
    const fraseMaiusculas = frase.toUpperCase(); // Converte a frase para letras maiúsculas
    const fraseMinusculas = frase.toLowerCase(); // Converte a frase para letras minúsculas
    const tamanhoFrase = frase.length; // Obtém o número total de caracteres da frase
    
    /* Exibir os resultados */
    document.getElementById('maiusculas').textContent = fraseMaiusculas; // Exibe a frase em maiúsculas
    document.getElementById('minusculas').textContent = fraseMinusculas; // Exibe a frase em minúsculas
    document.getElementById('tamanho').textContent = tamanhoFrase; // Exibe o tamanho da frase
    
    /* Mostrar a div de resultados */
    resultadoDiv.style.display = 'block'; // Torna a div de resultados visível
}
