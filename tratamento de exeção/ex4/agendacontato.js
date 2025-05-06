class AgendaContatos {
    constructor() {
        this.contatos = [];
        this.indiceEdicaoAtual = null;
    }
    
    adicionarContato(contato) {
        this.validarContato(contato);
        this.contatos.push(contato);
        this.mostrarMensagem('Contato adicionado com sucesso!', 'sucesso');
    }
    
    atualizarContato(indice, contato) {
        this.validarContato(contato);
        this.contatos[indice] = contato;
        this.mostrarMensagem('Contato atualizado com sucesso!', 'sucesso');
    }
    
    removerContato(indice) {
        this.contatos.splice(indice, 1);
        this.mostrarMensagem('Contato removido com sucesso!', 'sucesso');
    }
    
    pesquisarContatos(termoPesquisa) {
        return this.contatos.filter(contato => 
            contato.nome.toLowerCase().includes(termoPesquisa.toLowerCase())
        );
    }
    
    ordenarContatos() {
        this.contatos.sort((a, b) => a.nome.localeCompare(b.nome));
    }
    
    validarContato(contato) {
        // Validação do telefone (deve ter 10 ou 11 dígitos numéricos)
        const digitosTelefone = contato.telefone.replace(/\D/g, '');
        if (digitosTelefone.length < 10 || digitosTelefone.length > 11) {
            throw new Error('Telefone inválido. Deve conter 10 ou 11 dígitos.');
        }
        
        // Validação básica de e-mail
        if (!contato.email.includes('@') || !contato.email.includes('.')) {
            throw new Error('E-mail inválido.');
        }
    }
    
    mostrarMensagem(mensagem, tipo) {
        const elementoMensagem = document.getElementById('mensagem');
        elementoMensagem.textContent = mensagem;
        elementoMensagem.className = tipo;
        setTimeout(() => {
            elementoMensagem.textContent = '';
            elementoMensagem.className = '';
        }, 3000);
    }
}