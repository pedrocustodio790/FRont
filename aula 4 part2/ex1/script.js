// Função que gera uma saudação personalizada
function saudacao(nome = "Visitante", mensagem = "Bem-vindo!") {
  // Retorna uma string formatada com o nome e a mensagem
  return `Olá, ${nome}! ${mensagem}`;
}

// Função que executa a saudação com base nos inputs do usuário
function executarSaudacao() {
  // Obtém o valor do input de nome e remove espaços em branco
  const nomeInput = document.getElementById("nome").value.trim();
  // Obtém o valor do input de mensagem e remove espaços em branco
  const mensagemInput = document.getElementById("mensagem").value.trim();

  // Define o nome como o valor do input ou undefined se estiver vazio
  const nome = nomeInput || undefined;
  // Define a mensagem como o valor do input ou undefined se estiver vazio
  const mensagem = mensagemInput || undefined;

  // Chama a função saudacao com os parâmetros nome e mensagem
  const resultado = saudacao(nome, mensagem);
  // Exibe o resultado na página
  document.getElementById("resultado").innerText = resultado;
}