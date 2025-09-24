<?php
// Define o tipo de aplicação
header("Content-Type: application/json");
// Inclui a conexão com o banco de dados
include "../db/conexao.php";

// Decodifica o json enviado pelo JavaScript
$dados = json_decode(file_get_contents("php://input"), true);

$opcao = $conn->real_escape_string($dados["opcao"]);

if ($opcao === "clientes") {
    // Converte os dados do json pro tipo necessário
    $nome = $conn->real_escape_string($dados['nome']);
    $telefone = $conn->real_escape_string($dados['telefone']);
    $cpf = $conn->real_escape_string($dados['cpf']);
    $aniversario = $conn->real_escape_string($dados['aniversario']);

    // Gera a query de inserção desses dados
    $sql = "INSERT INTO clientes (nome_cliente, telefone, cpf, data_nascimento) VALUES ('$nome', '$telefone', '$cpf', '$aniversario')";

    if ($conn->query($sql)) {
        echo json_encode(["status" => "ok", "mensagem" => "Cliente cadastrado com sucesso!"]);
    } else {
        echo json_encode(["status" => "erro", "mensagem" => $conn->error]);
    }
}
elseif ($opcao === "livros") {
    // Converte os dados do json pro tipo necessário
    $nome = $conn->real_escape_string($dados['nomeLivro']);

    // Gera a query de inserção desses dados
    $sql = "INSERT INTO livros (nome_livro) VALUES ('$nome')";

    if ($conn->query($sql)) {
        echo json_encode(["status" => "ok", "mensagem" => "Livro cadastrado com sucesso!"]);
    } else {
        echo json_encode(["status" => "erro", "mensagem" => $conn->error]);
    }
}
elseif ($opcao === "alugueis") {
    // Converte os dados do json pro tipo necessário
    $nomeCliente = $conn->real_escape_string($dados['nomeCliente']);
    $nomeLivro = $conn->real_escape_string($dados['nomeLivro']);
    $dataDevolucao = $conn->real_escape_string($dados['dataDevolucao']);

    // Gera querys SQL para recuperar os IDs do cliente e do livro pelos seus nomes
    $result = $conn->query("SELECT id_cliente FROM clientes WHERE nome_cliente = '$nomeCliente'");
    $row = $result->fetch_assoc();
    $idCliente = $row['id_cliente'];

    $result = $conn->query("SELECT id_livro FROM livros WHERE nome_livro = '$nomeLivro'");
    $row = $result->fetch_assoc();
    $idLivro = $row['id_livro'];

    // Gera a query de inserção desses dados
    $sql = "INSERT INTO alugados (id_cliente, id_livro, data_devolucao) VALUES ('$idCliente', '$idLivro', '$dataDevolucao')";

    if ($conn->query($sql)) {
        echo json_encode(["status" => "ok", "mensagem" => "Aluguel cadastrado com sucesso!"]);
    } else {
        echo json_encode(["status" => "erro", "mensagem" => $conn->error]);
    }
}
else {
    $sql = "Erro!";
}

?>