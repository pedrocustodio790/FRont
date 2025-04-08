function processarFrase() {
    // Obter a frase digitada pelo usuário
    const frase = document.getElementById('frase').value;
    const resultadoDiv = document.getElementById('resultado');
    
    // Verificar se a frase não está vazia
    if (frase.trim() === '') {
        alert('Por favor, digite uma frase!');
        return;
    }
    
    // Manipular a frase
    const fraseMaiusculas = frase.toUpperCase(); // Converte para maiúsculas
    const fraseMinusculas = frase.toLowerCase(); // Converte para minúsculas
    const tamanhoFrase = frase.length; // Obtém o número de caracteres
    
    // Exibir os resultados
    document.getElementById('maiusculas').textContent = fraseMaiusculas;
    document.getElementById('minusculas').textContent = fraseMinusculas;
    document.getElementById('tamanho').textContent = tamanhoFrase;
    
    // Mostrar a div de resultados
    resultadoDiv.style.display = 'block';
}