document.addEventListener("DOMContentLoaded", () => {
  // Obtém o formulário e o elemento onde o resultado será exibido
  const form = document.getElementById("formAluno");
  const resultado = document.getElementById("resultado");

  form.addEventListener("submit", (event) => {
      // Previne o comportamento padrão do formulário
      event.preventDefault();

      // Obtém e limpa os valores das notas e do nome
      const nome = document.getElementById("nome").value.trim();
      const n1 = parseFloat(document.getElementById("nota1").value);
      const n2 = parseFloat(document.getElementById("nota2").value);
      const n3 = parseFloat(document.getElementById("nota3").value);

      // Valida se as notas estão corretas
      if (!validarNota(n1) || !validarNota(n2) || !validarNota(n3)) {
          alert("Todas as notas devem ser números entre 0 e 10.");
          return; // Interrompe a execução se as notas forem inválidas
      }

      // Calcula a média e exibe o resultado
      const media = calcularMedia(n1, n2, n3);
      resultado.textContent = `${nome} - Média: ${media}`;
  });
});