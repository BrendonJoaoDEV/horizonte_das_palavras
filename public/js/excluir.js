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

    const btnexcluir = document.getElementById('excluir')

    btnexcluir.addEventListener('click', function () {

        const lista = document.getElementById("listaClientes");
        lista.innerHTML = "";

        clientes.array.forEach(c => {

            const li = document.createElement("li");
            li.textContent = c.ativo;

            if (c.existe == 1) {
                li.style.textDecoration = "line-througn";
            }

            btnexcluir.textContent = c.existe == 1 ? "Inativo" : "Ativo";
            btnexcluir.onclick = async () => {
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
});