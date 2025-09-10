const form = document.getElementById("formLogin");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // evita recarregar a página
  // redireciona direto para a página principal
  window.location.href = "home.html";
});