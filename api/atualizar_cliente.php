<?php
header("Content-Type: application/json");
include("../db/conexao.php");

// Recebe os dados do front-end via JSON
$dados = json_decode(file_get_contents("php://input"), true);

// Extrai os valores
$id = (int)$dados["id_cliente"];
$nome = $dados["nome_cliente"];
$telefone = $dados["telefone"];
$cpf = $dados["cpf"];
$data_nascimento = $dados["data_nascimento"]; // já no formato YYYY-MM-DD ou como você enviar

// Atualiza o cliente
$sql = "UPDATE clientes SET 
            nome_cliente = '$nome',
            telefone = '$telefone',
            cpf = '$cpf',
            data_nascimento = '$data_nascimento'
        WHERE id_cliente = $id";

$conn->query($sql);

// Retorna resposta
echo json_encode(["status" => "ok"]);
?>
