class Produto {
    constructor(id, nome, preco, quantidade) {
        this.id = id || Date.now();
        this.nome = nome;
        this.preco = parseFloat(preco);
        this.quantidade = parseInt(quantidade);
    }

    calcularTotal() {
        return this.preco * this.quantidade;
    }

    toJSON() {
        return {
            id: this.id,
            nome: this.nome,
            preco: this.preco,
            quantidade: this.quantidade
        };
    }

    static fromJSON(json) {
        return new Produto(json.id, json.nome, json.preco, json.quantidade);
    }
}

class EstoqueLocal {
    static STORAGE_KEY = 'estoque_app_produtos';

    static listar() {
        const dados = localStorage.getItem(this.STORAGE_KEY);
        return dados ? JSON.parse(dados).map(Produto.fromJSON) : [];
    }

    static salvar(produtos) {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(produtos));
    }

    static adicionar(produto) {
        const produtos = this.listar();
        produtos.push(produto);
        this.salvar(produtos);
    }

    static atualizar(produtoAtualizado) {
        const produtos = this.listar();
        const index = produtos.findIndex(p => p.id === produtoAtualizado.id);
        if (index !== -1) {
            produtos[index] = produtoAtualizado;
            this.salvar(produtos);
        }
    }

    static remover(id) {
        const produtos = this.listar().filter(p => p.id !== id);
        this.salvar(produtos);
    }

    static adicionarEstoque(id, quantidade) {
        const produtos = this.listar();
        const produto = produtos.find(p => p.id === id);
        if (produto) {
            produto.quantidade += parseInt(quantidade);
            this.salvar(produtos);
        }
    }

    static removerEstoque(id, quantidade) {
        const produtos = this.listar();
        const produto = produtos.find(p => p.id === id);
        if (produto) {
            produto.quantidade = Math.max(0, produto.quantidade - parseInt(quantidade));
            this.salvar(produtos);
        }
    }

    static calcularTotalEstoque() {
        return this.listar().reduce((total, p) => total + p.calcularTotal(), 0);
    }
}