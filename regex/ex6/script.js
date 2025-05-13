const telefoneInput = document.getElementById('telefone');
const resultado = document.getElementById('resultado');

telefoneInput.addEventListener('input', function() {
    const telefone = telefoneInput.value;
    const regex = /^(\+55\s?)?(\(\d{2}\)\s)(\d{4,5}-?\d{4})$/;
    
    if (regex.test(telefone)) {
        telefoneInput.className = 'valid';
        resultado.textContent = '✔ Telefone válido!';
        resultado.style.color = 'green';
    } else {
        telefoneInput.className = 'invalid';
        resultado.textContent = '✖ Telefone inválido!';
        resultado.style.color = 'red';
    }
});