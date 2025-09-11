<?php
header("Content-Type: application/json");
include("../db/conexao.php");

$dados = json_decode(file_get_contents("php://input"), true);

$nome = $conn->real_escape_string($dados['nome-cliente']);
$nome = $conn->real_escape_string($dados['nome-livro']);
$telefone = $conn->real_escape_string($dados['data-aluguel']);
$cpf = $conn->real_escape_string($dados['data-devolucao']);

$sql = "INSERT INTO alugados (nome, telefone, cpf, aniversario) VALUES (?, ?, ?, ?)"

?>