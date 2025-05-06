class GeradorNumeros {
    constructor(minimo, maximo) {
        this.minimo = minimo;
        this.maximo = maximo;
    }

    gerarNumeros(qtd) {
        const numeros = [];
        
        for (let i = 0; i < qtd; i++) {
            const numeroAleatorio = Math.floor(
                Math.random() * (this.maximo - this.minimo + 1)
            ) + this.minimo;
            numeros.push(numeroAleatorio);
        }
        
        return numeros.sort((a, b) => a - b); // Retorna ordenado
    }
}

function gerarNumeros() {
    const minimo = parseInt(document.getElementById('minimo').value);
    const maximo = parseInt(document.getElementById('maximo').value);
    
    if (isNaN(minimo) || isNaN(maximo)) {
        document.getElementById('resultado').textContent =  
            "Por favor, insira valores válidos para mínimo e máximo";
        return;
    }

    const gerador = new GeradorNumeros(minimo, maximo);
    const numerosGerados = gerador.gerarNumeros(10);
    
    document.getElementById('resultado').textContent = 
        `Números gerados (ordenados): ${numerosGerados.join(', ')}`;
}