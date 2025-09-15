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

            // Valida se o nome contém apenas letras (com ou sem acento) e espaços
    if (!/^[A-Za-zÀ-ÿ\s]+$/.test(nome)) return alert("Nome inválido!");
           
            // Valida se o telefone tem apenas 10 ou 11 dígitos numéricos
    if (!/^\d{10,11}$/.test(telefone)) return alert("Telefone inválido! Use somente números");
            
            // Valida se o CPF tem exatamente 11 dígitos numéricos
    if (!/^\d{11}$/.test(cpf)) return alert("CPF inválido! Deve ter 11 dígitos");

            // Valida se a data de nascimento foi preenchida e é anterior à data atual
    if (!aniversario || new Date(aniversario) >= new Date()) return alert("Data de nascimento inválida!");

    alert("Cadastro de cliente válido!");
});