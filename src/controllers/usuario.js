const model = require("../models/usuario.js")

const usuarios = [];

const store = (body) => {
  let novo = model(body);
  if (novo) {
    usuarios.push(novo);
    return 201;
  }
  return 400;
};

const index = () => usuarios;

const show = (id) => usuarios.find((el) => el.id == id);

const update = (body, id) => {
  let indice = usuarios.findIndex((el) => el.id == id);
  let novo = model(body, parseInt(id));
  if (novo && indice != -1) {
    usuarios[indice] = novo;
    return 200;
  }
  return 400;
};

const destroy = (id) => {
  let indice = usuarios.findIndex((el) => el.id == id);

  if (indice != -1) {
    usuarios.splice(indice, 1);
  }
};

module.exports = {
  store,
  index,
  show,
  update,
  destroy,
};
