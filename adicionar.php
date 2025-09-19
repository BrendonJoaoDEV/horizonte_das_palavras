<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Adicionar</title>
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
        <select id="opcao-formulario">
            <option value="1" default>Aluguel</option>
            <option value="2">Livro</option>
            <option value="3">Cliente</option>
        </select>

        <section class="lista">
            
            <article class="cad-cliente">
                <form id="formCliente" method="POST">
                    <h2>Cadastro de Cliente</h2>

                    <label for="nome-cliente">Nome</label>
                    <input type="text" id="nome-cliente" name="nome-cliente">

                    <label for="telefone">Telefone</label>
                    <input type="text" id="telefone" name="telefone">

                    <label for="cpf">CPF</label>
                    <input type="text" id="cpf" name="cpf">

                    <label for="aniversario">Data de Nascimento</label>
                    <input type="date" id="aniversario" name="aniversario">
                    <button type="submit">Cadastrar Cliente</button>
                </form>
            </article>

            <article class="cad-livro">
                <form id="formLivro" method="POST">
                    <h2>Cadastro de Livro</h2>

                    <label for="nome-livro-cadastro">Nome</label>
                    <input type="text" id="nome-livro-cadastro" name="nome-livro-cadastro">

                    <label for="codigo">Código</label>
                    <input type="text" id="codigo" name="codigo">

                    <label for="quantidade">Quantidade</label>
                    <input type="number" id="quantidade" name="quantidade">
                    <button type="submit">Cadastrar Livro</button>
                </form>
            </article>


            <article class="cad-aluguel">
                <form id="formAluguel" method="POST">
                    <h2>Cadastro de Aluguel</h2>

                    <label for="nome-cliente-aluguel">Nome do Cliente</label>
                    <input type="text" id="nome-cliente-aluguel" name="nome-cliente-aluguel">

                    <label for="nome-livro-aluguel">Nome do Livro</label>
                    <input type="text" id="nome-livro-aluguel" name="nome-livro-aluguel">

                    <label for="data-aluguel">Data do Aluguel</label>
                    <input type="date" id="data-aluguel" name="data-aluguel">

                    <label for="data-devolucao">Data de Devolução</label>
                    <input type="date" id="data-devolucao" name="data-devolucao">

                    <button type="submit">Cadastrar aluguel</button>
                </form>
            </article>
        </section>

        <button class="botao" id="btnVoltar">Voltar</button>

    </main>
    <script src="public/js/adicionar.js"></script>

</body>

</html>