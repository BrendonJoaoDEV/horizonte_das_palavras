<?php
header("Content-Type: application/json");
include("../conexao/conexao.php");

$dados = json_decode(file_get_contents("php://input"), true);

$id = (int)$dados["id"];

/**
 * Cria a query para exluir o registro da tabela tarefas
 * que tenha o id correspondente ao recebido.
 */
$sql = "DELETE FROM tarefas WHERE id = $id";

// Executa o comando SQL no banco de dados.
$conn->query($sql);

// Retorna uma resposta JSON para o cliente indicando que a operação foi realizada com sucesso.
echo json_encode(["status" => "ok"]);
?>