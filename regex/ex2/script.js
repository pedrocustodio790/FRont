function configurar() {
    let checarBtn = document.getElementById("checar");
    checarBtn.addEventListener('click', checardados); 
}

function checardados() {
    let inputCPF = document.getElementById("cpf");
    let inputRG = document.getElementById("rg");
    let resultado = document.getElementById("resultado");
    
    if(inputCPF && inputRG) {
        let cpf = inputCPF.value; 
        let rg = inputRG.value;   
        

        let regexCPF = /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/;
        let regexRG = /^\d{2}\.?\d{3}\.?\d{3}-?\d{1}$/;
        

        let cpfValido = regexCPF.test(cpf);
        let rgValido = regexRG.test(rg);
        
        if(cpfValido && rgValido) {
            resultado.textContent = "CPF e RG válidos!";
            resultado.style.color = "green";
        } else {
            resultado.textContent = "";
            
            if(!cpfValido) {
                resultado.textContent += "CPF inválido! Formato esperado: 123.456.789-09\n";
            }
            
            if(!rgValido) {
                resultado.textContent += "RG inválido! Formato esperado: 12.345.678-9";
            }
            
            resultado.style.color = "red";
        }
    }
}


document.addEventListener('DOMContentLoaded', configurar);