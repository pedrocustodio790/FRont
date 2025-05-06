document.addEventListener('DOMContentLoaded', function() {
  // Seleciona os elementos do DOM
  const verificarBtn = document.getElementById('verificarBtn');
  const palavraInput = document.getElementById('palavra');
  
  // Adiciona o event listener de forma programática
  verificarBtn.addEventListener('click', verificarPalindromo);
  
  function verificarPalindromo() {
      // Obtém e trata o valor do input
      const palavra = palavraInput.value.toLowerCase();
      const limpa = palavra.normalize("NFD")
                          .replace(/[\u0300-\u036f]/g, "")
                          .replace(/\s/g, "");
      
      // Verifica se o campo está vazio
      if (!limpa) {
          alert("Por favor, digite uma palavra!");
          return;
      }
      
      // Inverte a string e verifica se é palíndromo
      const invertida = limpa.split("").reverse().join("");
      const resultado = limpa === invertida ? "É um palíndromo!" : "Não é um palíndromo.";
      
      // Exibe o resultado
      alert(resultado);
      
      // Limpa o campo após a verificação (opcional)
      palavraInput.value = '';
      palavraInput.focus();
  }
});