# Horizonte das Palavras

Um sistema de controle de aluguel de livros para uma biblioteca, construído com o objetivo de testar e aprimorar os conhecimentos adquiridos em sala de aula sobre HTML5, CSS3, JavaScript, PHP e MySQL.

### Desenvolvedores:

- Ágata Quadros (@AgataQuadros)
- Augusto José (@augustojosemagalhaesmattos)
- Brendon João (@BrendonJoaoDEV)
- Gilber Mattos (@Gilber-Mattos-Mendes)

### Requisitos funcionais:

- RF[001] - Login: Ao entrar o sistema deve apresentar uma tela de login, exigindo do usuário nome e senha. (Por esse sistema ser para fins didáticos essa tela é simbólica, ou seja, exige os dados mas não os valida nem salva em lugar algum)
- RF[002] - Criação: Criação de clientes, livros e alugueis, exigindo e validando os dados respectivos de cada opção.
- RF[003] - Leitura: Exibir resultados coerentes sobre as tabelas clientes, livros e alugueis.
- RF[004] - Alteração: Permitir alteração de dados em clientes, livros e alugueis, de forma válida e sem a criação de novos registros.
- RF[005] - Exclusão: "Excluir" dados de clientes e de livros, por questões de segurança os dados são mantidos porém são inativados (clientes) ou fica com o estoque zerado (livros).
- RF[006] - Validações: 
    - Validar campos de entrada (RF[002] e RF[004]),
    - Garantir que a exclusão seja válida (cliente não tenha alugueis pendentes),
    - Validação de operações no banco de dados (exibir mensagem de erro caso a resposta do banco não seja a esperada).
- RF[007] - Opções: O sistema deve dar ao usuário para todos os processos, as opções de escolher entre clientes, livros ou alugueis de forma fácil e intuitiva.

### Requisitos não funcionais:

- RNF[001] - Estrutura do projeto: O projeto deve apresentar uma estrutura modularizada e moderna com separação clara de front-end e back-end.
- RNF[002] - Banco de dados relacional: O banco de dados do projeto deve ser um banco de dados relacional para permitir relação entre dados, saídas mais completas e maior escalabilidade.
- RNF[003] - Fluxo do sistema: O sistema deve se manter no fluxo esperado (descrito no <a href="/docs/fluxograma.drawio.png">fluxograma</a>) e evitar ao máximo quebras do sistema com validações.


### Fluxo do sistema:
- 1 - Iniciar o sistema
- 2 - Exibir:
    - 2.1 - Clientes
    - 2.2 - Livros
    - 2.3 - Alugados
- 3 - Opções:
    - 3.1 - Cadastrar cliente
        - 3.1.1 - Pedir dados do cliente
        - 3.1.2 - Validar (se válidas prosseguir, se não pedir novamente)
        - 3.1.3 - Adicionar ao banco de dados
        - 3.1.4 - Fim (retornar ao menu)
    - 3.2 - Cadastrar livro
        - 3.2.1 - Pedir dados do livro
        - 3.2.2 - Validar (se válidas prosseguir, se não pedir novamente)
        - 3.2.3 - Adicionar ao banco de dados
        - 3.2.4 - Fim (retornar ao menu)
    - 3.3 - Alugar livro
        - 3.3.1 - Pedir os dados do aluguel
        - 3.3.2 - Verificar se o livro está disponível (se sim prosseguir, se não pedir outro livro)
        - 3.3.3 - Validar demais informações (se válidas prosseguir, se não pedir novamente)
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
        - 4.2.3 - Verificar se o livro não está emprestado (se tiver alugado não permitir exclusão, se não tiver alugado prosseguir)
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
        - 4.5.1 - Selecionar o livro
        - 4.5.2 - Coletar os novos dados
        - 4.5.3 - Substituir os dados
        - 4.5.4 - Fim (retornar ao menu)
    - 4.6 - Alterar alugados
        - 4.6.1 - Selecionar o aluguel
        - 4.6.2 - Coletar os novos dados
        - 4.6.3 - Substituir os dados
        - 4.6.4 - Fim (retornar ao menu)
- 5 - Fim

### Pendências:
- BD - Retirar da tabela livro os campos codigo e quantidade_disponivel, adicionar a tabela livros um campo 'disponivel'
- Back-end (PHP) - Juntar arquivos e colocar decisão entre opções com condicionais
- Front-end (HTML e CSS) - Reformular e seguir novo design das páginas
- excluir.php - Permitir que: 
    - O estado do cliente seja alterado entre ativo e inativo
    - O estado do livro seja alterado entre disponivel e indisponivel
    - O estado do aluguel seja alterado entre recebido e pendente
- atualizar.php - Permitir a atualização de todos os campos, de todas as tabelas