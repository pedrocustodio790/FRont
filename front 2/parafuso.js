document.addEventListener('DOMContentLoaded', () => {
    // Elementos DOM
    const produtoForm = document.getElementById('produtoForm');
    const tabelaProdutos = document.getElementById('tabelaProdutos');
    const valorTotalEstoque = document.getElementById('valorTotalEstoque');
    const editarProdutoModal = new bootstrap.Modal(document.getElementById('editarProdutoModal'));
    const salvarEdicaoBtn = document.getElementById('salvarEdicao');

    // Inicialização
    carregarProdutos();

    // Event Listeners
    produtoForm.addEventListener('submit', handleAdicionarProduto);
    salvarEdicaoBtn.addEventListener('click', handleSalvarEdicao);

    // Funções principais
    function carregarProdutos() {
        const produtos = EstoqueLocal.listar();
        renderizarProdutos(produtos);
        atualizarTotalEstoque();
    }

    function renderizarProdutos(produtos) {
        tabelaProdutos.innerHTML = produtos.map(produto => `
            <tr data-id="${produto.id}">
                <td>${produto.id}</td>
                <td>${produto.nome}</td>
                <td>R$ ${produto.preco.toFixed(2)}</td>
                <td>${produto.quantidade}</td>
                <td>R$ ${produto.calcularTotal().toFixed(2)}</td>
                <td>
                    <button class="btn btn-sm btn-outline-primary btn-action" onclick="editarProduto(${produto.id})">
                        <i class="bi bi-pencil"></i>
                    </button>
                    <button class="btn btn-sm btn-outline-success btn-action" onclick="adicionarEstoque(${produto.id}, 1)">
                        <i class="bi bi-plus"></i>
                    </button>
                    <button class="btn btn-sm btn-outline-warning btn-action" onclick="removerEstoque(${produto.id}, 1)">
                        <i class="bi bi-dash"></i>
                    </button>
                    <button class="btn btn-sm btn-outline-danger btn-action" onclick="removerProduto(${produto.id})">
                        <i class="bi bi-trash"></i>
                    </button>
                </td>
            </tr>
        `).join('');
    }

    function atualizarTotalEstoque() {
        const total = EstoqueLocal.calcularTotalEstoque();
        valorTotalEstoque.textContent = total.toFixed(2);
    }

    function handleAdicionarProduto(e) {
        e.preventDefault();
        
        const nome = document.getElementById('nome').value;
        const preco = document.getElementById('preco').value;
        const quantidade = document.getElementById('quantidade').value;

        if (!nome || !preco || !quantidade) {
            alert('Preencha todos os campos!');
            return;
        }

        const novoProduto = new Produto(null, nome, preco, quantidade);
        EstoqueLocal.adicionar(novoProduto);
        
        produtoForm.reset();
        carregarProdutos();
        
        // Feedback visual
        const submitBtn = produtoForm.querySelector('button[type="submit"]');
        submitBtn.innerHTML = '<i class="bi bi-check2"></i> Salvo!';
        setTimeout(() => {
            submitBtn.innerHTML = '<i class="bi bi-save"></i> Salvar';
        }, 2000);
    }

    // Funções globais (para chamada nos botões)
    window.editarProduto = function(id) {
        const produto = EstoqueLocal.listar().find(p => p.id === id);
        if (produto) {
            document.getElementById('editarId').value = produto.id;
            document.getElementById('editarNome').value = produto.nome;
            document.getElementById('editarPreco').value = produto.preco;
            document.getElementById('editarQuantidade').value = produto.quantidade;
            editarProdutoModal.show();
        }
    };

    window.adicionarEstoque = function(id, quantidade) {
        EstoqueLocal.adicionarEstoque(id, quantidade);
        carregarProdutos();
    };

    window.removerEstoque = function(id, quantidade) {
        EstoqueLocal.removerEstoque(id, quantidade);
        carregarProdutos();
    };

    window.removerProduto = function(id) {
        if (confirm('Tem certeza que deseja remover este produto?')) {
            EstoqueLocal.remover(id);
            carregarProdutos();
        }
    };

    function handleSalvarEdicao() {
        const id = parseInt(document.getElementById('editarId').value);
        const nome = document.getElementById('editarNome').value;
        const preco = parseFloat(document.getElementById('editarPreco').value);
        const quantidade = parseInt(document.getElementById('editarQuantidade').value);

        const produtoAtualizado = new Produto(id, nome, preco, quantidade);
        EstoqueLocal.atualizar(produtoAtualizado);
        
        editarProdutoModal.hide();
        carregarProdutos();
    }
});