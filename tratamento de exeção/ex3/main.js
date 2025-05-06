document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formAluno");
    const resultado = document.getElementById("resultado");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      
      try {
        // Obter e validar dados do formulário
        const nome = document.getElementById("nome").value;
        const n1 = document.getElementById("nota1").value;
        const n2 = document.getElementById("nota2").value;
        const n3 = document.getElementById("nota3").value;
  
        // Criar instância do aluno com tratamento de erros
        const aluno = new Aluno(nome, [n1, n2, n3]);
        
        // Calcular média e exibir resultado
        const media = aluno.calcularMedia();
        resultado.textContent = `${aluno.nome} - Média: ${media}`;
        resultado.style.color = "green";
  
      } catch (error) {
        // Exibir mensagens de erro de forma amigável
        resultado.textContent = `: ${error.message}`;

        console.error("Erro no processamento:", error);
      }
    });
  });