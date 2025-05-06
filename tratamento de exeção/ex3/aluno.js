class Aluno {
    constructor(nome, notas) {
      if (!nome || typeof nome !== 'string' || nome.trim() === '') {
        throw new Error('Virei adivinho pra saber seu nome arrombado');
      }
      
      if (!Array.isArray(notas) || notas.length !== 3) {
        throw new Error('Ta faltando nota ');
      }
  
      this.nome = nome.trim();
      this.notas = notas.map(nota => {
        const notaNum = parseFloat(nota);
        if (isNaN(notaNum) || notaNum < 0 || notaNum > 10) {
          throw new Error(` coloca a porra do numero direito caralho`);
        }
        return notaNum;
      });
    }
  
    calcularMedia() {
      try {
        const soma = this.notas.reduce((acc, nota) => acc + nota, 0);
        return (soma / this.notas.length).toFixed(2);
      } catch (error) {
        throw new Error(`Erro ao calcular média: ${error.message}`);
      }
    }
  }