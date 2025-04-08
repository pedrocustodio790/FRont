function atualizarResultadoDOM() {
  // @ts-ignore
  const figuraGeo = document.getElementById('figuraGeo').value;
  let area = 0;

  switch (figuraGeo) {
      case 'quadrado':
          const lado = prompt('Digite o valor do lado do quadrado:');
          // @ts-ignore
          area = lado * lado;
          break;
      case 'retangulo':
          const baseRet = prompt('Digite o valor da base do retângulo:');
          const alturaRet = prompt('Digite o valor da altura do retângulo:');
          // @ts-ignore
          area = baseRet * alturaRet;
          break;
      case 'trapezio':
          const baseMaior = prompt('Digite o valor da base maior do trapézio:');
          const baseMenor = prompt('Digite o valor da base menor do trapézio:');
          const alturaTrap = prompt('Digite o valor da altura do trapézio:');
          // @ts-ignore
          area = ((parseFloat(baseMaior) + parseFloat(baseMenor)) * alturaTrap) / 2;
          break;
      case 'triangulo':
          const baseTri = prompt('Digite o valor da base do triângulo:');
          const alturaTri = prompt('Digite o valor da altura do triângulo:');
          // @ts-ignore
          area = (baseTri * alturaTri) / 2;
          break;
      case 'circulo':
          const raio = prompt('Digite o valor do raio do círculo:');
          // @ts-ignore
          area = Math.PI * raio * raio;
          break;
      default:
          alert('Figura geométrica não reconhecida.');
          return;
  }

  // @ts-ignore
  document.getElementById('resultado').textContent = `Área: ${area}`;
}