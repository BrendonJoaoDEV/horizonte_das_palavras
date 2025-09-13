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
