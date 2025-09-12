<?php
// Define o tipo de aplicação
header("Content-Type: application/json");
// Inclui a conexão com o banco de dados
include("../db/conexao.php");

// Decodifica o json enviado pelo JavaScript
$dados = json_decode(file_get_contents("php://input"), true);

// Converte os dados do json pro tipo necessário
$nomeCliente = $conn->real_escape_string($dados['nome-cliente']);
$nomeLivro = $conn->real_escape_string($dados['nome-livro']);
$dataAluguel = $conn->real_escape_string($dados['data-aluguel']);
$dataDevolucao = $conn->real_escape_string($dados['data-devolucao']);

// Gera querys SQL para recuperar os IDs do cliente e do livro pelos seus nomes
$idCliente = $conn->query("SELECT id_cliente FROM clientes WHERE $nomeCliente");
$idLivro = $conn->query("SELECT id_livro FROM livros WHERE $nomeLivro");

// Gera a query de inserção desses dados
$sql = "INSERT INTO alugados (id_cliente, id_livro, data_aluguel, data_devolucao) VALUES ($idCliente, $idLivro, $dataAluguel, $dataDevolucao)"

$conn->query($sql);
?>