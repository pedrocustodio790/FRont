class Aluno {
    constructor(nome, idade, matricula, nota) {
      if (!nome || !matricula || idade <= 0) {
        throw new Error("Todos os campos devem ser preenchidos corretamente.");
      }
  
      if (nota < 0 || nota > 10) {
        throw new Error("Nota deve estar entre 0 e 10.");
      }
  
      this.nome = nome;
      this.idade = idade;
      this.matricula = matricula;
      this.nota = nota;
    }
  
    atualizarNota(novaNota) {
      if (novaNota < 0 || novaNota > 10) {
        throw new Error("Nota deve estar entre 0 e 10.");
      }
      this.nota = novaNota;
    }
  }
  
  const alunos = [];
  
  document.getElementById("formAluno").addEventListener("submit", function (e) {
    e.preventDefault();
    try {
      const nome = document.getElementById("nome").value.trim();
      const idade = parseInt(document.getElementById("idade").value);
      const matricula = document.getElementById("matricula").value.trim();
      const nota = parseFloat(document.getElementById("nota").value);
  
      const novoAluno = new Aluno(nome, idade, matricula, nota);
      alunos.push(novoAluno);
      listarAlunos();
      this.reset();
    } catch (erro) {
      alert(erro.message);
    }
  });
  
  function listarAlunos() {
    const lista = document.getElementById("listaAlunos");
    lista.innerHTML = "";
  
    alunos.forEach((aluno, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <strong>${aluno.nome}</strong> | Idade: ${aluno.idade} | Matrícula: ${aluno.matricula} | Nota: ${aluno.nota}
        <button onclick="atualizarNotaPrompt(${index})">Atualizar Nota</button>
      `;
      lista.appendChild(li);
    });
  }
  
  function atualizarNotaPrompt(index) {
    const novaNota = parseFloat(prompt("Digite a nova nota (0-10):"));
    try {
      alunos[index].atualizarNota(novaNota);
      listarAlunos();
    } catch (erro) {
      alert(erro.message);
    }
  }
  