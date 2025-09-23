<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Horizonte das Palavras</title>
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
        <form method="GET">
        <input type="text" name="filtro" id="filtro" class="filtro">
        <!-- eu acho que o botão pode ser irrelevante pq eu quero que o input seja ativado por enter -->
        </form>

        <button class="botao" id="btnVoltar">+</button>


        <section class="lista">

            <table>

                <thead>
                    <tr>
                        <th>Cliente</th>
                        <th>Livros</th>
                        <th>Data de Devolução</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody id="tabela-saida">
                </tbody>

            </table>

        </section>

    </main>
    <script src="public/js/script.js"></script>
</body>

</html>