function gerarCampos() {
    const figura = document.getElementById("figura").value; // Obtém o tipo de figura selecionada
    const container = document.getElementById("inputsContainer"); // Seleciona o container para os inputs
    container.innerHTML = ""; // Limpa inputs antigos

    const criarInput = (id, label) => `
        <label for="${id}">${label}:</label>
        <input type="number" id="${id}" step="any" required>
    `; // Função para criar um input com label

    const figuras = {
        quadrado: () => container.innerHTML = criarInput("lado", "Lado"), // Cria input para quadrado
        retangulo: () => container.innerHTML = criarInput("base", "Base") + criarInput("altura", "Altura"), // Cria inputs para retângulo
        trapezio: () => container.innerHTML = criarInput("baseMaior", "Base Maior") +
                                               criarInput("baseMenor", "Base Menor") +
                                               criarInput("altura", "Altura"), // Cria inputs para trapézio
        triangulo: () => container.innerHTML = criarInput("base", "Base") + criarInput("altura", "Altura"), // Cria inputs para triângulo
        circulo: () => container.innerHTML = criarInput("raio", "Raio"), // Cria input para círculo
    };

    if (figuras[figura]) {
        figuras[figura](); // Chama a função correspondente à figura selecionada
    } else {
        container.innerHTML = ""; // Limpa o container se a figura não for válida
    }
}

function calcularArea() {
    const figura = document.getElementById("figura").value; // Obtém o tipo de figura selecionada
    let area = 0; // Inicializa a variável área

    try {
        const valores = {
            quadrado: () => {
                const lado = parseFloat(document.getElementById("lado").value); // Obtém o valor do lado
                area = calcularQuadrado(lado); // Calcula a área do quadrado
            },
            retangulo: () => {
                const base = parseFloat(document.getElementById("base").value); // Obtém o valor da base
                const altura = parseFloat(document.getElementById("altura").value); // Obtém o valor da altura
                area = calcularRetangulo(base, altura); // Calcula a área do retângulo
            },
            trapezio: () => {
                const baseMaior = parseFloat(document.getElementById("baseMaior").value); // Obtém a base maior
                const baseMenor = parseFloat(document.getElementById("baseMenor").value); // Obtém a base menor
                const altura = parseFloat(document.getElementById("altura").value); // Obtém a altura
                area = calcularTrapezio(baseMaior, baseMenor, altura); // Calcula a área do trapézio
            },
            triangulo: () => {
                const base = parseFloat(document.getElementById("base").value); // Obtém a base do triângulo
                const altura = parseFloat(document.getElementById("altura").value); // Obtém a altura do triângulo
                area = calcularTriangulo(base, altura); // Calcula a área do triângulo
            },
            circulo: () => {
                const raio = parseFloat(document.getElementById("raio").value); // Obtém o raio do círculo
                area = calcularCirculo(raio); // Calcula a área do círculo
            },
        };

        if (valores[figura]) {
            valores[figura](); // Chama a função correspondente à figura selecionada
        } else {
            alert("Selecione uma figura."); // Alerta se nenhuma figura for selecionada
            return; // Sai da função
        }

        if (isNaN(area) || area <= 0) { // Verifica se a área é inválida
            throw new Error("Valores inválidos."); // Lança um erro se os valores forem inválidos
        }

        document.getElementById("resultado").innerText = `Área calculada: ${area.toFixed(2)} unidades²`; // Exibe a área calculada
    } catch (error) {
        document.getElementById("resultado").innerText = "Erro: insira valores válidos."; // Exibe mensagem de erro
    }
}

function calcularQuadrado(lado) {
    return lado * lado; // Retorna a área do quadrado
}

function calcularRetangulo(base, altura) {
    return base * altura; // Retorna a área do retângulo
}

function calcularTrapezio(baseMaior, baseMenor, altura) {
    return ((baseMaior + baseMenor) * altura) / 2; // Retorna a área do trapézio
}

function calcularTriangulo(base, altura) {
    return (base * altura) / 2; // Retorna a área do triângulo
}

function calcularCirculo(raio) {
    return Math.PI * Math.pow(raio, 2); // Retorna a área do círculo
}