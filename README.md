# Teste Técnico de Desenvolvedor Bluecore.it
# O que foi feito
- Foi adicionada nova rota para buscar os comentários de acordo com o PostID. 
- Foi adicionado um novo formulários para criação de um novo comentário e enviado para a rota Post para salvar o mesmo no banco, com as seguintes informações: UserNamve, Comment e PostID.


### Tecnologias presente neste projeto
  - Node
  - ExpressJS
  - EJS
  - Knex
  - SQLite
  - VueJS

### Estrutura de pastas
```
src
│   README.md
│   app.js    
│   server.js
└───config --> Pasta para os arquivos de configuraçã do projeto
└───controllers --> Camada que recebe as requisições e encaminha para as services
└───database
|    └───db --> Arquivos do SQLite
|    └───migrations --> Migrations para criar a estrutura de tabelas no banco de dados
|    └───seeds --> Arquivos para popular o banco com dados de exemplo
└───middlewares --> Camada intermediária entre a requisição e as controllers
└───public --> Arquivos publicos como CSS e JS renderizados no front-end
└───repository --> Camada de acesso ao banco de dados
└───routes --> Configuração de rotas da aplicação
└───service --> Camada das regras de negócios da aplicação
└───util --> Funções uteis a toda a plicação
└───views --> Os arquivos que renderizam no front-end
```
### Instalação
Para realizar a instalação da aplicação:
 - Instale as dependências pelo comando `npm install`
 - Execute as migrations no banco de dados pelo comando `knex migrate:latest`
 - Popule o banco com dados de exemplo pelo comando `knex seed:run`
 - Por fim execute o comando `npm run dev`
 - A aplicação rodará na porta **3000** [localhost:3000](http://localhost:3000)

 ### Comandos úteis
`npx knex migrate:rollback --all` - Reseta todo o banco de dados

### Links úteis
- [Documentação do Knex](https://knexjs.org/guide/)
- [Documentação do Vue JS](https://vuejs.org/guide/introduction.html)
- [Documentação EJS](https://ejs.co/#install)
