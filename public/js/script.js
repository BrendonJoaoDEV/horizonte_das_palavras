document.addEventListener('DOMContentLoaded', async () => {
    saidaClientes = document.getElementById('saida-clientes');
    saidaLivros = document.getElementById('saida-livros');
    saidaAlugueis = document.getElementById('saida-algueis');

    const listaClientes = await fetch("../api/ler.php", {
        method: "POST",
        body: JSON.stringify({
            opcao: "clientes"
        })
    });

    const listaLivros = await fetch("../api/ler.php", {
        method: "POST",
        body: JSON.stringify({
            opcao: "livros"
        })
    });

    const listaAlugueis = await fetch("../api/ler.php", {
        method: "POST",
        body: JSON.stringify({
            opcao: "alugueis"
        })
    });
})