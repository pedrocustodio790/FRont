const arquivoInput = document.getElementById('arquivo');
const resultado = document.getElementById('resultado');

arquivoInput.addEventListener('input', function() {
    const nomeArquivo = arquivoInput.value;
    const regex = /^[a-zA-Z0-9_-]+\.(jpg|jpeg|png|bmp)$/i;
    
    if (regex.test(nomeArquivo)) {
        arquivoInput.className = 'valid';
        resultado.textContent = '✔ Nome de arquivo válido!';
        resultado.style.color = 'green';
    } else {
        arquivoInput.className = 'invalid';
        resultado.textContent = '✖ Nome de arquivo inválido!';
        resultado.style.color = 'red';
    }
});