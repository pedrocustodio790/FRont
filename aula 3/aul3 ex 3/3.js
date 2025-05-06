document.addEventListener('DOMContentLoaded', function() {
    function contarParesImpares() {
        const num1 = parseInt(document.getElementById('num1').value);
        const num2 = parseInt(document.getElementById('num2').value);
        const resultado = document.getElementById('resultado');
        
        if (isNaN(num1) || isNaN(num2)) {
            resultado.innerHTML = 'Por favor, digite dois números válidos.';
            return;
        }
        
        let inicio = Math.min(num1, num2);
        let fim = Math.max(num1, num2);
        let pares = 0;
        let impares = 0;
        
        for (let i = inicio; i <= fim; i++) {
            if (i % 2 === 0) pares++;
            else impares++;
        }
        
        resultado.innerHTML = `Entre ${inicio} e ${fim}:<br>
                            Números pares: ${pares}<br>
                            Números ímpares: ${impares}`;
    }

    // Adiciona o event listener ao botão
    document.getElementById('calcular').addEventListener('click', contarParesImpares);
});