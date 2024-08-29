const usuarios = [];
let proxId = 1;

const model = (body, id = proxId++) => {
  if (
    body.email != "" &&
    body.email != undefined &&
    body.email.includes("@") &&
    body.senha != "" &&
    body.senha != undefined &&
    body.senha.length >= 8
  ) {
    return {
      id,
      email: body.email,
      senha: body.senha,
    };
  }
};

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
