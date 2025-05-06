const produtos = [];

function exibirMensagem(mensagem, isError = true) {
  const elemento = document.getElementById('mensagem');
  elemento.textContent = mensagem;
  elemento.style.color = isError ? 'red' : 'green';
  setTimeout(() => elemento.textContent = '', 5000);
}

function cadastrarProduto() {
  try {
    const nome = document.getElementById('nome').value;
    const quantidade = document.getElementById('quantidade').value;
    const preco = document.getElementById('preco').value;

    const produto = new Produto(nome, quantidade, preco);
    produtos.push(produto);
    
    // Limpar campos após cadastro
    document.getElementById('nome').value = '';
    document.getElementById('quantidade').value = '';
    document.getElementById('preco').value = '';
    
    atualizarLista();
    exibirMensagem('Produto cadastrado com sucesso!', false);
  } catch (error) {
    exibirMensagem(`Erro ao cadastrar: ${error.message}`);
  }
}

function atualizarEstoque() {
  try {
    const nome = document.getElementById('nomeAtualizar').value;
    const operacao = document.getElementById('operacao').value;
    const quantidade = document.getElementById('quantidadeAtualizar').value;

    if (!operacao) throw new Error('Selecione uma operação');
    
    const produto = produtos.find(p => p.nome === nome);
    if (!produto) throw new Error('esse produto não existe, como o amor paterno que vc recebeu ');

    if (operacao === 'adicionar') {
      produto.adicionar(quantidade);
    } else if (operacao === 'remover') {
      produto.remover(quantidade);
    }
    
    // Limpar campos após atualização
    document.getElementById('nomeAtualizar').value = '';
    document.getElementById('quantidadeAtualizar').value = '';
    
    atualizarLista();
    exibirMensagem('Estoque atualizado com sucesso!', false);
  } catch (error) {
    exibirMensagem(`Erro ao atualizar: ${error.message}`);
  }
}

function atualizarLista() {
  const lista = document.getElementById('listaProdutos');
  lista.innerHTML = '';

  if (produtos.length === 0) {
    lista.innerHTML = '<li>Nenhum produto cadastrado</li>';
    return;
  }

  produtos.forEach(p => {
    const li = document.createElement('li');
    li.innerHTML = `
      <strong>${p.nome}</strong> - 
      Quantidade: ${p.quantidade} - 
      Preço Unitário: R$ ${p.precoUnitario.toFixed(2)} - 
      Total: R$ ${p.calcularValorTotal().toFixed(2)}
    `;
    lista.appendChild(li);
  });
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btnCadastrar').addEventListener('click', cadastrarProduto);
  document.getElementById('btnAtualizar').addEventListener('click', atualizarEstoque);
});