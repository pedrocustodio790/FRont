document.addEventListener('DOMContentLoaded', function() {
    const dataFuturaInput = document.getElementById('dataFutura');
    const iniciarBtn = document.getElementById('iniciarBtn');
    const contadorDiv = document.getElementById('contador');
    const mensagemErro = document.getElementById('mensagemErro');
    
    // Configurar a data mínima como agora
    const agora = new Date();
    const offset = agora.getTimezoneOffset() * 60000; // offset em milissegundos
    const dataLocal = new Date(agora.getTime() - offset);
    dataFuturaInput.min = dataLocal.toISOString().slice(0, 16);
    
    let intervalo;
    
    iniciarBtn.addEventListener('click', function() {
        // Parar qualquer contador existente
        clearInterval(intervalo);
        
        const dataFuturaStr = dataFuturaInput.value;
        
        if (!dataFuturaStr) {
            mostrarErro("Por favor, selecione uma data e hora futura.");
            return;
        }
        
        const dataFutura = new Date(dataFuturaStr);
        const agora = new Date();
        
        if (dataFutura <= agora) {
            mostrarErro("Por favor, selecione uma data FUTURA.");
            return;
        }
        
        // Esconder mensagem de erro se existir
        mensagemErro.style.display = 'none';
        
        // Mostrar o contador
        contadorDiv.style.display = 'flex';
        contadorDiv.style.justifyContent = 'space-around';
        
        // Iniciar a contagem regressiva
        atualizarContador(dataFutura);
        intervalo = setInterval(function() {
            atualizarContador(dataFutura);
        }, 1000);
    });
    
    function atualizarContador(dataAlvo) {
        const agora = new Date();
        const diferenca = dataAlvo - agora;
        
        if (diferenca <= 0) {
            clearInterval(intervalo);
            contadorDiv.innerHTML = '<div style="width:100%">Tempo esgotado!</div>';
            return;
        }
        
        // Converter milissegundos para dias, horas, minutos e segundos
        const segundosTotal = Math.floor(diferenca / 1000);
        const minutosTotal = Math.floor(segundosTotal / 60);
        const horasTotal = Math.floor(minutosTotal / 60);
        const dias = Math.floor(horasTotal / 24);
        
        const horas = horasTotal % 24;
        const minutos = minutosTotal % 60;
        const segundos = segundosTotal % 60;
        
        // Atualizar a exibição
        document.getElementById('dias').textContent = formatarNumero(dias);
        document.getElementById('horas').textContent = formatarNumero(horas);
        document.getElementById('minutos').textContent = formatarNumero(minutos);
        document.getElementById('segundos').textContent = formatarNumero(segundos);
    }
    
    function formatarNumero(numero) {
        return numero < 10 ? `0${numero}` : numero;
    }
    
    function mostrarErro(mensagem) {
        mensagemErro.textContent = mensagem;
        mensagemErro.style.display = 'block';
        contadorDiv.style.display = 'none';
    }
});