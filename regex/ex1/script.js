function configurar() {
    let butaonome = document.getElementById("checarnome");
    butaonome.addEventListener('click', checarnome);
}

function checarnome() {
    let inputNome = document.getElementById("nome"); 
    let resultado = document.getElementById("resultado");
    
    if(inputNome) {
        let nome = inputNome.value;
        let expressaonome = /^[A-Za-zÀ-ú]+ [A-Za-zÀ-ú]+( [A-Za-zÀ-ú]+)*$/;
        
        if(expressaonome.test(nome)) {
            resultado.textContent = "Nome válido!";
            resultado.style.color = "green";
        } else {
            resultado.textContent = "Nome inválido! Deve conter pelo menos nome e sobrenome, apenas letras e espaços.";
            resultado.style.color = "red";
        }
    }
}

// Garante que a função configurar seja chamada quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', configurar);