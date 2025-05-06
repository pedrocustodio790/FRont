const frutas = [ // Declara um array de objetos que contém informações sobre frutas
  { nome: "Abacate", imagem: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Avocado_DSF4447.jpg" }, // Objeto representando o abacate
  { nome: "Maçã", imagem: "https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg" }, // Objeto representando a maçã
  { nome: "Pera", imagem: "https://upload.wikimedia.org/wikipedia/commons/4/49/Pear_DS.jpg" }, // Objeto representando a pera
  { nome: "Laranja", imagem: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Orange-Fruit-Pieces.jpg" } // Objeto representando a laranja
];

const select = document.getElementById("dropdownFrutas"); // Obtém o elemento select do DOM onde as frutas serão listadas
const imagem = document.getElementById("imagemFruta"); // Obtém o elemento de imagem do DOM para exibir a fruta selecionada
const resultado = document.getElementById("resultado"); // Obtém o elemento onde o resultado será exibido

// Preencher o dropdown com as frutas
frutas.forEach(fruta => { // Itera sobre cada fruta no array
  const option = document.createElement("option"); // Cria um novo elemento option para o dropdown
  option.value = fruta.nome; // Define o valor da opção como o nome da fruta
  option.textContent = fruta.nome; // Define o texto exibido da opção como o nome da fruta
  select.appendChild(option); // Adiciona a opção ao dropdown
});

// Mostrar nome e imagem da fruta selecionada
function mostrarFrutaSelecionada() { // Função para mostrar a fruta selecionada
  const frutaSelecionada = select.value; // Obtém o valor da fruta selecionada no dropdown
  const fruta = frutas.find(f => f.nome === frutaSelecionada); // Busca a fruta correspondente no array

  if (fruta) { // Verifica se a fruta foi encontrada
      resultado.textContent = `Você escolheu: ${fruta.nome}`; // Exibe o nome da fruta escolhida
      imagem.src = fruta.imagem; // Define a fonte da imagem como a imagem da fruta escolhida
      imagem.alt = `Imagem de ${fruta.nome}`; // Define o texto alternativo da imagem
      imagem.style.display = "block"; // Exibe a imagem
  } else { // Se a fruta não for encontrada
      resultado.textContent = ""; // Limpa o texto do resultado
      imagem.style.display = "none"; // Esconde a imagem
  }
}