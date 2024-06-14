<!-- # Rotas

### Recuperar Todos os Jogos
```cmd
    /games/find_all
```

### Adicionar um Novo Jogo ao Banco de Dados
```
    /games/create
```

### Pesquisar Jogo Pelo Nome / Desenvolvedora
```
    /games/search/term=""
``` -->

# Quando Lança API

Essa API realiza raspagem de sites na internet para buscar os jogos anunciados para consoles e pc, informando data lançamento, trailers e outras informações. <!--Permite criar, listar, atualizar e deletar tarefas. -->

## Sumário

- [Instalação](#instalação)
- [Uso](#uso)
- [Rotas da API](#rotas-da-api)
  - [Criar uma nova tarefa](#criar-uma-nova-tarefa)
  - [Listar todas as tarefas](#listar-todas-as-tarefas)
  - [Obter uma tarefa específica](#obter-uma-tarefa-específica)
  - [Atualizar uma tarefa](#atualizar-uma-tarefa)
  - [Deletar uma tarefa](#deletar-uma-tarefa)
- [Tecnologias](#tecnologias)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Instalação

1. Clone o repositório:
    ```sh
    git clone https://github.com/seu-usuario/nome-do-repositorio.git
    ```
2. Navegue até o diretório do projeto:
    ```sh
    cd nome-do-repositorio
    ```
3. Instale as dependências:
    ```sh
    npm install
    ```

## Uso

1. Inicie o servidor:
    ```sh
    npm start
    ```
2. Acesse a API em `http://localhost:3000`.

## Rotas da API

### Criar uma nova tarefa

- **Rota**: `/todos`
- **Método**: `POST`
- **Descrição**: Cria uma nova tarefa.
- **Corpo da Requisição**:
    ```json
    {
      "title": "Título da tarefa",
      "description": "Descrição da tarefa"
    }
    ```
- **Exemplo de Resposta**:
    ```json
    {
      "id": 1,
      "title": "Título da tarefa",
      "description": "Descrição da tarefa",
      "completed": false
    }
    ```

### Listar todas as tarefas

- **Rota**: `/todos`
- **Método**: `GET`
- **Descrição**: Lista todas as tarefas.
- **Exemplo de Resposta**:
    ```json
    [
      {
        "id": 1,
        "title": "Título da tarefa",
        "description": "Descrição da tarefa",
        "completed": false
      },
      {
        "id": 2,
        "title": "Outra tarefa",
        "description": "Outra descrição",
        "completed": true
      }
    ]
    ```

### Obter uma tarefa específica

- **Rota**: `/todos/:id`
- **Método**: `GET`
- **Descrição**: Retorna uma tarefa específica por ID.
- **Parâmetros da Rota**:
    - `id` (integer): ID da tarefa.
- **Exemplo de Resposta**:
    ```json
    {
      "id": 1,
      "title": "Título da tarefa",
      "description": "Descrição da tarefa",
      "completed": false
    }
    ```

### Atualizar uma tarefa

- **Rota**: `/todos/:id`
- **Método**: `PUT`
- **Descrição**: Atualiza uma tarefa específica.
- **Parâmetros da Rota**:
    - `id` (integer): ID da tarefa.
- **Corpo da Requisição**:
    ```json
    {
      "title": "Novo título",
      "description": "Nova descrição",
      "completed": true
    }
    ```
- **Exemplo de Resposta**:
    ```json
    {
      "id": 1,
      "title": "Novo título",
      "description": "Nova descrição",
      "completed": true
    }
    ```

### Deletar uma tarefa

- **Rota**: `/todos/:id`
- **Método**: `DELETE`
- **Descrição**: Deleta uma tarefa específica.
- **Parâmetros da Rota**:
    - `id` (integer): ID da tarefa.
- **Exemplo de Resposta**:
    ```json
    {
      "message": "Tarefa deletada com sucesso"
    }
    ```

## Tecnologias

- Node.js
- Express

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Faça um push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
