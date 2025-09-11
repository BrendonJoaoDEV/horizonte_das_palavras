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
    if (!/^[A-Za-zÀ-ÿ\s]+$/.test(nome)) return alert("Nome inválido!");
    if (!/^\d{10,11}$/.test(telefone)) return alert("Telefone inválido! Use somente números");
    if (!/^\d{11}$/.test(cpf)) return alert("CPF inválido! Deve ter 11 dígitos");
    if (!aniversario || new Date(aniversario) >= new Date()) return alert("Data de nascimento inválida!");

    alert("Cadastro de cliente válido!");
});