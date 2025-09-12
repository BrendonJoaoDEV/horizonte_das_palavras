<?php
header("Content-Type: application/json");
include("../db/conexao.php");

$dados = json_decode(file_get_contents("php://input"), true);

$id = (int)$dados["id"];
$ativo = (int)$dados["concluida"];


$sql = "UPDATE clientes SET ativo = $ativo WHERE id = $id";
$conn->query($sql);

// Retorna uma resposta JSON para o cliente indicando que a operação foi realizada com sucesso.
echo json_encode(["status" => "ok"]);
?>