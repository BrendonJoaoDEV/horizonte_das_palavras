// Seleciona o formulário de cliente pelo id
const formCliente = document.getElementById("formCliente");

formCliente.addEventListener("submit", function(e) {
    e.preventDefault();

    const nome = document.getElementById("nome-cliente").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const cpf = document.getElementById("cpf").value.trim();
    const aniversario = document.getElementById("aniversario").value;

    // Valida se o nome contém apenas letras (com ou sem acento) e espaços
    if (!/^[A-Za-zÀ-ÿ\s]+$/.test(nome)) return alert("Nome inválido!");

    // Valida se o telefone tem apenas 10 ou 11 dígitos numéricos
    if (!/^\d{10,11}$/.test(telefone)) return alert("Telefone inválido! Use somente números");

    // Valida se o CPF tem exatamente 11 dígitos numéricos
    if (!/^\d{11}$/.test(cpf)) return alert("CPF inválido! Deve ter 11 dígitos");

    // Valida se a data de nascimento foi preenchida e é anterior à data atual
    if (!aniversario) return alert("Data de nascimento obrigatória!");
    
    const dataNasc = new Date(aniversario);
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0); // zera as horas para comparar só a data
    if (dataNasc >= hoje) return alert("Data de nascimento inválida!");

    alert("Cadastro de cliente válida!");
});
