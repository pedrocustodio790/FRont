function obterNumeros() {
  let entradaNum1 = document.getElementById('num1');
  let entradaNum2 = document.getElementById('num2');

  if (
    entradaNum1 instanceof HTMLInputElement &&
    entradaNum2 instanceof HTMLInputElement
  ) {
    let num1 = parseInt(entradaNum1.value);
    let num2 = +entradaNum2.value;

    return { num1, num2 };
  }
  return { num1: 0, num2: 0 };
}

const raiz = function (num1) {
  return Math.sqrt(num1);
};
const Exponencial = function (num1) {
  // @ts-ignore
  return Math.pow(num1);
};
function exibirResultado(resultado) {
  let saida = document.getElementById('resultado');
  if (saida instanceof HTMLElement) {
    saida.textContent = resultado;
  }
}
