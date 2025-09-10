<?php
header("Content-Type: application/json");
include "../db/conexao.php";

$json = json_decode(file_get_contents("php://input"), true);

$identificador = $conn->real_escape_string($json["opcao"]);

if ($identificador === "clientes") {
    $sql = "SELECT * FROM clientes ORDER BY ativo DESC, nome_cliente ASC";
} elseif ($identificador === "livros") {
    $sql = "SELECT * FROM livros ORDER BY nome_livro ASC";
} elseif ($identificador === "alugueis") {
    $sql = "SELECT id_alugados, nome_cliente, cpf, nome_livro, codigo, data_aluguel, data_devolucao, situacao FROM alugados JOIN clientes ON alugados.id_cliente = clientes.id_cliente JOIN livros ON alugados.id_livro = livros.id_livro";
} else {
    $sql = "Erro!";
}

if ($sql != "Erro!") {
    $result = $conn->query($sql);

    $saidas = [];

    while ($row = $result->fetch_assoc()) {
        $saidas[] = $row;
    }
} else {
    $saidas[] = "ERRO: Opção de leitura inválida!"
}

echo json_encode($saidas);
?>