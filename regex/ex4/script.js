
function configurar() {
    const botaocodigo = document.getElementById("checacodigo");
    botaocodigo.addEventListener('click', verificacodigo);
}

function verificacodigo() {
    const entrada = document.getElementById('codiop');
    const saida = document.getElementById('saida');
    const codigo = entrada.value.trim();

    const padrao = /^[A-Z]{3}-\d{4}(?:-\d{2})?$/;

    if (padrao.test(codigo)) {
        saida.textContent = "✅ Código VÁLIDO!";
        saida.style.color = "green";
    } else {
        saida.textContent = "❌ Código INVÁLIDO! Use o formato XXX-9999 ou XXX-9999-99.";
        saida.style.color = "red";
    }
}
document.addEventListener('DOMContentLoaded', configurar)
