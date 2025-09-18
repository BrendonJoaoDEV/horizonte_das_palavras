<?php
// Define o tipo de aplicação
header("Content-Type: application/json");
// Inclui a conexão com o banco de dados
include "../db/conexao.php";

// Decodifica o json enviado pelo JavaScript
$json = json_decode(file_get_contents("php://input"), true);

// Pega o identificador do json
$identificador = $conn->real_escape_string($json["opcao"]);

// Verifica qual o identificador e gera a query SQL de acordo
if ($identificador === "clientes") {
    $sql = "SELECT * FROM clientes ORDER BY ativo ASC, nome_cliente ASC";
} elseif ($identificador === "alugueis-resumo") {
    $sql = "SELECT nome_cliente, nome_livro, data_devolucao FROM alugados JOIN clientes ON alugados.id_cliente = clientes.id_cliente JOIN livros ON alugados.id_livro = livros.id_livro";
} elseif ($identificador === "alugueis") {
    $sql = "SELECT nome_cliente, nome_livro, data_aluguel, data_devolucao FROM alugados JOIN clientes ON alugados.id_cliente = clientes.id_cliente JOIN livros ON alugados.id_livro = livros.id_livro";
} else {
    $sql = "Erro!";
}

if ($sql != "Erro!") {
    // Se não houver erro na opção, executa a query SQL
    $result = $conn->query($sql);

    $saidas = [];

    while ($row = $result->fetch_assoc()) {
        $saidas[] = $row;
    }
} else {
    // Se houver erro, envia a mensagem de erro
    $saidas[] = "ERRO: Opção de leitura inválida!";
}

// Codifica a resposta e envia
echo json_encode($saidas);
?>