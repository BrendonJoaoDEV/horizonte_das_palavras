// Seleciona o formulário de cliente pelo id
const formCliente = document.getElementById("formCliente");

// Adiciona um evento que escuta o envio do formulário
formCliente.addEventListener("submit", function(e) {
    e.preventDefault();

    const nome = document.getElementById("nome-cliente").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const cpf = document.getElementById("cpf").value.trim();
    const aniversario = document.getElementById("aniversario").value;

    // Validações básicas
    // if (!/^[A-Za-zÀ-ÿ\s]+$/.test(nome)) return alert("Nome inválido!");
    // if (!/^\d{10,11}$/.test(telefone)) return alert("Telefone inválido! Use somente números");
    // if (!/^\d{11}$/.test(cpf)) return alert("CPF inválido! Deve ter 11 dígitos");
    // if (!aniversario || new Date(aniversario) >= new Date()) return alert("Data de nascimento inválida!");

    alert("Cadastro de cliente válido!");

    enviar('./api/criar_cliente.php', {nome, telefone, cpf, aniversario});
});

// ====== Formulário Livro ======
const formLivro = document.getElementById("formLivro");

formLivro.addEventListener("submit", function(e) {
    e.preventDefault();

    const nomeLivro = document.getElementById("nome-livro-cadastro").value.trim();
    const codigo = document.getElementById("codigo").value.trim();
    const quantidade = document.getElementById("quantidade").value;

    // if (!nomeLivro) return alert("Nome do livro obrigatório!");
    // if (!codigo) return alert("Código obrigatório!");
    // if (quantidade < 1) return alert("Quantidade inválida!");

    alert("Cadastro de livro válido!");

    enviar('./api/criar_livro.php', {nomeLivro, codigo, quantidade});
});

// ====== Formulário Aluguel ======
const formAluguel = document.getElementById("formAluguel");

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

    enviar('./api/criar_aluguel.php', {nomeCliente, nomeLivro, dataDevolucao})
});

async function enviar(local, dados) {
    const resposta = await fetch(local, {
        method: "POST",
        body: JSON.stringify(dados)
    });

    const resultado = await resposta.json();
    alert(resultado.mensagem);
}