<?php
header("Content-Type: application/json");
include("../db/conexao.php");

$dados = json_decode(file_get_contents("php://input"), true);

$nomeCliente = $conn->real_escape_string($dados['nome-cliente']);
$nomeLivro = $conn->real_escape_string($dados['nome-livro']);
$dataDevolucao = $conn->real_escape_string($dados['data-devolucao']);

$idCliente = "SELECT id_cliente FROM clientes WHERE nome_cliente = $nomeCliente"
$idLivro = "SELECT id_livro FROM livros WHERE nome_livro = $nomeLivro"

$sql = "INSERT INTO alugados (id_cliente, id_livro, data_devolucao) VALUES ($idCliente, $idLivro, $dataDevolucao)"

?>