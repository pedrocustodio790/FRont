const produtos = []; // Array para armazenar os produtos adicionados
let produtosFiltrados = []; // Array para armazenar os produtos filtrados

function adicionarProduto() {
  const nome = document.getElementById('nomeProduto').value.trim(); // Obtém o nome do produto e remove espaços em branco
  const preco = parseFloat(document.getElementById('precoProduto').value); // Obtém o preço do produto e converte para número
  const categoria = document.getElementById('categoriaProduto').value.trim(); // Obtém a categoria do produto e remove espaços em branco

  // Verifica se todos os campos foram preenchidos corretamente
  if (!nome || isNaN(preco) || !categoria) {
    alert("Preencha todos os campos corretamente."); // Alerta o usuário se algum campo estiver vazio ou inválido
    return; // Interrompe a execução da função
  }

  produtos.push({ nome, preco, categoria }); // Adiciona o novo produto ao array de produtos
  limparCampos(); // Chama a função para limpar os campos de entrada
  atualizarLista(); // Atualiza a lista de produtos exibida
}

function limparCampos() {
  // Limpa os campos de entrada de dados
  document.getElementById('nomeProduto').value = ''; // Limpa o campo de nome do produto
  document.getElementById('precoProduto').value = ''; // Limpa o campo de preço do produto
  document.getElementById('categoriaProduto').value = ''; // Limpa o campo de categoria do produto
}

function atualizarLista() {
  const container = document.getElementById('listaProdutos'); // Obtém o elemento onde a lista de produtos será exibida
  container.innerHTML = ""; // Limpa o conteúdo atual do container

  // Itera sobre cada produto e adiciona à lista
  produtos.forEach((produto, index) => {
    container.innerHTML += `
      <div class="produto">
        <strong>${produto.nome}</strong><br>
        Preço: R$ ${produto.preco.toFixed(2)}<br>
        Categoria: ${produto.categoria} // Corrigido de 'category' para 'categoria'
      </div>
    `;
  });
}

function filtrarProdutos() {
  const nomeFiltro = document.getElementById('filtroNome').value.trim().toLowerCase(); // Obtém o filtro de nome e converte para minúsculas
  const categoriaFiltro = document.getElementById('filtroCategoria').value.trim().toLowerCase(); // Obtém o filtro de categoria e converte para minúsculas

  // Filtra os produtos com base nos critérios fornecidos
  produtosFiltrados = produtos.filter(p =>
    (nomeFiltro === "" || p.nome.toLowerCase().includes(nomeFiltro)) && // Verifica se o nome do produto inclui o filtro
    (categoriaFiltro === "" || p.categoria.toLowerCase().includes(categoriaFiltro)) // Verifica se a categoria do produto inclui o filtro
  );

  exibirFiltrados(); // Chama a função para exibir os produtos filtrados
}

function exibirFiltrados() {
  const container = document.getElementById('produtosFiltrados'); // Obtém o elemento onde os produtos filtrados serão exibidos
  container.innerHTML = ""; // Limpa o conteúdo atual do container

  // Verifica se há produtos filtrados
  if (produtosFiltrados.length === 0) {
    container.innerHTML = "<p>Nenhum produto encontrado com os filtros informados.</p>"; // Mensagem caso não haja produtos filtrados
    return; // Interrompe a execução da função
  }

  // Itera sobre cada produto filtrado e adiciona à lista
  produtosFiltrados.forEach((produto) => {
    container.innerHTML += `
      <div class="produto">
        <strong>${produto.nome}</strong><br>
        Preço: R$ ${produto.preco.toFixed(2)}<br>
        Categoria: ${produto.categoria} // Exibe a categoria do produto
      </div>
    `;
  });
}

function removerFiltrados() {
  // Verifica se há produtos filtrados para remover
  if (produtosFiltrados.length === 0) {
    alert("Não há produtos filtrados para remover."); // Alerta o usuário se não houver produtos filtrados
    return; // Interrompe a execução da função
  }

  // Itera sobre cada produto filtrado e remove do array de produtos
  produtosFiltrados.forEach(pf => {
    const index = produtos.findIndex(p =>
      p.nome === pf.nome && // Verifica se o nome do produto corresponde
      p.preco === pf.preco && // Verifica se o preço do produto corresponde
      p.categoria === pf.categoria // Verifica se a categoria do produto corresponde
    );
    if (index !== -1) {
      produtos.splice(index, 1); // Remove o produto do array de produtos
    }
  });

  produtosFiltrados = []; // Limpa o array de produtos filtrados
  atualizarLista(); // Atualiza a lista de produtos exibida
  exibirFiltrados(); // Atualiza a exibição dos produtos filtrados
}