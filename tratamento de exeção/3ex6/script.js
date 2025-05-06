document.getElementById("formUsuario").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const nome = document.getElementById("nome").value.trim();
    const cpf = document.getElementById("cpf").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;
  
    try {
      validarNome(nome);
      validarCPF(cpf);
      validarEmail(email);
      validarSenha(senha);
  
      alert("Usuário cadastrado com sucesso!");
      this.reset();
    } catch (erro) {
      alert(erro.message);
    }
  });
  
  function validarNome(nome) {
    if (nome === "") {
      throw new Error("O nome não pode estar vazio.");
    }
  }
  
  function validarCPF(cpf) {
    const regexCPF = /^\d{11}$/;
    if (!regexCPF.test(cpf)) {
      throw new Error("O CPF deve conter exatamente 11 dígitos numéricos.");
    }
  }
  
  function validarEmail(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.(com|com\.br|org)$/i;
    if (!regexEmail.test(email)) {
      throw new Error("O e-mail deve conter um '@' e um domínio válido (.com, .com.br ou .org).");
    }
  }
  
  function validarSenha(senha) {
    const regexSenha = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!regexSenha.test(senha)) {
      throw new Error("A senha deve ter ao menos 8 caracteres, contendo letras e números.");
    }
  }
  