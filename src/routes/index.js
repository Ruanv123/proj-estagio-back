const { produtoRoutes } = require("./produtosRoute");

module.exports = (app) => {
  produtoRoutes(app);
};
