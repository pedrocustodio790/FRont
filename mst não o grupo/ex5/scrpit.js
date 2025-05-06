document.addEventListener('DOMContentLoaded', function() {
    // Classe ContadorPalavras
    class ContadorPalavras {
        constructor(texto) {
            this.texto = texto;
        }
        
        contarPalavras() {
            if (!this.texto.trim()) {
                return 0;
            }
            // Remove espaços extras e divide por espaços
            const palavras = this.texto.trim().split(/\s+/);
            return palavras.length;
        }
    }
    
    // Elementos do DOM
    const textoInput = document.getElementById('textoInput');
    const contarBtn = document.getElementById('contarBtn');
    const resultadoDiv = document.getElementById('resultado');
    
    // Evento do botão
    contarBtn.addEventListener('click', function() {
        const texto = textoInput.value;
        const contador = new ContadorPalavras(texto);
        const quantidade = contador.contarPalavras();
        
        resultadoDiv.innerHTML = `O texto contém <strong>${quantidade}</strong> palavra${quantidade !== 1 ? 's' : ''}.`;
    });
    
    // Opcional: Permitir contar pressionando Ctrl+Enter no textarea
    textoInput.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.key === 'Enter') {
            contarBtn.click();
        }
    });
});