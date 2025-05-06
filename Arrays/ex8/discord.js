const filmes = []; // Inicializa um array vazio para armazenar os filmes cadastrados.

function cadastrarFilme() {
  const titulo = document.getElementById("titulo").value; // Obtém o título do filme do campo de entrada.
  const ano = parseInt(document.getElementById("ano").value); // Obtém o ano do filme e converte para um número inteiro.
  const classificacao = document.getElementById("classificacao").value; // Obtém a classificação do filme do campo de entrada.

  // Verifica se o título está vazio ou se o ano não é um número válido.
  if (!titulo || isNaN(ano)) {
    alert("Preencha todos os campos corretamente!"); // Exibe um alerta se os campos não estiverem preenchidos corretamente.
    return; // Interrompe a execução da função se a validação falhar.
  }

  // Adiciona um novo objeto filme ao array filmes.
  filmes.push({ titulo, ano, classificacao });
  exibirFilmes(filmes); // Chama a função para exibir a lista atualizada de filmes.
  limparCampos(); // Chama a função para limpar os campos de entrada.
}

function exibirFilmes(lista) {
  const ul = document.getElementById("listaFilmes"); // Obtém a referência ao elemento <ul> onde os filmes serão exibidos.
  ul.innerHTML = ""; // Limpa a lista de filmes exibida.

  // Verifica se a lista de filmes está vazia.
  if (lista.length === 0) {
    ul.innerHTML = "<li>Nenhum filme encontrado.</li>"; // Exibe uma mensagem se não houver filmes.
    return; // Interrompe a execução da função se não houver filmes.
  }

  // Itera sobre cada filme na lista e cria um item de lista para cada um.
  lista.forEach(filme => {
    const li = document.createElement("li"); // Cria um novo elemento <li> para o filme.
    li.textContent = `${filme.titulo} - ${filme.ano} - Classificação: ${filme.classificacao}`; // Define o texto do item de lista.
    ul.appendChild(li); // Adiciona o item de lista ao elemento <ul>.
  });
}

function limparCampos() {
  // Limpa os campos de entrada para permitir um novo cadastro.
  document.getElementById("titulo").value = ""; // Limpa o campo de título.
  document.getElementById("ano").value = ""; // Limpa o campo de ano.
  document.getElementById("classificacao").value = "Livre"; // Reseta a classificação para o valor padrão "Livre".
}

function filtrarPorClassificacao() {
  const filtro = document.getElementById("filtroClassificacao").value; // Obtém o valor do filtro de classificação.
  // Filtra a lista de filmes com base na classificação selecionada.
  const filtrados = filtro ? filmes.filter(f => f.classificacao === filtro) : filmes; 
  exibirFilmes(filtrados); // Chama a função para exibir a lista filtrada de filmes.
}

function filtrarPorAno() {
  const ano = parseInt(document.getElementById("filtroAno").value); // Obtém o ano do filtro e converte para um número inteiro.
  // Filtra a lista de filmes com base no ano selecionado.
  const filtrados = !isNaN(ano) ? filmes.filter(f => f.ano === ano) : filmes; 
  exibirFilmes(filtrados); // Chama a função para exibir a lista filtrada de filmes.
}