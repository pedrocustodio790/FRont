function inverterNumero(callback) {
    const numero = document.getElementById('numero').value; // Obtém o valor do campo de entrada
    const numeroInvertido = numero.split('').reverse().join(''); // Inverte o número
    callback(numeroInvertido); // Chama a função de callback com o número invertido
}

function mostrarResultado(resultado) {
    document.getElementById('resultado').innerText = `Número invertido: ${resultado}`; // Exibe o resultado na tela
}
