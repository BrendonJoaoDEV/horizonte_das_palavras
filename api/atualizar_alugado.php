<?php
// Define que o conteúdo retornado será em formato JSON
header("Content-Type: application/json");

// Inclui o arquivo de conexão com o banco de dados
include("../db/conexao.php");

// Recebe os dados enviados via requisição HTTP (JSON) e decodifica para array associativo
$dados = json_decode(file_get_contents("php://input"), true);

// Pega o valor do ID enviado no JSON e converte para inteiro
$id = (int)$dados["id"];

// Pega o valor do status 'devolvido' enviado no JSON e converte para inteiro
$devolvido = (int)$dados["devolvido"];

// Cria a query SQL para atualizar o campo 'devolvido' na tabela 'alugados' onde o ID corresponde
$sql = "UPDATE alugados SET devolvido = $devolvido WHERE id_alugado = $id";

// Executa a query no banco de dados
$conn->query($sql);

// Retorna um JSON informando que deu certo
echo json_encode(["status" => "ok"]);
?>
