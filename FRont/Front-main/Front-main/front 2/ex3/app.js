document.addEventListener('DOMContentLoaded', () => {
    // Elementos DOM
    const itemSelect = document.getElementById('itemSelect');
    const quantidadeInput = document.getElementById('quantidade');
    const adicionarItemBtn = document.getElementById('adicionarItem');
    const itensPedidoTbody = document.getElementById('itensPedido');
    const totalPedidoSpan = document.getElementById('totalPedido');
    const finalizarPedidoBtn = document.getElementById('finalizarPedido');
    const listaPedidosDiv = document.getElementById('listaPedidos');
    const historicoPedidosDiv = document.getElementById('historicoPedidos');
    const modalTotalSpan = document.getElementById('modalTotal');
    const confirmarPedidoBtn = document.getElementById('confirmarPedido');
    
    const cardapio = {
        1: { nome: 'Hambúrguer Clássico', preco: 25.00 },
        2: { nome: 'Pizza Margherita', preco: 45.00 },
        3: { nome: 'Salada Caesar', preco: 18.00 },
        4: { nome: 'Refrigerante', preco: 8.00 },
        5: { nome: 'Sobremesa', preco: 12.00 }
    };

    // Estado da aplicação
    let pedidoAtual = new Pedido();
    const historicoPedidos = [];

    // Modal Bootstrap
    const confirmacaoModal = new bootstrap.Modal(document.getElementById('confirmacaoModal'));

    // Event Listeners
    adicionarItemBtn.addEventListener('click', adicionarItemAoPedido);
    finalizarPedidoBtn.addEventListener('click', mostrarConfirmacao);
    confirmarPedidoBtn.addEventListener('click', finalizarPedido);

    // Funções
    function adicionarItemAoPedido() {
        const itemId = itemSelect.value;
        const quantidade = parseInt(quantidadeInput.value);

        if (!itemId || isNaN(quantidade)) {
            alert('Selecione um item e informe a quantidade!');
            return;
        }

        const itemCardapio = cardapio[itemId];
        const item = new ItemPedido(
            itemId,
            itemCardapio.nome,
            itemCardapio.preco,
            quantidade
        );

        pedidoAtual.adicionarItem(item);
        atualizarPedido();
        itemSelect.value = '';
        quantidadeInput.value = 1;
    }

    function atualizarPedido() {
        itensPedidoTbody.innerHTML = pedidoAtual.itens.map(item => `
            <tr class="pedido-item" data-id="${item.id}">
                <td>${item.nome}</td>
                <td>${item.quantidade}</td>
                <td>R$ ${item.preco.toFixed(2)}</td>
                <td>R$ ${item.calcularSubtotal().toFixed(2)}</td>
                <td>
                    <button class="btn btn-sm btn-outline-primary btn-action" onclick="aumentarQuantidade('${item.id}')">
                        +
                    </button>
                    <button class="btn btn-sm btn-outline-warning btn-action" onclick="diminuirQuantidade('${item.id}')">
                        -
                    </button>
                    <button class="btn btn-sm btn-outline-danger btn-action" onclick="removerItem('${item.id}')">
                        ×
                    </button>
                </td>
            </tr>
        `).join('');

        totalPedidoSpan.textContent = pedidoAtual.calcularTotal().toFixed(2);
    }

    function mostrarConfirmacao() {
        if (pedidoAtual.itens.length === 0) {
            alert('Adicione itens ao pedido antes de finalizar!');
            return;
        }

        modalTotalSpan.textContent = pedidoAtual.calcularTotal().toFixed(2);
        confirmacaoModal.show();
    }

    function finalizarPedido() {
        const pedidoFinalizado = pedidoAtual.finalizar();
        historicoPedidos.push(pedidoFinalizado);
        
        // Adicionar ao histórico
        const pedidoElement = document.createElement('div');
        pedidoElement.className = 'list-group-item';
        pedidoElement.innerHTML = `
            <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">Pedido #${pedidoFinalizado.id}</h5>
                <small>${pedidoFinalizado.data.toLocaleString()}</small>
            </div>
            <p class="mb-1">${pedidoFinalizado.itens.length} itens</p>
            <div class="d-flex justify-content-between">
                <small>${pedidoFinalizado.itens.map(i => i.nome).join(', ')}</small>
                <strong>R$ ${pedidoFinalizado.total.toFixed(2)}</strong>
            </div>
        `;
        
        listaPedidosDiv.prepend(pedidoElement);
        historicoPedidosDiv.style.display = 'block';
        
        // Resetar pedido atual
        pedidoAtual = new Pedido();
        atualizarPedido();
        confirmacaoModal.hide();
    }

    // Funções globais para os botões de ação
    window.aumentarQuantidade = function(id) {
        const item = pedidoAtual.itens.find(i => i.id === id);
        if (item) {
            item.aumentarQuantidade();
            atualizarPedido();
        }
    };

    window.diminuirQuantidade = function(id) {
        const item = pedidoAtual.itens.find(i => i.id === id);
        if (item) {
            item.diminuirQuantidade();
            if (item.quantidade === 0) {
                pedidoAtual.removerItem(id);
            }
            atualizarPedido();
        }
    };

    window.removerItem = function(id) {
        pedidoAtual.removerItem(id);
        atualizarPedido();
    };
});