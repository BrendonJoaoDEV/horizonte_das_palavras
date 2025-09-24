document.addEventListener('DOMContentLoaded', () => {
    const opcaoForm = document.getElementById('opcao-formulario');
    const formAluguel = document.getElementById("formAluguel");
    const formLivro = document.getElementById("formLivro");
    const formCliente = document.getElementById("formCliente");
    const containerAluguel = document.getElementById('container-aluguel');
    const containerLivro = document.getElementById('container-livro');
    const containerCliente = document.getElementById('container-cliente');
    const containerForms = document.getElementById('container-forms');
    const btnVoltar = document.getElementById("btnVoltar");

    if (opcaoForm.value === '1') {
        containerAluguel.classList = '';
        containerLivro.classList = 'esconder';
        containerCliente.classList = 'esconder';
        containerForms.classList = 'lista-coluna';
    }

    opcaoForm.addEventListener('input', () => {
        if (opcaoForm.value === '1') {
            containerAluguel.classList = '';
            containerLivro.classList = 'esconder';
            containerCliente.classList = 'esconder';
            containerForms.classList = 'lista-coluna';
        } else if (opcaoForm.value === '2') {
            containerAluguel.classList = 'esconder';
            containerLivro.classList = '';
            containerCliente.classList = 'esconder';
            containerForms.classList = 'lista-coluna';
        } else if (opcaoForm.value === '3') {
            containerAluguel.classList = 'esconder';
            containerLivro.classList = 'esconder';
            containerCliente.classList = '';
            containerForms.classList = 'lista-coluna';
        } else if (opcaoForm.value === '4') {
            containerAluguel.classList = '';
            containerLivro.classList = '';
            containerCliente.classList = 'esconder';
            containerForms.classList = 'lista';
        } else if (opcaoForm.value === '5') {
            containerAluguel.classList = '';
            containerLivro.classList = '';
            containerCliente.classList = '';
            containerForms.classList = 'lista';
        }
    });

    btnVoltar.addEventListener("click", function() {
        window.location.href = "principal.php"; // Redireciona para a página principal
    });

    // Adiciona um evento que escuta o envio do formulário
    formCliente.addEventListener("submit", function(e) {
        e.preventDefault();

        const nome = document.getElementById("nome-cliente").value.trim();
        const telefone = document.getElementById("telefone").value.trim();
        const cpf = document.getElementById("cpf").value.trim();
        const aniversario = document.getElementById("aniversario").value;

        alert("Cadastro de cliente válido!");

        enviar('./api/criar.php', {opcao: "clientes", nome, telefone, cpf, aniversario});
    });

    formLivro.addEventListener("submit", function(e) {
        e.preventDefault();

        const nomeLivro = document.getElementById("nome-livro-cadastro").value.trim();

        alert("Cadastro de livro válido!");

        enviar('./api/criar.php', {opcao: "livros", nomeLivro});
    });

    formAluguel.addEventListener("submit", function(e) {
        e.preventDefault();

        const nomeCliente = document.getElementById("nome-cliente-aluguel").value.trim();
        const nomeLivro = document.getElementById("nome-livro-aluguel").value.trim();
        const dataAluguel = new Date(document.getElementById("data-aluguel").value);
        const dataDevolucao = new Date(document.getElementById("data-devolucao").value);

        if (!nomeCliente || !nomeLivro) return alert("Preencha todos os nomes!");
        if (!dataAluguel || !dataDevolucao) return alert("Preencha todas as datas!");
        if (dataDevolucao < dataAluguel) return alert("Data de devolução não pode ser antes do aluguel!");

        alert("Cadastro de aluguel válido!");

        enviar('./api/criar.php', {opcao: "alugueis", nomeCliente, nomeLivro, dataDevolucao})
    });
});

async function enviar(local, dados) {
    const resposta = await fetch(local, {
        method: "POST",
        body: JSON.stringify(dados)
    });

    const resultado = await resposta.json();
    alert(resultado.mensagem);
}