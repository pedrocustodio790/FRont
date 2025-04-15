function classificar() {
    const l1 = parseFloat(document.getElementById("lado1").value);
    const l2 = parseFloat(document.getElementById("lado2").value);
    const l3 = parseFloat(document.getElementById("lado3").value);

    let tipo = "";
    if (l1 === l2 && l2 === l3) tipo = "Equilátero";
    else if (l1 === l2 || l2 === l3 || l1 === l3) tipo = "Isósceles";
    else tipo = "Escaleno";

    document.getElementById("resultado").textContent = "Triângulo: " + tipo;
  }