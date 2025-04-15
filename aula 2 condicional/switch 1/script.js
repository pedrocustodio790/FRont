// Função do exercício 1: mostrar estação do ano com base no número
function mostrarEstacao() {
    const numero = parseInt(document.getElementById('estacao').value); // Pega o valor do input e converte para número
    let mensagem = ''; // Variável para armazenar a mensagem final
  
    // Utiliza switch para identificar a estação correspondente
    switch (numero) {
      case 1:
        mensagem = "Primavera: estação das flores e do clima ameno.";
        break;
      case 2:
        mensagem = "Verão: dias quentes e ensolarados.";
        break;
      case 3:
        mensagem = "Outono: folhas caem e o clima começa a esfriar.";
        break;
      case 4:
        mensagem = "Inverno: estação fria, ideal para bebidas quentes.";
        break;
      default:
        mensagem = "Número inválido. Digite um número entre 1 e 4.";
    }
  
    document.getElementById('resultado-estacao').textContent = mensagem; // Mostra a mensagem na tela
  }
  