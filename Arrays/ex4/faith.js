function adicionarItem() {
  const input = document.getElementById("novoItem"); // Obtém o elemento de entrada pelo ID
  const valor = input.value.trim(); // Remove espaços em branco do valor inserido

  if (valor === "") { // Verifica se o valor está vazio
    alert("Digite um item válido."); // Alerta o usuário para inserir um item
    return; // Interrompe a execução da função se o valor for vazio
  }

  const container = document.getElementById("lista"); // Obtém o contêiner da lista pelo ID

  // Cria o item com checkbox
  const div = document.createElement("div"); // Cria um novo elemento div
  div.className = "item"; // Define a classe do div como "item"

  const checkbox = document.createElement("input"); // Cria um novo elemento de entrada
  checkbox.type = "checkbox"; // Define o tipo do input como checkbox

  const label = document.createElement("label"); // Cria um novo elemento de rótulo
  label.textContent = " " + valor; // Define o texto do rótulo como o valor inserido

  div.appendChild(checkbox); // Adiciona o checkbox à div
  div.appendChild(label); // Adiciona o rótulo à div

  container.appendChild(div); // Adiciona a div ao contêiner da lista

  input.value = ""; // Limpa o campo de entrada após adicionar o item
  input.focus();    // Coloca o foco de volta no campo de texto
}

function removerSelecionados() {
  const container = document.getElementById("lista"); // Obtém o contêiner da lista pelo ID
  const itens = container.querySelectorAll(".item"); // Seleciona todos os itens dentro do contêiner

  itens.forEach(item => { // Itera sobre cada item
    const checkbox = item.querySelector("input[type='checkbox']"); // Seleciona o checkbox do item
    if (checkbox.checked) { // Verifica se o checkbox está marcado
      container.removeChild(item); // Remove o item do contêiner se estiver marcado
    }
  });
}
