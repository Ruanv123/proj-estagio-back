const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const SwaggerUi = require("swagger-ui-express");

//chamando funcao config do dotenv
dotenv.config();

//atribuindo o app ao express
const app = express();

//especificando o express para usar json
app.use(express.json());
//usando o cors
app.use(cors());
//criando rota para o swagger
app.use("/api-docs", SwaggerUi.serve, SwaggerUi.setup());
//configurando porta .env ou 8080 se 8001 n estiver funcionando no .env
const $PORT = process.env.PORT || 8080;
//chamando rotas
require("./routes/index")(app);
//testando a api
app.listen($PORT, () => {
  console.log(`server rodando na porta ${$PORT}`);
});
