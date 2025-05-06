class Pedido { // Classe que representa um pedido
  constructor() { // Construtor da classe
    this.itens = []; // Inicializa um array vazio para armazenar os itens do pedido
  }

  adicionarItem(nome, quantidade, preco) { // Método para adicionar um item ao pedido
    this.itens.push({ nome, quantidade, preco }); // Adiciona um objeto com as propriedades nome, quantidade e preco ao array de itens
  }

  calcularTotal() { // Método para calcular o total do pedido
    let subtotal = 0; // Inicializa a variável subtotal com zero
    this.itens.forEach(item => { // Itera sobre cada item no array de itens
      subtotal += item.quantidade * item.preco; // Calcula o subtotal multiplicando a quantidade pelo preço de cada item
    });
    const taxa = subtotal * 0.10; // Calcula a taxa de 10% sobre o subtotal
    return subtotal + taxa; // Retorna o total somando o subtotal e a taxa
  }

  limparPedido() { // Método para limpar o pedido
    this.itens = []; // Reinicializa o array de itens para um array vazio
  }

  obterResumo() { // Método para obter um resumo dos itens do pedido
    return this.itens.map(item => // Mapeia cada item para uma string formatada
      `${item.nome} - ${item.quantidade} x R$ ${item.preco.toFixed(2)}` // Formata a string com o nome, quantidade e preço do item
    ).join("\n"); // Junta todas as strings em uma única string, separando-as por nova linha
  }
}