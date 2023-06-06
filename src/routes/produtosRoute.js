const {
  create,
  get,
  update,
  remove,
} = require("../controllers/produtosController");

exports.produtoRoutes = (app) => {
  app.post("/produtos", create);
  app.get("/produtos", get);
  app.put("/produtos/:id", update);
  app.delete("/produtos/:id", remove);
};
