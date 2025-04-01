class Pedido {
    constructor() {
        this.itens = [];
        this.data = new Date();
        this.id = Date.now();
    }

    adicionarItem(item) {
        const itemExistente = this.itens.find(i => i.id === item.id);
        
        if (itemExistente) {
            itemExistente.aumentarQuantidade(item.quantidade);
        } else {
            this.itens.push(item);
        }
    }

    removerItem(id) {
        this.itens = this.itens.filter(item => item.id !== id);
    }

    calcularTotal() {
        return this.itens.reduce((total, item) => total + item.calcularSubtotal(), 0);
    }

    finalizar() {
        return {
            id: this.id,
            data: this.data,
            itens: [...this.itens],
            total: this.calcularTotal()
        };
    }
}