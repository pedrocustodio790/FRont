class Contato {
    constructor(nome, telefone, email) {
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
    }
    
    get telefoneFormatado() {
        // Formata o telefone para (XX) XXXX-XXXX ou (XX) XXXXX-XXXX
        const telefone = this.telefone.replace(/\D/g, '');
        if (telefone.length === 10) {
            return telefone.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
        } else if (telefone.length === 11) {
            return telefone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
        }
        return this.telefone;
    }
}