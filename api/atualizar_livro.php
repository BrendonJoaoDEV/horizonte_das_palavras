<?php
header("Content-Type: application/json");
include("../conexao/conexao.php");

$dados = json_decode(file_get_contents("php://input"), true);

$id = (int)$dados["id"];
$titulo = $dados["titulo"];

$sql = "UPDATE livros SET titulo = '$titulo' WHERE id_livro = $id";

$conn->query($sql);

echo json_encode(["status" => "ok"]);
?>
