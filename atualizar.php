<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Atualizar</title>
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
            <article>
                <form id="formAtualizar" method="POST">
                    <h2>Atualizar Cliente</h2>

                    <label for="nome-cliente">Nome</label>
                    <input type="text" id="nome-cliente" name="nome-cliente">

                    <label for="telefone">Telefone</label>
                    <input type="text" id="telefone" name="telefone">

                    <label for="cpf">CPF</label>
                    <input type="text" id="cpf" name="cpf">

                    <label for="aniversario">Data de Nascimento</label>
                    <input type="date" id="aniversario" name="aniversario">
                    <button type="submit">Atualizar Cliente</button>
                </form>
            </article>
        </section>
    </main>

    <script src="public/js/atualizar.js"></script>
</body>
</html>