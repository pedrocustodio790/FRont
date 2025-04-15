class Validador {
  // Método estático para validar CPF
  static validarCpf(cpf) {
    // Expressão regular para verificar o formato do CPF
    const regexCpf = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    // Retorna verdadeiro se o CPF corresponder ao formato, falso caso contrário
    return regexCpf.test(cpf);
  }

  // Método estático para validar CEP
  static validarCep(cep) {
    // Expressão regular para verificar o formato do CEP
    const regexCep = /^\d{5}-\d{3}$/;
    // Retorna verdadeiro se o CEP corresponder ao formato, falso caso contrário
    return regexCep.test(cep);
  }

  // Método estático para validar um endereço
  static validarEndereco(endereco) {
    // Verifica se todos os campos do endereço estão preenchidos
    return endereco.getRua() && endereco.getNumero() && endereco.getBairro() &&
           endereco.getCidade() && endereco.getEstado() && endereco.getCep() &&
           endereco.getPais();
  }

  // Método estático para validar uma pessoa
  static validarPessoa(pessoa) {
    // Verifica se a pessoa possui nome, idade válida e CPF e endereço válidos
    return pessoa.getNome() && pessoa.getIdade() > 0 &&
           this.validarCpf(pessoa.getCpf()) &&
           this.validarEndereco(pessoa.getEndereco());
  }
}

export default Validador;