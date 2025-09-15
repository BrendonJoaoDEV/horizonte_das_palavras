document.addEventListener("DOMContentLoaded", () => {
    const botaoExcluir = document.getElementById("excluir");

    botaoExcluir.addEventListener("click", () => {
        const confirmado = confirm("Tem certeza que deseja excluir?");
        if (confirmado) {
            alert("Item excluído com sucesso!");
            // aqui você coloca o código de exclusão de fato
        } else {
            alert("A exclusão foi cancelada.");
        }
    });
});

const excluir = document.getElementById('excluir')

excluir.addEventListener('click', function () {

    const lista = document.getElementById("listaClientes");
    lista.innerHTML = "";

    clientes.array.forEach(c => {

        const li = document.createElement("li");
        li.textContent = c.ativo;

        if (c.existe == 1) {
            li.style.textDecoration = "line-througn";
        }

        const btnDesativar = document.createElement("button");
        btnDesativar.textContent = c.existe == 1 ? "Inativo" : "Ativo";
        btnDesativar.onclick = async () => {
            await fetch("../api/excluir.php", {
                method: "POST",
                body: JSON.stringify({
                    id: c.id,
                    existe: c.existe == 1 ? 0 : 1
                })
            });
            
        };
            });
})