document.addEventListener('DOMContentLoaded', () => {
    const tabela = document.getElementById('tabela-saida');
    const btnVoltar = document.getElementById("btnVoltar");

    carregarTabela(tabela, "alugueis-resumo");

    btnVoltar.addEventListener("click", function() {
        window.location.href = "adicionar.php"; // Redireciona para a página principal
    });
});

async function carregarTabela(tabelaSaida, opcaoLeitura) {
    const resposta = await fetch("./api/ler.php", {
        method: "POST",
        body: JSON.stringify({
            opcao: `${opcaoLeitura}`
        })
    });

    const listaAlugueis = await resposta.json();

    listaAlugueis.forEach(item => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${item.nome_cliente}</td>
            <td>${item.nome_livro}</td>
            <td>${item.data_devolucao}</td>
            <td></td>`;

        const botaoEditar = document.createElement("button");
        botaoEditar.textContent = "Editar";
        botaoEditar.onclick = () => {
            fetch('./api/atualizar_alugado.php', {
                method: 'POST',
                body: JSON.stringify(item) // envia o objeto inteiro como JSON
            });
            window.location.href = "editar.html";
        }

        // adiciona o botão à última célula
        tr.children[3].appendChild(botaoEditar);

        tabelaSaida.appendChild(tr);
    });
}