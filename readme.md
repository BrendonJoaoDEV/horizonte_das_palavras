# Horizonte das Palavras

Um sistema de controle de aluguel de livros para uma biblioteca, construído com o objetivo de testar e aprimorar os conhecimentos adquiridos em sala de aula sobre HTML5, CSS3, JavaScript, PHP e MySQL.

### Desenvolvedores

- Ágata Quadros (@AgataQuadros)
- Augusto José (@augustojosemagalhaesmattos)
- Brendon João (@BrendonJoaoDEV)
- Gilber Mattos (@Gilber-Mattos-Mendes)

### Fluxo do sistema:
- 1 - Iniciar o sistema
- 2 - Exibir:
    - 2.1 - Clientes
    - 2.2 - Livros
    - 2.3 - Alugados
- 3 - Opções:
    - 3.1 - Cadastrar cliente
        - 3.1.1 - Pedir dados do cliente
        - 3.1.2 - Validar (se validas prosseguir, se não pedir novamente)
        - 3.1.3 - Adicionar ao banco de dados
        - 3.1.4 - Fim (retornar ao menu)
    - 3.2 - Cadastrar livro
        - 3.2.1 - Pedir dados do livro
        - 3.2.2 - Validar (se validas prosseguir, se não pedir novamente)
        - 3.2.3 - Adicionar ao banco de dados
        - 3.2.4 - Fim (retornar ao menu)
    - 3.3 - Alugar livro
        - 3.3.1 - Pedir os dados do aluguel
        - 3.3.2 - Verificar se o livro está disponível (se sim prosseguir, se não pedir outro livro)
        - 3.3.3 - Validar demais informações (se validas prosseguir, se não pedir novamente)
        - 3.3.4 - Adicionar ao banco de dados
        - 3.3.5 - Fim (retornar ao menu)
- 4 - Quando houver dados cadastrados:
    - 4.1 - Excluir cliente
        - 4.1.1 - Selecionar cliente
        - 4.1.2 - Encontrar cliente no banco de dados
        - 4.1.3 - Verificar se não há alugueis pendentes (se tiver alugueis não permitir exclusão, se não tiver alugado prosseguir)
        - 4.1.4 - Confirmar se é o cliente correto (se sim prosseguir, se não cancelar)
        - 4.1.5 - Excluir usuário
        - 4.1.6 - Fim (retornar ao menu)
    - 4.2 - Excluir livro
        - 4.2.1 - Selecionar livro
        - 4.2.2 - Encontrar livro no banco de dados
        - 4.2.3 - Verificar se o livro não esta emprestado (se tiver alugado não permitir exclusão, se não tiver alugado prosseguir)
        - 4.2.4 - Confirmar se é o livro correto (se sim prosseguir, se não cancelar)
        - 4.2.5 - Excluir livro
        - 4.2.6 - Fim (retornar ao menu)
    - 4.3 - Receber livro
        - 4.3.1 - Selecionar o livro sendo devolvido
        - 4.3.2 - Mudar o estado do aluguel daquele livro com aquele cliente
        - 4.3.3 - Adicionar livro de volta aos disponiveis
        - 4.3.4 - Fim (retornar ao menu)
    - 4.4 - Alterar cliente
        - 4.4.1 - Selecionar o cliente
        - 4.4.2 - Coletar os novos dados
        - 4.4.3 - Substituir os dados
        - 4.4.4 - Fim (retornar ao menu)
    - 4.5 - Alterar livro
        - 4.5.1 - Selecionar o cliente
        - 4.5.2 - Coletar os novos dados
        - 4.5.3 - Substituir os dados
        - 4.5.4 - Fim (retornar ao menu)
    - 4.6 - Alterar alugados
        - 4.6.1 - Selecionar o aluguel
        - 4.6.2 - Coletar os novos dados
        - 4.6.3 - Substituir os dados
        - 4.6.4 - Fim (retornar ao menu)
- 5 - Fim