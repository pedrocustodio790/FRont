function invertir(textinput, callback) {
  let entrada = textinput.split('').reverse().join('');
  callback(entrada);
}

function exibirtexto(textinput) {
  let saida = document.getElementById('saida');
  if (saida !== null) {
    saida.textContent = textinput;
  }
}
