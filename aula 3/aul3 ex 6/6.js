function contarVogais() {
  const frase = document.getElementById('frase').value.toLowerCase(); // Pega a frase e converte para minúsculas
  const vogais = ['a', 'e', 'i', 'o', 'u']; // Array com as vogais
  let contador = 0; // Variável para contar as vogais

  // Percorre cada caractere da frase
  for (let i = 0; i < frase.length; i++) { // Loop para iterar sobre cada caractere da frase
    const letra = frase[i]; // Pega o caractere atual
    if (vogais.includes(letra)) { // Verifica se é uma vogal
      contador++; // Incrementa o contador se for vogal
    }
  }

  // Exibe o resultado na tela
  document.getElementById('resultado').textContent = `Número de vogais: ${contador}`; // Mostra o número total de vogais encontradas
}