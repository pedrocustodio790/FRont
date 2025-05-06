// Aguarda o carregamento completo do DOM
document.addEventListener("DOMContentLoaded", function () {
  // Seleciona o botão e adiciona um listener de clique
  document.getElementById("btnVerificar").addEventListener("click", function () {
    const valor = parseFloat(document.getElementById("valor").value);
    let resultado = "";

    if (valor > 0) {
      resultado = "Positivo";
    } else if (valor < 0) {
      resultado = "Negativo";
    } else {
      resultado = "Zero";
    }

    document.getElementById("resultado").textContent = resultado;
  });
});