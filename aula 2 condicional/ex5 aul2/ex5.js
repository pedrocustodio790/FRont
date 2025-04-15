function classificarNota() {
    const nota = parseFloat(document.getElementById("nota").value);
    let status = "";
    if (nota >= 5) status = "Aprovado";
    else if (nota >= 3) status = "Recuperação";
    else if (nota >= 0) status = "Reprovado";
    else status = "Nota inválida";
    document.getElementById("resultado").textContent = status;
  }