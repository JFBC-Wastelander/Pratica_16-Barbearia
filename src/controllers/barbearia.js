const model = require("../models/barbearia.js")

const barbearias = [];

const store = (body) => {
  let novo = model(body);
  if (novo) {
    barbearias.push(novo);
    return 201;
  }
  return 400;
};

const index = () => barbearias;

const show = (id) => barbearias.find((el) => el.id == id);

const update = (body, id) => {
  let indice = barbearias.findIndex((el) => el.id == id);
  let novo = model(body, parseInt(id));
  if (novo && indice != -1) {
    barbearias[indice] = novo;
    return 200;
  }
  return 400;
};

const destroy = (id) => {
  let indice = barbearias.findIndex((el) => el.id == id);

  if (indice != -1) {
    barbearias.splice(indice, 1);
  }
};

module.exports = {
  store,
  index,
  show,
  update,
  destroy,
};
