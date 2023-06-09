# Teste Estágio Task Backend

Para iniciar o projeto primeiro baixe os node modules

``` npm i ``` 

Para startar o projeto 

```npm start  ```

antes certifique de estar rodando o mysql em seu computador

> voce pode usar o xampp ou o wampp 

Entao crie o seu banco de dados com o comando

``` create database task_teste; ```

Agora crie um arquivo chamado `.env` na raiz do projeto e insira as seguintes informações

```
# a porta que voce quer rodar o projeto
PORT=8001 

# a url do seu banco de dados, 

# mysql://USUARIO:PASSWORD@HOST:PORT/task_teste

DATABASE_URL="mysql://root:@localhost:3306/task_teste"

```

Por padrao a porta deve ser 3306 e o host local host, o usuario deve ser root e sem senha

Entao executar o comando para iniciar a migration (criacao da tabela no banco de dados) 

``` npx prisma migrate dev --name init ```

Se quiser resetar as informações do banco de dados execute

```npx prisma migrate reset```


## Endpoints da api

Produtos

- POST `/produtos`  
- GET `/produtos`
- PUT `/produtos/:id`
- DELETE `/produtos/:id`


