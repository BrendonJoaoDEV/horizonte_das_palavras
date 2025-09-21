<?php
// Define o tipo de aplicação
header("Content-Type: application/json");
// Inclui a conexão com o banco de dados
include "../db/conexao.php";

// Decodifica o json enviado pelo JavaScript
$dados = json_decode(file_get_contents("php://input"), true);

// Converte os dados do json pro tipo necessário
$nome = $conn->real_escape_string($dados['nomeLivro']);
$codigo = (int)$dados['codigo'];
$quantidade = (int)$dados['quantidade'];

// Gera a query de inserção desses dados
$sql = "INSERT INTO livros (nome_livro, codigo, quantidade_disponivel) VALUES ('$nome', '$codigo', '$quantidade')";

if ($conn->query($sql)) {
    echo json_encode(["status" => "ok", "mensagem" => "Livro cadastrado com sucesso!"]);
} else {
    echo json_encode(["status" => "erro", "mensagem" => $conn->error]);
}
?>