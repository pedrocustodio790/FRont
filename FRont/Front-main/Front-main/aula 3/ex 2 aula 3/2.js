function somarNumeros() {
    let soma = 0;
    let numero;
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    
    do {
        numero = parseFloat(prompt("Digite um número (-1 para parar):"));
        if (!isNaN(numero) && numero !== -1) {
            soma += numero;
        }
    } while (numero !== -1);
    
    resultado.innerHTML = `A soma dos números é: ${soma}`;
}