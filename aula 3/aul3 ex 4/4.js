document.addEventListener('DOMContentLoaded', function() {
    function ehPrimo(num) {
        if (num <= 1) return false;
        if (num === 2) return true;
        if (num % 2 === 0) return false;
        
        for (let i = 3; i <= Math.sqrt(num); i += 2) {
            if (num % i === 0) return false;
        }
        return true;
    }

    function mostrarPrimos() {
        const inicio = parseInt(document.getElementById('inicio').value);
        const fim = parseInt(document.getElementById('fim').value);
        const resultado = document.getElementById('resultado');
        
        if (isNaN(inicio) || isNaN(fim)) {
            resultado.innerHTML = 'Por favor, digite dois números válidos.';
            return;
        }
        
        let primos = [];
        for (let i = Math.min(inicio, fim); i <= Math.max(inicio, fim); i++) {
            if (ehPrimo(i)) primos.push(i);
        }
        
        resultado.innerHTML = primos.length > 0 
            ? `Números primos entre ${Math.min(inicio, fim)} e ${Math.max(inicio, fim)}: ${primos.join(', ')}`
            : `Não há números primos entre ${Math.min(inicio, fim)} e ${Math.max(inicio, fim)}`;
    }

    // Adiciona o event listener ao botão
    document.getElementById('btnPrimos').addEventListener('click', mostrarPrimos);
});