<?php
header("Content-Type: application/json");
include("../conexao/conexao.php");

$dados = json_decode(file_get_contents("php://input"), true);

$id = (int)$dados["id"];
$devolvido = (int)$dados["devolvido"];

$sql = "UPDATE alugados SET devolvido = $devolvido WHERE id_alugado = $id";

$conn->query($sql);

echo json_encode(["status" => "ok"]);
?>
