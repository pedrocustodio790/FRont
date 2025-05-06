document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("btnMostrarMes").addEventListener("click", function () {
    const mes = document.getElementById("mesSelect").value.toLowerCase();
    const meses = [
      "janeiro", "fevereiro", "março", "abril", "maio", "junho",
      "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
    ];
    const numero = meses.indexOf(mes);
    document.getElementById("resultadoMes").textContent =
      numero >= 0 ? "Número do mês: " + (numero + 1) : "Mês inválido.";
  });
});