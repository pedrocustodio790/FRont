    // Classe que encapsula o cálculo de idade
    class CalculadoraDeIdade {
        /**
         * @param {string|Date} dataNascimento - string no formato "YYYY-MM-DD" ou objeto Date
         */
        constructor(dataNascimento) {
          // Se for string, converte para Date
          this.dataNasc = typeof dataNascimento === 'string'
            ? new Date(dataNascimento + 'T00:00:00') // força timezone neutro
            : new Date(dataNascimento);
        }
  
        /**
         * Calcula a idade completa até a data atual
         * @returns {number} idade em anos completos
         */
        calcularIdade() {
          const hoje = new Date();               // data/hora atual
          let anos = hoje.getFullYear() - this.dataNasc.getFullYear();
  
          // Ajusta se ainda não passou o aniversário no ano corrente
          const mesHoje = hoje.getMonth();
          const diaHoje = hoje.getDate();
          const mesNasc = this.dataNasc.getMonth();
          const diaNasc = this.dataNasc.getDate();
  
          // Se o mês atual é menor que o mês de nascimento
          // ou é igual mas o dia ainda não chegou, subtrai 1 ano
          if (mesHoje < mesNasc || (mesHoje === mesNasc && diaHoje < diaNasc)) {
            anos--;
          }
  
          return anos;
        }
      }
  
      // Aguarda o carregamento completo do DOM
      document.addEventListener('DOMContentLoaded', () => {
        const inputData = document.getElementById('data-nascimento');
        const btnCalcular = document.getElementById('btn-calcular');
        const resultadoDiv = document.getElementById('resultado');
  
        btnCalcular.addEventListener('click', () => {
          const valorData = inputData.value;
          if (!valorData) {
            resultadoDiv.textContent = 'Por favor, selecione sua data de nascimento.';
            return;
          }
  
          // Instancia e calcula
          const calculadora = new CalculadoraDeIdade(valorData);
          const idade = calculadora.calcularIdade();
  
          // Exibe o resultado na tela
          resultadoDiv.textContent = `Você tem ${idade} ano${idade !== 1 ? 's' : ''}.`;
        });
      });
  