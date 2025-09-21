<?php
header("Content-Type: application/json");
include("../db/conexao.php");

$dados = json_decode(file_get_contents("php://input"), true);
if (!$dados) {
    echo json_encode(["status" => "erro", "mensagem" => "JSON inválido"]);
    exit;
}

// 1) Atualizar alugados (detecta pelo campo 'devolvido' + 'id')
if (isset($dados['devolvido']) && isset($dados['id'])) {
    $id = (int)$dados['id'];
    $devolvido = (int)$dados['devolvido'];
    $sql = "UPDATE alugados SET data_devolucao = $devolvido WHERE id_alugado = $id";

// 2) Atualizar clientes (detecta por 'id_cliente' e 'nome_cliente')
} elseif (isset($dados['id_cliente']) && isset($dados['nome_cliente'])) {
    $id = (int)$dados['id_cliente'];
    $nome = $conn->real_escape_string($dados['nome_cliente']);
    $telefone = $conn->real_escape_string($dados['telefone'] ?? '');
    $cpf = $conn->real_escape_string($dados['cpf'] ?? '');
    $data_nascimento = $conn->real_escape_string($dados['data_nascimento'] ?? '');
    $sql = "UPDATE clientes SET 
                nome_cliente = '$nome',
                telefone = '$telefone',
                cpf = '$cpf',
                data_nascimento = '$data_nascimento'
            WHERE id_cliente = $id";

// 3) Atualizar livros (detecta por 'titulo' + 'id')
} elseif (isset($dados['titulo']) && isset($dados['id'])) {
    $id = (int)$dados['id'];
    $titulo = $conn->real_escape_string($dados['titulo']);
    $sql = "UPDATE livros SET titulo = '$titulo' WHERE id_livro = $id";

} else {
    echo json_encode(["status" => "erro", "mensagem" => "Dados insuficientes ou não reconhecidos"]);
    exit;
}

// Executa e responde
if ($conn->query($sql)) {
    echo json_encode(["status" => "ok"]);
} else {
    echo json_encode(["status" => "erro", "mensagem" => $conn->error]);
}
?>
