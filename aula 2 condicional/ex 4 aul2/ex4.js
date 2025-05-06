document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("btnClassificar").addEventListener("click", function () {
    const l1 = parseFloat(document.getElementById("lado1").value);
    const l2 = parseFloat(document.getElementById("lado2").value);
    const l3 = parseFloat(document.getElementById("lado3").value);

    const resultado = document.getElementById("resultado");

    // Validação básica
    if (isNaN(l1) || isNaN(l2) || isNaN(l3)) {
      resultado.textContent = "Por favor, insira valores válidos para todos os lados.";
      return;
    }

    // Verifica se é um triângulo possível
    if (l1 + l2 > l3 && l1 + l3 > l2 && l2 + l3 > l1) {
      let tipo = "";
      if (l1 === l2 && l2 === l3) tipo = "Equilátero";
      else if (l1 === l2 || l2 === l3 || l1 === l3) tipo = "Isósceles";
      else tipo = "Escaleno";

      resultado.textContent = "Triângulo: " + tipo;
    } else {
      resultado.textContent = "Os valores não formam um triângulo válido.";
    }
  });
});