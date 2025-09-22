document.addEventListener("DOMContentLoaded", () => {
        const tabelaCliente = document.getElementById("tabela-clientes");
        const tabelaAlugueis = document.getElementById("tabela-alugueis")

        carregarClientes(tabelaCliente, "clientes");
        carregarAlgueis(tabelaAlugueis, "alugueis");
});

async function carregarClientes(tabelaSaida, opcaoLeitura) {
    tabelaSaida.innerHTML = "";
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
        if (item.ativo == 0) {
            botaoExcluir.textContent = "Desativar";
        } else {
            botaoExcluir.textContent = "Ativar";
        }
        botaoExcluir.onclick = async () => {
            const confirmado = confirm("Tem certeza que deseja excluir? ");
            if (confirmado) {
                await fetch("./api/excluir.php", {
                    method: "POST",
                    body: JSON.stringify({
                    id: item.id_cliente,
                    ativo: item.ativo == 1 ? 0 : 1})
                }); 
                carregarClientes(tabelaSaida, opcaoLeitura);
                alert("Item excluído com sucesso!");
            } else {
                alert("A exclusão foi cancelada.");
            }
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

const btnVoltar = document.getElementById("btnVoltar"); // Certifique-se de adicionar id="btnVoltar" no HTML
btnVoltar.addEventListener("click", function() {
    window.location.href = "principal.html"; // Redireciona para a página principal
});