function mostrarResultado() {
    const select = document.getElementById('disciplina');
    const disciplinaSelecionada = select.value;
    const resultadoDiv = document.getElementById('resultado');
    
    if (disciplinaSelecionada === "") {
        resultadoDiv.textContent = "Por favor, selecione uma disciplina.";
        resultadoDiv.style.display = "block";
        resultadoDiv.style.backgroundColor = "#ffebee";
        return;
    }
    
    const saudacao = "Olá! Você selecionou a disciplina: ";
    resultadoDiv.textContent = saudacao + disciplinaSelecionada;
    resultadoDiv.style.display = "block";
    resultadoDiv.style.backgroundColor = "#e8f5e9";
}