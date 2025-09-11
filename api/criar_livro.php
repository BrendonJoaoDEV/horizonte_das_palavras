<?php
header("Content-Type: application/json");
include("../db/conexao.php");

$dados = json_decode(file_get_contents("php://input"), true);

$nome = $conn->real_escape_string($dados['nome-livro']);
$codigo = (int)$dados['codigo'];
$quantidade = (int)$dados['quantidade'];

$sql = "INSERT INTO livros (nome_livro, codigo, quantidade) VALUES ($nome, $codigo, $quantidade)"
?>