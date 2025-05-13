function setupPasswordValidator() {
    const passwordInput = document.getElementById("senhaforte");
    const submitButton = document.getElementById("verificar");
    const output = document.getElementById("saida");
    
    submitButton.addEventListener('click', validatePassword);
    
    function validatePassword() { 
        const password = passwordInput.value.trim();
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
        const isValid = passwordRegex.test(password);
        
        output.textContent = isValid 
            ? "Senha válida!" 
            : "Senha inválida! Requisitos:";
            
        output.className = isValid ? "valid" : "invalid";
        
        if (!isValid) {
            const requirements = document.createElement("ul");
            requirements.innerHTML = `
                <li>8-16 caracteres</li>
                <li>1 letra maiúscula</li>
                <li>1 letra minúscula</li>
                <li>1 número</li>
                <li>1 caractere especial (@$!%*?&)</li>
            `;
            output.appendChild(requirements);
        }
    }
}

document.addEventListener('DOMContentLoaded', setupPasswordValidator);