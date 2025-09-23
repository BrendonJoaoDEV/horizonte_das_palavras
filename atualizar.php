<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Atualizar</title>
    <link rel="stylesheet" href="public/css/estilo.css">
</head>
<body>
    <header class="principal">
        <h1>
            Horizonte <br>
            das Palavras
        </h1>
    </header>

    <main>
        <section>
            <article class="atualizar">
                <form id="formAtualizar" method="POST">
                    <h2>Atualizar Cliente</h2>

                    <label for="nome-editar">Nome</label>
                    <input type="text" id="nome-editar" name="nome-editar">

                    <label for="telefone-editar">Telefone</label>
                    <input type="text" id="telefone-editar" name="telefone-editar">

                    <label for="cpf-editar">CPF</label>
                    <input type="text" id="cpf-editar" name="cpf-editar">

                    <label for="aniversario-editar">Data de Nascimento</label>
                    <input type="date" id="aniversario-editar" name="aniversario-editar">
                    <button type="submit">Atualizar Cliente</button>
                </form>
            </article>
        </section>
    </main>
</body>
</html>