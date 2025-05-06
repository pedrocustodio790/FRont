function mostrarResultado() { // Função que exibe o resultado da seleção
    const select = document.getElementById('disciplina'); // Obtém o elemento select com o id 'disciplina'
    const disciplinaSelecionada = select.value; // Armazena o valor selecionado no select
    const resultadoDiv = document.getElementById('resultado'); // Obtém o elemento div onde o resultado será exibido
    
    if (disciplinaSelecionada === "") { // Verifica se nenhuma disciplina foi selecionada
        resultadoDiv.textContent = "Por favor, selecione uma disciplina."; // Mensagem de erro
        resultadoDiv.style.display = "block"; // Exibe a div de resultado
        resultadoDiv.style.backgroundColor = "#ffebee"; // Define a cor de fundo da div de erro
        return; // Encerra a função se nenhuma disciplina foi selecionada
    }
    
    const saudacao = "Olá! Você selecionou a disciplina: "; // Mensagem de saudação
    resultadoDiv.textContent = saudacao + disciplinaSelecionada; // Exibe a saudação junto com a disciplina selecionada
    resultadoDiv.style.display = "block"; // Exibe a div de resultado
    resultadoDiv.style.backgroundColor = "#e8f5e9"; // Define a cor de fundo da div de sucesso
}
