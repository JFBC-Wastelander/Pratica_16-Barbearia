const model = require("../models/barbeiro.js")

const barbeiros = [];

const store = (body) => {
  let novo = model(body);
  if (novo) {
    barbeiros.push(novo);
    return 201;
  }
  return 400;
};

const index = () => barbeiros;

const show = (id) => barbeiros.find((el) => el.id == id);

const update = (body, id) => {
  let indice = barbeiros.findIndex((el) => el.id == id);
  let novo = model(body, parseInt(id));
  console.log(novo);
  if (novo && indice != -1) {
    barbeiros[indice] = novo;
    return 200;
  }
  return 400;
};

const destroy = (id) => {
  let indice = barbeiros.findIndex((el) => el.id == id);

  if (indice != -1) {
    barbeiros.splice(indice, 1);
  }
};

module.exports = {
  store,
  index,
  show,
  update,
  destroy,
};
