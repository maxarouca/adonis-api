# Adonis API application

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

É necessário ter um banco de dados disponível em funcionamento. Aqui foi utilizado Postgres. Caso seja utilizado outro banco SQL, será necessário realizar algumas alterações.
Com o banco rodando, será preciso alterar o arquivo `.env` na raiz do projeto para colocar as configurações do seu banco de dados. Alterar essas linhas do arquivo `.env`

```
DB_CONNECTION=pg
DB_HOST=127.0.0.1
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=docker

```

Após isso, instalar as dependencias e iniciar o projeto com o comando `adonis serve -dev`
