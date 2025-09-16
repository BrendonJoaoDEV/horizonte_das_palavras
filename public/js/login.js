// Seleciona o formulário com id "login" e guarda na variável 'form'
const form = document.getElementById("login");

// Adiciona um evento que escuta o envio do formulário
form.addEventListener("submit", function(enviar) {
    enviar.preventDefault(); // impede o comportamento padrão do formulário

    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    if (usuario === "admin" && senha === "1234") {
        alert("Login realizado com sucesso!");
        window.location.href = "principal.php"; 
    } else {
        alert("Usuário ou senha incorretos!");
    }
});
