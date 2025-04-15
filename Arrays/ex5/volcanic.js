// Array com as frutas
const frutas = ["Abacate", "Maçã", "Pera", "Laranja"]; // Declara um array contendo diferentes tipos de frutas
const select = document.getElementById("dropdownFrutas"); // Obtém o elemento select do DOM pelo seu ID

// Preenchendo o select com opções do array
frutas.forEach(fruta => { // Itera sobre cada fruta no array
  const option = document.createElement("option"); // Cria um novo elemento option para o select
  option.value = fruta; // Define o valor da opção como o nome da fruta
  option.textContent = fruta; // Define o texto exibido da opção como o nome da fruta
  select.appendChild(option); // Adiciona a nova opção ao elemento select
});

// Função que mostra a fruta selecionada
function mostrarFrutaSelecionada() { // Define uma função para mostrar a fruta escolhida
  const frutaEscolhida = select.value; // Obtém o valor da fruta selecionada no select
  document.getElementById("resultado").textContent = `Você escolheu: ${frutaEscolhida}`; // Exibe a fruta escolhida no elemento com ID "resultado"
}