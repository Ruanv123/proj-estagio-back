//importando o servico que faz as transações com o banco de dados
const { prisma } = require("../services/Prisma");

//criando a funcao de criar produto onde recebe dados chamandos de data e armazena no banco
async function criarProduto(data) {
  const produtos = await prisma.produtos.create({
    data,
  });
  return produtos;
}

//funcao de pegar todos os produtos
async function getProdutos() {
  const produtos = await prisma.produtos.findMany();
  return produtos;
}

async function updateProdutos(id, data) {
  const produtos = await prisma.produtos.update({
    where: {
      id,
    },
    data,
  });
  return produtos;
}

async function removeProdutos(id) {
  const produtos = await prisma.produtos.delete({
    where: {
      id,
    },
  });
  return;
}

module.exports = { criarProduto, getProdutos, updateProdutos, removeProdutos };
