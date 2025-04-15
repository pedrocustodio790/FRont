function verificarBissexto() {
    const ano = parseInt(document.getElementById("ano").value);
    const bissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
    document.getElementById("resposta").textContent =
      bissexto ? ano + " é bissexto" : ano + " não é bissexto";
  }