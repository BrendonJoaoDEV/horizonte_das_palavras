document.addEventListener("DOMContentLoaded", () => {
        const tabelaCliente = document.getElementById("tabela-clientes");
        const tabelaAlugueis = document.getElementById("tabela-alugueis");
        const id = JSON.parse(window.name);

        carregarTabelaLeituraEspecifica(tabelaCliente, "cliente-especifico", id);
        // carregarTabelaLeituraEspecifica(tabelaAlugueis, "alugueis-especificos", id);
});

async function carregarTabelaLeituraEspecifica(tabelaSaida, opcaoLeitura, id) {
    tabelaSaida.innerHTML = "";
    const resposta = await fetch("./api/ler.php", {
        method: "POST",
        body: JSON.stringify({
            opcao: `${opcaoLeitura}`
        })
    });

    const listaResultados = await resposta.json();

        if (opcaoLeitura === "cliente-especifico") {
            listaResultados.forEach(item => {
                console.log(item);
                const tr = document.createElement("tr");
                tr.innerHTML = `
                <td>${item.nome_cliente}</td>
                <td>${item.telefone}</td>
                <td>${item.cpf}</td>
                <td>${item.data_nascimento}</td>
                <td></td>
                <td></td>`;

                const botaoAtualizar = document.createElement("button");
                botaoAtualizar.textContent = "Atualizar";
                botaoAtualizar.onclick = () => {
                    // Levar pro form de atualizar
                }

                tr.children[4].appendChild(botaoAtualizar);
                
                const botaoExcluir = document.createElement("button");
                if (item.ativo == 0) {
                    botaoExcluir.textContent = "Desativar";
                } else {
                    botaoExcluir.textContent = "Ativar";
                }
                botaoExcluir.onclick = async () => {
                    const confirmado = confirm("Tem certeza que deseja excluir?");
                    if (confirmado) {
                        await fetch("./api/excluir.php", {
                            method: "POST",
                            body: JSON.stringify({
                            id: item.id_cliente,
                            ativo: item.ativo == 1 ? 0 : 1})
                        }); 
                        carregarTabelaLeituraEspecifica(tabelaSaida, opcaoLeitura, id);
                        alert("Item excluído com sucesso!");
                    } else {
                        alert("A exclusão foi cancelada.");
                    }
                }

                // adiciona o botão à última célula
                tr.children[5].appendChild(botaoExcluir);
                tabelaSaida.appendChild(tr);
            });
        } else if (opcaoLeitura === "alugueis-especificos") {
            listaResultados.forEach(item => {
                console.log(item);
                const tr = document.createElement("tr");
                tr.innerHTML = `
                    <td>${item.nome_livro}</td>
                    <td>${item.data_aluguel}</td>
                    <td>${item.data_devolucao}</td>
                    <td></td>
                    `;
                
                const botaoReceber = document.createElement("button");
                if (item.situacao == 0) {
                    botaoReceber.textContent = "Pendente";
                } else {
                    botaoReceber.textContent = "Recebido";
                }
                botaoReceber.onclick = async () => {
                    const confirmado = confirm("Tem certeza que deseja receber?");
                    if (confirmado) {
                        await fetch("./api/receber.php", {
                                method: "POST",
                                body: JSON.stringify({
                                    id: item.id_alugados,
                                    ativo: item.situacao == 1 ? 0 : 1
                                })
                            });
                        carregarTabelaLeituraEspecifica(tabelaSaida, opcaoLeitura, id);
                        alert("Item recebido com sucesso!");
                    } else {
                        alert("O recebimento foi cancelada.");
                    }
                    
                }

                // adiciona o botão à última célula
                tr.children[3].appendChild(botaoReceber);

                tabelaSaida.appendChild(tr);
            });
        }

}

const btnVoltar = document.getElementById("btnVoltar"); // Certifique-se de adicionar id="btnVoltar" no HTML
btnVoltar.addEventListener("click", function() {
    window.location.href = "principal.php"; // Redireciona para a página principal
});