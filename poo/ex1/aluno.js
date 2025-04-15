function validarNota(nota) {
  // Verifica se a nota é um número e se está entre 0 e 10
  return !isNaN(nota) && nota >= 0 && nota <= 10;
}

function calcularMedia(n1, n2, n3) {
  // Calcula a média das três notas e formata para duas casas decimais
  return ((n1 + n2 + n3) / 3).toFixed(2);
}