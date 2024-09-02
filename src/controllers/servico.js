const model = require("../models/servico.js")

const servicos = [];

const store = (body) => {
  let novo = model(body);
  if (novo) {
    servicos.push(novo);
    return 201;
  }
  return 400;
};

const index = () => servicos;

const show = (id) => servicos.find((el) => el.id == id);

const update = (body, id) => {
  let indice = servicos.findIndex((el) => el.id == id);
  let novo = model(body, parseInt(id));
  console.log(novo);
  if (novo && indice != -1) {
    servicos[indice] = novo;
    return 200;
  }
  return 400;
};

const destroy = (id) => {
  let indice = servicos.findIndex((el) => el.id == id);

  if (indice != -1) {
    servicos.splice(indice, 1);
  }
};

module.exports = {
  store,
  index,
  show,
  update,
  destroy,
};
