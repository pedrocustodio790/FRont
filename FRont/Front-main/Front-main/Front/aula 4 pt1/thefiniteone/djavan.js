function verificar() {
  // @ts-ignore
  let nome = document.getElementById('nome').value;
  // @ts-ignore
  let mensagem = document.getElementById('mensagem').value;
  let mensagemexibida = document.getElementById('mensagemexibida');

  if (mensagemexibida) {
    if (nome && mensagem) {
      mensagemexibida.textContent = `Olá, ${nome}! ${mensagem}`;
    } else {
      mensagemexibida.textContent = 'Olá Visitante! Seja bem-vindo!';
    }
  }
}
