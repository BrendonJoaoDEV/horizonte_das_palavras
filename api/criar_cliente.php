<?php
// Define o tipo de aplicação
header("Content-Type: application/json");
// Inclui a conexão com o banco de dados
include("../db/conexao.php");

// Decodifica o json enviado pelo JavaScript
$dados = json_decode(file_get_contents("php://input"), true);

// Converte os dados do json pro tipo necessário
$nome = $conn->real_escape_string($dados['nome-cliente']);
$telefone = $conn->real_escape_string($dados['telefone']);
$cpf = $conn->real_escape_string($dados['cpf']);
$aniversario = $conn->real_escape_string($dados['aniversario']);

// Gera a query de inserção desses dados
$sql = "INSERT INTO clientes (nome_cliente, telefone, cpf, data_nascimento) VALUES ($nome, $telefone, $cpf, $aniversario)";

$conn->query($sql);
?>