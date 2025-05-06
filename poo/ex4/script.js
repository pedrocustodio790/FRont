let veiculos = []; // Inicializa um array vazio para armazenar os veículos.

function registrarVeiculo() {
  const placa = document.getElementById("placa").value.trim().toUpperCase(); // Obtém e formata a placa do veículo.
  const modelo = document.getElementById("modelo").value.trim(); // Obtém e formata o modelo do veículo.
  const tempo = parseFloat(document.getElementById("tempo").value); // Obtém e converte o tempo para um número.

  // Verifica se todos os campos foram preenchidos corretamente.
  if (!placa || !modelo || isNaN(tempo) || tempo <= 0) {
    alert("Preencha todos os campos corretamente."); // Exibe um alerta se os campos estiverem incorretos.
    return; // Interrompe a execução da função se os campos estiverem inválidos.
  }

  const veiculo = new Veiculo(placa, modelo, tempo); // Cria uma nova instância de Veiculo.
  veiculos.push(veiculo); // Adiciona o veículo ao array de veículos.
  atualizarLista(); // Atualiza a lista exibida na interface.
  limparCampos(); // Limpa os campos de entrada após o registro.
}

function atualizarLista(listaFiltrada = veiculos) {
  const lista = document.getElementById("listaVeiculos"); // Obtém o elemento da lista de veículos.
  lista.innerHTML = ""; // Limpa a lista antes de atualizá-la.

  // Itera sobre cada veículo na lista filtrada.
  listaFiltrada.forEach((v, index) => {
    const li = document.createElement("li"); // Cria um novo item de lista.
    li.textContent = v.getDetalhes(); // Define o texto do item como os detalhes do veículo.
    const btnExcluir = document.createElement("button"); // Cria um botão para excluir o veículo.
    btnExcluir.textContent = "Excluir"; // Define o texto do botão.
    btnExcluir.onclick = () => excluirVeiculo(v.placa); // Define a ação do botão para excluir o veículo.
    li.appendChild(btnExcluir); // Adiciona o botão ao item de lista.
    lista.appendChild(li); // Adiciona o item de lista à lista de veículos.
  });
}

function limparCampos() {
  document.getElementById("placa").value = ""; // Limpa o campo de entrada da placa.
  document.getElementById("modelo").value = ""; // Limpa o campo de entrada do modelo.
  document.getElementById("tempo").value = ""; // Limpa o campo de entrada do tempo.
}

function filtrarPorPlaca() {
  const busca = document.getElementById("filtroPlaca").value.trim().toUpperCase(); // Obtém e formata a busca pela placa.
  const filtrados = veiculos.filter(v => v.placa.includes(busca)); // Filtra os veículos que contêm a placa buscada.
  atualizarLista(filtrados); // Atualiza a lista com os veículos filtrados.
}

function excluirVeiculo(placa) {
  veiculos = veiculos.filter(v => v.placa !== placa); // Remove o veículo com a placa especificada do array.
  atualizarLista(); // Atualiza a lista após a exclusão.
}
