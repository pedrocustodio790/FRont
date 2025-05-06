function configurar(){
    let inputIdade = document.getElementById('idadeinput'); // Corrigido o ID
    let inputEmprestimo = document.getElementById('emprestimoinput');
    let inputNome = document.getElementById('nomeinput');
    let verificarBtn = document.getElementById('verificar');
    
    if((inputEmprestimo instanceof HTMLInputElement) && 
       (inputNome instanceof HTMLInputElement) && 
       (inputIdade instanceof HTMLInputElement) && 
       (verificarBtn instanceof HTMLButtonElement)){
        
        verificarBtn.addEventListener('click', () => {
            let nome = inputNome.value.trim();
            let idade = parseFloat(inputIdade.value);
            let emprestimo = parseFloat(inputEmprestimo.value);
            verificar(nome, idade, emprestimo); // Chama a função de verificação
        });
    }
}

function exibirMensagem(mensagem) {
    let saida = document.getElementById('saida');
    if (saida instanceof HTMLParagraphElement) {
        saida.textContent = mensagem;
    }
}

function verificar(nome, idade, emprestimo) {
    try {
        // Validação do nome
        if (!nome) {
            throw new Error('sua mãe não deu nome , por que o amor certeza que faltou');
        }
        
        // Validação da idade
        if (isNaN(idade)) {
            throw new Error('Você diz sua idade em número romano?');
        }
        if (idade < 18 || idade > 70) {
            throw new Error('Você não tem os requisitos mínimos para pegar empréstimo');
        }
        
        // Validação do valor
        if (isNaN(emprestimo)) {
            throw new Error('se sabe que emprestimo o com dinhero ? não sabe?');
        }
        if (emprestimo < 100) {
            throw new Error('Nove centavos ? porra Luix morra miseravel ');
        }
        if (emprestimo > 30000) {
            throw new Error('ai se quebra a banco meu nobre');
        }
        
        exibirMensagem(`Empréstimo concedido para ${nome}!`);
    } catch (erro) {
        exibirMensagem(erro.message);
    }
}

// Inicializa o sistema quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', configurar);