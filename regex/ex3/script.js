function configurar() {
    let verificarsenha = document.getElementById("verificar");
    verificarsenha.addEventListener('click', checarsenha); 
}

function checarsenha() { 
    let inputsenha = document.getElementById("senhaforte");
    let saida = document.getElementById("saida");
    
    if(inputsenha) {
        let senhaforte = inputsenha.value;
        let senharegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
        let senhavalida = senharegex.test(senhaforte);
        
        if(senhavalida) {
            saida.textContent = "Senha válida!";
            saida.style.color = "green";
        } else {
            saida.textContent = "Senha inválida! Deve ter: 8-16 caracteres, 1 maiúscula, 1 minúscula, 1 número e 1 caractere especial (@$!%*?&)";
            saida.style.color = "red";
        }
    }
}

document.addEventListener('DOMContentLoaded', configurar);