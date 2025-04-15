// Função principal: recebe uma string e uma função callback
function transformarTexto(texto, callback) {
  return callback(texto); // Chama a função callback passando o texto como argumento
}

// Funções de transformação (callbacks)
function paraMaiusculas(str) {
  return str.toUpperCase(); // Converte a string para letras maiúsculas
}

function paraMinusculas(str) {
  return str.toLowerCase(); // Converte a string para letras minúsculas
}

function inverterTexto(str) {
  return str.split('').reverse().join(''); // Inverte a string dividindo-a em caracteres, revertendo a ordem e juntando novamente
}

// Função para capturar dados da interface e aplicar a transformação
function aplicarTransformacao() {
  const texto = document.getElementById('texto').value; // Captura o valor do campo de texto
  const tipo = document.getElementById('transformacao').value; // Captura o tipo de transformação selecionado
  let resultado = ''; // Inicializa a variável resultado

  switch (tipo) { // Verifica o tipo de transformação selecionado
    case 'maiuscula':
      resultado = transformarTexto(texto, paraMaiusculas); // Aplica a transformação para maiúsculas
      break;
    case 'minuscula':
      resultado = transformarTexto(texto, paraMinusculas); // Aplica a transformação para minúsculas
      break;
    case 'inverter':
      resultado = transformarTexto(texto, inverterTexto); // Aplica a transformação para inverter o texto
      break;
  }

  document.getElementById('resultado').innerText = `Resultado: ${resultado}`; // Exibe o resultado na interface
}
