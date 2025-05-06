document.addEventListener('DOMContentLoaded', function() {
    function gerarTabuada() {
        const numero = parseInt(document.getElementById('numero').value);
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = '';
        
        if (isNaN(numero)) {
            resultado.innerHTML = 'Por favor, digite um número válido.';
            return;
        }
        
        for (let i = 1; i <= 10; i++) {
            resultado.innerHTML += `${numero} x ${i} = ${numero * i}<br>`;
        }
    }

    // Adicionando o event listener ao botão
    document.getElementById('gerar').addEventListener('click', gerarTabuada);
});