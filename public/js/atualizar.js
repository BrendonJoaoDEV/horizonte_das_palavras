document.addEventListener('DOMContentLoaded', async () => {
    const formAtualizar = document.getElementById("formAtualizar");
    const campoNome = document.getElementById("nome-editar");
    const campoTelefone = document.getElementById("telefone-editar");
    const campoCpf = document.getElementById("cpf-editar");
    const campoAniversario = document.getElementById("aniversario-editar");
    const id = JSON.parse(window.name);

    const resposta = await fetch("./api/ler.php", {
        method: "POST",
        body: JSON.stringify({
            opcao: "cliente-especifico",
            id: id
        })
    });

    const cliente = await resposta.json();

    campoNome.value = cliente[0].nome_cliente;
    campoTelefone.value = 

    
});



formCliente.addEventListener("submit", function(e) {
    e.preventDefault();

    const nome = document.getElementById("nome-editar").value.trim();
    const telefone = document.getElementById("telefone-editar").value.trim();
    const cpf = document.getElementById("cpf-editar").value.trim();
    const aniversario = document.getElementById("aniversario-editar").value;

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
});
