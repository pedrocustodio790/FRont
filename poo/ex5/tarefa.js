class Tarefa {
  constructor(titulo, data, descricao) {
    this.titulo = titulo; // Atribui o título da tarefa
    this.data = data; // Atribui a data da tarefa
    this.descricao = descricao; // Atribui a descrição da tarefa
    this.status = "pendente"; // Status inicial da tarefa
  }

  // Método para marcar a tarefa como concluída
  concluir() {
    this.status = "concluída"; // Atualiza o status para 'concluída'
  }

  // Método para marcar a tarefa como pendente
  pendente() {
    this.status = "pendente"; // Atualiza o status para 'pendente'
  }

  // Retorna uma string com os detalhes da tarefa
  getDetalhes() {
    return `${this.titulo} - ${this.status} | Data: ${this.data} | Descrição: ${this.descricao}`; // Formata e retorna os detalhes da tarefa
  }
}