const alunos = []; // Inicializa um array vazio para armazenar os alunos.

function cadastrarAluno() {
  const nome = document.getElementById("nome").value; // Obtém o nome do aluno do campo de entrada.
  const nota1 = parseFloat(document.getElementById("nota1").value); // Converte a nota1 para um número decimal.
  const nota2 = parseFloat(document.getElementById("nota2").value); // Converte a nota2 para um número decimal.
  const nota3 = parseFloat(document.getElementById("nota3").value); // Converte a nota3 para um número decimal.

  // Verifica se todos os campos foram preenchidos corretamente.
  if (!nome || isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
    alert("Preencha todos os campos corretamente."); // Exibe um alerta se algum campo estiver incorreto.
    return; // Interrompe a execução da função se os campos não estiverem corretos.
  }

  const media = (nota1 + nota2 + nota3) / 3; // Calcula a média das notas.
  alunos.push({ nome, notas: [nota1, nota2, nota3], media }); // Adiciona o aluno e suas notas ao array.

  exibirListas(); // Chama a função para exibir a lista de alunos.
  limparCampos(); // Chama a função para limpar os campos de entrada.
}

function exibirListas() {
  const aprovados = alunos.filter(a => a.media >= 7); // Filtra os alunos aprovados com média maior ou igual a 7.
  const reprovados = alunos.filter(a => a.media < 7); // Filtra os alunos reprovados com média menor que 7.

  const listaAprovados = document.getElementById("listaAprovados"); // Obtém o elemento da lista de aprovados.
  const listaReprovados = document.getElementById("listaReprovados"); // Obtém o elemento da lista de reprovados.

  listaAprovados.innerHTML = ""; // Limpa a lista de aprovados antes de exibir os novos dados.
  listaReprovados.innerHTML = ""; // Limpa a lista de reprovados antes de exibir os novos dados.

  // Adiciona cada aluno aprovado à lista de aprovados.
  aprovados.forEach(a => {
    const li = document.createElement("li"); // Cria um novo elemento de lista.
    li.className = "aprovado"; // Define a classe do elemento como "aprovado".
    li.textContent = `${a.nome} - Média: ${a.media.toFixed(2)}`; // Define o texto do elemento com o nome e a média do aluno.
    listaAprovados.appendChild(li); // Adiciona o elemento à lista de aprovados.
  });

  // Adiciona cada aluno reprovado à lista de reprovados.
  reprovados.forEach(a => {
    const li = document.createElement("li"); // Cria um novo elemento de lista.
    li.className = "reprovado"; // Define a classe do elemento como "reprovado".
    li.textContent = `${a.nome} - Média: ${a.media.toFixed(2)}`; // Define o texto do elemento com o nome e a média do aluno.
    listaReprovados.appendChild(li); // Adiciona o elemento à lista de reprovados.
  });
}

function limparCampos() {
  document.getElementById("nome").value = ""; // Limpa o campo de entrada do nome.
  document.getElementById("nota1").value = ""; // Limpa o campo de entrada da nota1.
  document.getElementById("nota2").value = ""; // Limpa o campo de entrada da nota2.
  document.getElementById("nota3").value = ""; // Limpa o campo de entrada da nota3.
}