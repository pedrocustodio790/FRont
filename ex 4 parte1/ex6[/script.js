/**
 * Função responsável por calcular o valor total com base no tipo de produto e quantidade informada.
 */
function calcularValorTotal() {
    // Obtém o valor selecionado no campo "tipoProduto"
    const tipoProduto = document.getElementById("tipoProduto").value;

    // Obtém e converte a quantidade para número inteiro
    const quantidade = parseInt(document.getElementById("quantidade").value);

    // Variável que armazenará o valor unitário do produto
    let valorUnitario;

    // Define o valor unitário com base no tipo de produto
    switch (tipoProduto) {
        case "jornais":
            valorUnitario = 10.00; // Define o valor unitário para jornais
            break;
        case "revistas":
            valorUnitario = 20.00; // Define o valor unitário para revistas
            break;
        case "livros":
            valorUnitario = 30.00; // Define o valor unitário para livros
            break;
        case "discos":
            valorUnitario = 40.00; // Define o valor unitário para discos
            break;
        default:
            alert("Selecione um tipo de produto válido."); // Alerta caso o tipo de produto não seja válido
            return; // Interrompe a execução da função
    }

    // Verifica se a quantidade é válida
    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Informe uma quantidade válida (maior que zero)."); // Alerta caso a quantidade não seja válida
        return; // Interrompe a execução da função
    }

    // Calcula o valor total
    const valorTotal = valorUnitario * quantidade; // Multiplica o valor unitário pela quantidade

    // Exibe o resultado formatado com duas casas decimais
    document.getElementById("resultado").innerText = 
        "Valor Total: R$ " + valorTotal.toFixed(2); // Atualiza o elemento "resultado" com o valor total formatado
}