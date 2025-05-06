document.addEventListener('DOMContentLoaded', function() {
    const dataInput = document.getElementById('dataInput');
    const verificarBtn = document.getElementById('verificarBtn');
    const resultadoDiv = document.getElementById('resultado');
    
    // Dias da semana em português
    const diasSemana = [
        "Domingo",
        "Segunda-feira",
        "Terça-feira",
        "Quarta-feira",
        "Quinta-feira",
        "Sexta-feira",
        "Sábado"
    ];
    
    verificarBtn.addEventListener('click', function() {
        const dataStr = dataInput.value.trim();
        
        // Validar o formato da data
        if (!/^\d{2}\/\d{2}\/\d{2}$/.test(dataStr)) {
            resultadoDiv.textContent = "Formato inválido! Use DD/MM/AA";
            resultadoDiv.style.backgroundColor = "#ffebee";
            return;
        }
        
        // Separar dia, mês e ano
        const partes = dataStr.split('/');
        const dia = parseInt(partes[0], 10);
        const mes = parseInt(partes[1], 10) - 1; // Meses no JS vão de 0-11
        let ano = parseInt(partes[2], 10);
        
        // Ajustar ano para o século atual (assumindo anos entre 2000-2099)
        ano += ano < 50 ? 2000 : 1900;
        
        // Criar objeto Date
        const data = new Date(ano, mes, dia);
        
        // Validar a data
        if (data.getDate() !== dia || data.getMonth() !== mes || data.getFullYear() !== ano) {
            resultadoDiv.textContent = "Data inválida! Verifique os valores.";
            resultadoDiv.style.backgroundColor = "#ffebee";
            return;
        }
        
        // Obter dia da semana
        const diaSemana = diasSemana[data.getDay()];
        
        // Exibir resultado
        resultadoDiv.textContent = `Dia da semana: ${diaSemana}`;
        resultadoDiv.style.backgroundColor = "#e8f5e9";
    });
    
    // Opcional: Permitir verificar pressionando Enter
    dataInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            verificarBtn.click();
        }
    });
});