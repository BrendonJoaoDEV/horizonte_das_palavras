<?php
// Define o tipo de aplicação
header("Content-Type: application/json");
// Inclui a conexão com o banco de dados
include("../db/conexao.php");

// Decodifica o json enviado pelo JavaScript
$dados = json_decode(file_get_contents("php://input"), true);

// Converte os dados do json pro tipo necessário
$nome = $conn->real_escape_string($dados['nome-livro']);
$codigo = (int)$dados['codigo'];
$quantidade = (int)$dados['quantidade'];

// Gera a query de inserção desses dados
$sql = "INSERT INTO livros (nome_livro, codigo, quantidade) VALUES ($nome, $codigo, $quantidade)";

$conn->query($sql);
?>