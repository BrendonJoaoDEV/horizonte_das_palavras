document.addEventListener("DOMContentLoaded", () => {
        const tabelaCliente = document.getElementById("tabela-clientes");
        const tabelaAlugueis = document.getElementById("tabela-alugueis")

        carregarClientes(tabelaCliente, "clientes");
        carregarAlgueis(tabelaAlugueis, "alugueis");
});

async function carregarClientes(tabelaSaida, opcaoLeitura) {
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
            <td>${item.telefone}</td>
            <td>${item.cpf}</td>
            <td>${item.data_nascmento}</td>
            <td></td>
            <td></td>`;

        const botaoAtualizar = document.createElement("button");
        botaoAtualizar.textContent = "Atualizar";
        botaoAtualizar.onclick = () => {
        }

        // adiciona o botão à última célula
        tr.children[4].appendChild(botaoAtualizar);

        const botaoExcluir = document.createElement("button");
        botaoExcluir.textContent = "Excluir";
        botaoExcluir.onclick = () => {
        }

        // adiciona o botão à última célula
        tr.children[5].appendChild(botaoExcluir);

        tabelaSaida.appendChild(tr);
    });
}

async function carregarAlgueis(tabelaSaida, opcaoLeitura) {
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
            <td>${item.data_aluguel}</td>
            <td>${item.data_devolucao}</td>
            <td></td>
            <td></td>
            `;

        const botaoReceber = document.createElement("button");
        botaoReceber.textContent = "Receber";
        botaoReceber.onclick = () => {
        }

        // adiciona o botão à última célula
        tr.children[4].appendChild(botaoReceber);

        tabelaSaida.appendChild(tr);
    });
}