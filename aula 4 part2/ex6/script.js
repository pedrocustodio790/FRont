// Função que calcula o imposto sobre um valor
const calcularImposto = (valor, porcentagem) => valor * (porcentagem / 100); 

// Função que exibe o total com imposto incluído
function exibirTotalComImposto(valor, porcentagem) {
  // Calcula o imposto com base no valor e porcentagem fornecidos
  const imposto = calcularImposto(valor, porcentagem); 
  // Calcula o total somando o valor e o imposto
  const total = valor + imposto; 
  return { // Retorna um objeto com o valor, imposto e total
    valor,
    imposto,
    total
  };
}

// Função que realiza o cálculo e exibe os resultados
function calcular() {
  // Obtém os valores dos campos de entrada e os converte para float
  const valor = parseFloat(document.getElementById("valor").value); 
  const porcentagem = parseFloat(document.getElementById("porcentagem").value); 

  // Verifica se algum dos valores não é um número
  if (isNaN(valor) || isNaN(porcentagem)) {
    // Exibe mensagem de erro se os valores não forem válidos
    document.getElementById("resultado").innerText = "Preencha os dois campos corretamente."; 
    return; // Interrompe a execução da função
  }

  // Chama a função para calcular o total com imposto
  const resultado = exibirTotalComImposto(valor, porcentagem); 

  // Exibe os resultados formatados
  document.getElementById("resultado").innerText =
    `Valor da compra: R$ ${resultado.valor.toFixed(2)}\n` + 
    `Imposto (${porcentagem}%): R$ ${resultado.imposto.toFixed(2)}\n` + 
    `Total a pagar: R$ ${resultado.total.toFixed(2)}`; 
}