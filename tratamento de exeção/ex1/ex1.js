function configurar() {
    let inputIdade = document.getElementById('idadeInput'); // Corrigido o ID
    let btnIdade = document.getElementById('btnidade');

    if ((inputIdade instanceof HTMLInputElement) && (btnIdade instanceof HTMLButtonElement)) {
        btnIdade.addEventListener("click", () => { // Corrigido a sintaxe do addEventListener
            let idade = parseFloat(inputIdade.value);
            calcular(idade);
        });
    }
}

function exibirMensagem(mensagem) { // Renomeada para ser mais genérica
    let saida = document.getElementById('saida');
    if (saida instanceof HTMLParagraphElement) {
        saida.textContent = mensagem;
    }
}

function calcular(idade) {
    try {
        if (isNaN(idade)) {
            throw new Error('vc diz sua idade em numero romano ?');
        }
        if (idade < 0) {
            throw new Error('Como tua idade é menor que zero? Voltou no tempo?');
        }
        if (idade < 18) {
            throw new Error('vai pedir acesso e seu pai muleque.');
        }
        
        // Se passou por todas as validações
        exibirMensagem(`Acesso permitido!`);
    } catch (erro) {
        exibirMensagem(erro.message);
    }
}

// Chama a função configurar quando o script carregar
document.addEventListener('DOMContentLoaded', configurar);