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
    campoTelefone.value = cliente[0].telefone;
    campoCpf.value = cliente[0].cpf;
    campoAniversario.value = cliente[0].data_nascimento;
    
    formAtualizar.addEventListener("submit", function(e) {
        e.preventDefault();
    
        const nome = campoNome.value.trim();
        const telefone = campoTelefone.value.trim();
        const cpf = campoCpf.value.trim();
        const aniversario = campoAniversario.value;
    

        enviar('./api/atualizar.php', {id_cliente: id, nome_cliente: nome, telefone: telefone, cpf: cpf, data_nascimento: aniversario});
    });

    btnVoltar.addEventListener("click", function() {
        window.location.href = "principal.php"; // Redireciona para a página principal
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



