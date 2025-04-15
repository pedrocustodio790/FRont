function verificarPalindromo() {
    const palavra = document.getElementById("palavra").value.toLowerCase();
    const limpa = palavra.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s/g, "");
    const invertida = limpa.split("").reverse().join("");
    alert(limpa === invertida ? "É um palíndromo!" : "Não é um palíndromo.");
  }