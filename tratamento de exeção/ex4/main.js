// Instância da agenda de contatos
const agendaContatos = new AgendaContatos();

// Elementos da interface
const nomeInput = document.getElementById('nome');
const telefoneInput = document.getElementById('telefone');
const emailInput = document.getElementById('email');
const btnAdicionar = document.getElementById('btn-adicionar');
const btnAtualizar = document.getElementById('btn-atualizar');
const btnCancelar = document.getElementById('btn-cancelar');
const pesquisaInput = document.getElementById('pesquisa');
const btnPesquisar = document.getElementById('btn-pesquisar');
const btnLimparPesquisa = document.getElementById('btn-limpar-pesquisa');
const btnOrdenar = document.getElementById('btn-ordenar');
const listaContatos = document.getElementById('lista-contatos');
const erroTelefone = document.getElementById('erro-telefone');
const erroEmail = document.getElementById('erro-email');

// Função para renderizar os contatos na tabela
function renderizarContatos(contatos = agendaContatos.contatos) {
    listaContatos.innerHTML = '';
    
    if (contatos.length === 0) {
        listaContatos.innerHTML = '<tr><td colspan="4">Nenhum contato cadastrado</td></tr>';
        return;
    }
    
    contatos.forEach((contato, indice) => {
        const linha = document.createElement('tr');
        
        linha.innerHTML = `
            <td>${contato.nome}</td>
            <td>${contato.telefoneFormatado}</td>
            <td>${contato.email}</td>
            <td class="actions">
                <button class="editar-btn" data-indice="${indice}">Editar</button>
                <button class="excluir-btn" data-indice="${indice}">Excluir</button>
            </td>
        `;
        
        listaContatos.appendChild(linha);
    });
    
    // Adiciona eventos aos botões de editar e excluir
    document.querySelectorAll('.editar-btn').forEach(btn => {
        btn.addEventListener('click', manipularEdicao);
    });
    
    document.querySelectorAll('.excluir-btn').forEach(btn => {
        btn.addEventListener('click', manipularExclusao);
    });
}

// Função para limpar o formulário
function limparFormulario() {
    nomeInput.value = '';
    telefoneInput.value = '';
    emailInput.value = '';
    erroTelefone.textContent = '';
    erroEmail.textContent = '';
    agendaContatos.indiceEdicaoAtual = null;
    btnAdicionar.style.display = 'block';
    btnAtualizar.style.display = 'none';
    btnCancelar.style.display = 'none';
}

// Função para validar os campos do formulário
function validarFormulario() {
    let valido = true;
    
    // Validação do telefone
    const digitosTelefone = telefoneInput.value.replace(/\D/g, '');
    if (digitosTelefone.length < 10 || digitosTelefone.length > 11) {
        erroTelefone.textContent = 'Telefone inválido. Deve conter 10 ou 11 dígitos.';
        valido = false;
    } else {
        erroTelefone.textContent = '';
    }
    
    // Validação do e-mail
    if (!emailInput.value.includes('@') || !emailInput.value.includes('.')) {
        erroEmail.textContent = 'E-mail inválido.';
        valido = false;
    } else {
        erroEmail.textContent = '';
    }
    
    return valido;
}

// Manipuladores de eventos
function manipularAdicaoContato(e) {
    e.preventDefault();
    
    if (!validarFormulario()) return;
    
    try {
        const contato = new Contato(
            nomeInput.value.trim(),
            telefoneInput.value.trim(),
            emailInput.value.trim()
        );
        
        agendaContatos.adicionarContato(contato);
        renderizarContatos();
        limparFormulario();
    } catch (erro) {
        agendaContatos.mostrarMensagem(erro.message, 'erro');
    }
}

function manipularAtualizacaoContato(e) {
    e.preventDefault();
    
    if (!validarFormulario()) return;
    
    try {
        const contato = new Contato(
            nomeInput.value.trim(),
            telefoneInput.value.trim(),
            emailInput.value.trim()
        );
        
        agendaContatos.atualizarContato(agendaContatos.indiceEdicaoAtual, contato);
        renderizarContatos();
        limparFormulario();
    } catch (erro) {
        agendaContatos.mostrarMensagem(erro.message, 'erro');
    }
}

function manipularEdicao(e) {
    const indice = e.target.dataset.indice;
    const contato = agendaContatos.contatos[indice];
    
    nomeInput.value = contato.nome;
    telefoneInput.value = contato.telefone;
    emailInput.value = contato.email;
    
    agendaContatos.indiceEdicaoAtual = indice;
    btnAdicionar.style.display = 'none';
    btnAtualizar.style.display = 'block';
    btnCancelar.style.display = 'block';
}

function manipularExclusao(e) {
    if (confirm('Tem certeza que deseja excluir este contato?')) {
        const indice = e.target.dataset.indice;
        agendaContatos.removerContato(indice);
        renderizarContatos();
        
        if (agendaContatos.indiceEdicaoAtual === indice) {
            limparFormulario();
        }
    }
}

function manipularPesquisa() {
    const termoPesquisa = pesquisaInput.value.trim();
    if (termoPesquisa === '') {
        renderizarContatos();
        return;
    }
    
    const contatosFiltrados = agendaContatos.pesquisarContatos(termoPesquisa);
    renderizarContatos(contatosFiltrados);
}

function manipularOrdenacao() {
    agendaContatos.ordenarContatos();
    renderizarContatos();
    agendaContatos.mostrarMensagem('Contatos ordenados por nome!', 'sucesso');
}

// Event listeners
btnAdicionar.addEventListener('click', manipularAdicaoContato);
btnAtualizar.addEventListener('click', manipularAtualizacaoContato);
btnCancelar.addEventListener('click', limparFormulario);
btnPesquisar.addEventListener('click', manipularPesquisa);
btnLimparPesquisa.addEventListener('click', () => {
    pesquisaInput.value = '';
    renderizarContatos();
});
btnOrdenar.addEventListener('click', manipularOrdenacao);

// Renderiza os contatos inicialmente
renderizarContatos();