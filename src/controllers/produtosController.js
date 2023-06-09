const {
  criarProduto,
  getProdutos,
  updateProdutos,
  removeProdutos,
} = require("../models/produtosModel");

async function create(req, res) {
  try {
    const data = req.body;
    const produto = await criarProduto(data);
    res.status(200).send(produto);
  } catch (error) {
    res.status(400).send(error);
  }
}

async function get(req, res) {
  try {
    const produtos = await getProdutos();
    res.status(200).send(produtos);
  } catch (error) {
    res.status(400).send(error);
  }
}

async function update(req, res) {
  try {
    const produtos = await updateProdutos(Number(req.params.id), req.body);
    res.status(200).send(produtos);
  } catch (error) {
    res.status(400).send(error);
  }
}

async function remove(req, res) {
  try {
    await removeProdutos(Number(req.params.id));
    res.status(200).send();
  } catch (error) {
    res.status(400).send(error);
  }
}

module.exports = { create, get, update, remove };
