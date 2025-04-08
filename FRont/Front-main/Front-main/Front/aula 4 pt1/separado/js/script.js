function verificarfunção() {
  // @ts-ignore
  let raizvalor = parseFloat(document.getElementById('raiz').value);
  let exponencialvalor = parseFloat(
    // @ts-ignore
    document.getElementById('exponencial').value
  );
  let resultado = document.getElementById('saida');

  const valoraiz = function (raizvalor) {
    return Math.sqrt(raizvalor);
  };
  const valorexponencial = function (exponencialvalor) {
    return Math.pow(exponencialvalor, 2);
  };
  let saida = document.getElementById('resultado');
  if (saida !== null) {
    saida.textContent = `Raiz: ${valoraiz(
      raizvalor
    )} Exponencial: ${valorexponencial(exponencialvalor)}`;
  }
}
