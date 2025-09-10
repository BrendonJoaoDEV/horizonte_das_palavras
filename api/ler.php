<?php
header("Content-Type: application/json");
include "../db/conexao.php";

$json = json_decode(file_get_contents("php://input"), true);

$identificador = $conn->real_escape_string($json["opcao"]);

if ($identificador === "clientes") {
    $sql = "SELECT * FROM clientes ORDER BY nome_cliente ASC, ativo DESC";
} elseif ($identificador === "livros") {
    $sql = "SELECT * FROM livros ORDER BY nome_livro DESC";
} elseif ($identificador === "alugueis") {
    $sql = "";
} else {
    $sql = "";
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