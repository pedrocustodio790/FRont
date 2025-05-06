document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("btnClassificarNota").addEventListener("click", function () {
    const nota = parseFloat(document.getElementById("nota").value);
    const resultado = document.getElementById("resultado");

    // Verificação básica
    if (isNaN(nota) || nota < 0 || nota > 10) {
      resultado.textContent = "Por favor, digite uma nota válida entre 0 e 10.";
      return;
    }

    let status = "";
    if (nota >= 5) {
      status = "Aprovado";
    } else if (nota >= 3) {
      status = "Recuperação";
    } else {
      status = "Reprovado";
    }

    resultado.textContent = "Resultado: " + status;
  });
});