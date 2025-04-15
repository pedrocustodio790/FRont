// Função que calcula o preço após aplicar um desconto
function calcularDesconto(preco, desconto = 10) {
  // Converte o desconto percentual em decimal
  const descontoDecimal = desconto / 100;
  // Retorna o preço final após aplicar o desconto
  return preco - (preco * descontoDecimal);
}

// Função que mostra o preço com desconto na interface
function mostrarPrecoComDesconto() {
  // Obtém o valor do input de preço e o converte para um número
  const preco = parseFloat(document.getElementById("preco").value);
  // Obtém o valor do input de desconto
  const descontoInput = document.getElementById("desconto").value;
  // Converte o desconto para número ou define como undefined se não houver valor
  const desconto = descontoInput ? parseFloat(descontoInput) : undefined;

  // Verifica se o preço é um número válido e maior que zero
  if (isNaN(preco) || preco <= 0) {
      // Exibe uma mensagem de erro se o preço não for válido
      document.getElementById("resultado").innerText = "Informe um preço válido.";
      return; // Interrompe a execução da função
  }

  // Chama a função calcularDesconto para obter o preço final
  const precoFinal = calcularDesconto(preco, desconto);
  // Exibe o preço final formatado na página
  document.getElementById("resultado").innerText = 
    `Preço com desconto: R$ ${precoFinal.toFixed(2)}`;
}