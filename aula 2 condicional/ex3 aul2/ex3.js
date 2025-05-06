document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("btnVerificarAno").addEventListener("click", function () {
    const ano = parseInt(document.getElementById("ano").value);
    
    // Validação básica
    if (isNaN(ano)) {
      document.getElementById("resposta").textContent = "Por favor, digite um ano válido.";
      return;
    }

    const bissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
    document.getElementById("resposta").textContent =
      bissexto ? ano + " é bissexto" : ano + " não é bissexto";
  });
});