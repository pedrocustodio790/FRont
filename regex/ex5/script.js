function validarEmail() {
    const entrada = document.getElementById("email").value.trim();
    const saida = document.getElementById("saida");
  
    // Expressão regular conforme as regras
    const regex = /^[a-zA-Z0-9._%+-]+@(gmail|hotmail|outlook|yahoo)\.(com|com\.br|org)$/i;
  
    // Verificações extras (opcional, pois o regex já cobre)
    const possuiArroba = entrada.includes("@");
    const terminaComValido = (
      entrada.endsWith(".com") ||
      entrada.endsWith(".com.br") ||
      entrada.endsWith(".org")
    );
  
    // Validação final
    if (regex.test(entrada) && possuiArroba && terminaComValido) {
      saida.textContent = "✅ E-mail válido!";
      saida.className = "valid";
    } else {
      saida.textContent = "❌ E-mail inválido! Domínios válidos: gmail, hotmail, outlook, yahoo. TLDs permitidos: .com, .com.br, .org.";
      saida.className = "invalid";
    }
  }
  