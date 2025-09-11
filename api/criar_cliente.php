<?php
header("Content-Type: application/json");
include("../db/conexao.php");

$dados = json_decode(file_get_contents("php://input"), true);

$nome = $conn->real_escape_string($dados['nome-cliente']);
$telefone = $conn->real_escape_string($dados['telefone']);
$cpf = $conn->real_escape_string($dados['cpf']);
$aniversario = $conn->real_escape_string($dados['aniversario']);

$sql = "INSERT INTO clientes (nome_cliente, telefone, cpf, data_nascimento) VALUES ($nome, $telefone, $cpf, $aniversario)";
?>