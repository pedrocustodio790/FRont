function calcularMedia() {
    let soma = 0;
    let quantidade = 0;
    let nota;
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    
    while (true) {
        nota = parseFloat(prompt("Digite uma nota (0-10):"));
        
        if (isNaN(nota) || nota < 0 || nota > 10) {
            break;
        }
        
        soma += nota;
        quantidade++;
    }
    
    if (quantidade > 0) {
        const media = soma / quantidade;
        resultado.innerHTML = `Média das ${quantidade} notas: ${media.toFixed(2)}`;
    } else {
        resultado.innerHTML = 'Nenhuma nota válida foi inserida.';
    }
}