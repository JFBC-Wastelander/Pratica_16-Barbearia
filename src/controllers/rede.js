const model = require("../models/rede.js")

const redes = [];

const store = (body) => {
  let novo = model(body);
  if (novo) {
    redes.push(novo);
    return 201;
  }
  return 400;
};

const index = () => redes;

const show = (id) => redes.find((el) => el.id == id);

const update = (body, id) => {
  let indice = redes.findIndex((el) => el.id == id);
  let novo = model(body, parseInt(id));
  if (novo && indice != -1) {
    redes[indice] = novo;
    return 200;
  }
  return 400;
};

const destroy = (id) => {
  let indice = redes.findIndex((el) => el.id == id);

  if (indice != -1) {
    redes.splice(indice, 1);
  }
};

module.exports = {
  store,
  index,
  show,
  update,
  destroy,
};
