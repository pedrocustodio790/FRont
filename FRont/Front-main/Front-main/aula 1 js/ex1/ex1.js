function calcular() {
    // Pegar o valor do input
    const numero = parseInt(document.getElementById("numeroInput").value);
    
    // Verificar se é um número válido
    if (isNaN(numero)) {
        document.getElementById("resultado").innerHTML = "Por favor, digite um número válido.";
        return;
    }
    
    // Calcular antecessor e sucessor
    const antecessor = numero - 1;
    const sucessor = numero + 1;
    
    // Mostrar o resultado
    document.getElementById("resultado").innerHTML = 
        `Número digitado: ${numero}<br>
         Antecessor: ${antecessor}<br>
         Sucessor: ${sucessor}`;
}