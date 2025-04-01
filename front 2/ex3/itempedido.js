class ItemPedido {
    constructor(id, nome, preco, quantidade) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    calcularSubtotal() {
        return this.preco * this.quantidade;
    }

    aumentarQuantidade(qtd = 1) {
        this.quantidade += qtd;
    }

    diminuirQuantidade(qtd = 1) {
        this.quantidade = Math.max(0, this.quantidade - qtd);
    }
}