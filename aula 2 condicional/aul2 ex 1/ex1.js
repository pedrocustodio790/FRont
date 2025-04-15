function verificarNumero() {
    const valor = parseFloat(document.getElementById("valor").value);
    let resultado = "";

    if (valor > 0) resultado = "Positivo";
    else if (valor < 0) resultado = "Negativo";
    else resultado = "Zero";

    document.getElementById("resultado").textContent = resultado;
  }