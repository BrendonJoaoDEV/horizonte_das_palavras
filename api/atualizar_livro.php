<?php
// Define que o retorno da requisição será em formato JSON
header("Content-Type: application/json");

// Inclui o arquivo que faz a conexão com o banco de dados
include("../db/conexao.php");

// Recebe os dados enviados via requisição HTTP (JSON) e transforma em array associativo
$dados = json_decode(file_get_contents("php://input"), true);

// Extrai o valor do ID e força a conversão para inteiro (evita valores inválidos)
$id = (int)$dados["id"];

// Extrai o título do livro enviado no JSON
$titulo = $dados["titulo"];

// Monta a query SQL para atualizar o título do livro na tabela 'livros' com base no id informado
// ATENÇÃO: inserir $titulo diretamente pode causar SQL Injection
$sql = "UPDATE livros SET titulo = '$titulo' WHERE id_livro = $id";

// Executa a query no banco de dados
$conn->query($sql);

// Retorna um JSON informando que a operação foi bem-sucedida
echo json_encode(["status" => "ok"]);
?>
