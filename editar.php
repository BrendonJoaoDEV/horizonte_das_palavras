<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Editar</title>
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

        <section class="lista-editar">

                <table>

                    <thead>
                        <tr>
                            <th>Nome Cliente</th>
                            <th>Telefone</th>
                            <th>CPF</th>
                            <th>Data de Nascimento</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody id="tabela-clientes">
                    </tbody>

                </table>
        </section>

        <section class="lista-editar">
                
                <table>
                    
                    <thead>
                        <tr>
                            <th>Nome Livro</th>
                            <th>Data Aluguel</th>
                            <th>Data Devolução</th>
                            <th></th>
                        </tr>
                    </thead>
                    
                    <tbody id="tabela-alugueis">
                    </tbody>
                    
                </table>  
            
        </section>
        <button class="botao" id="btnVoltar">Voltar</button>

        <script src="public/js/editar.js"></script>
    </main>
</body>
</html>