const clientes = [];
let proxId = 1;

const model = (body, id = proxId++) => {
  let telefone = body.telefone
    .replaceAll("-", "")
    .replaceAll("(", "")
    .replaceAll(")", "")
    .replaceAll(" ", "");

  let soNumeros = true;
  telefone.split("").forEach((el) => {
    if (isNaN(Number(el))) {
      soNumeros = false;
    }
  });
  if (
    body.nome != undefined &&
    body.email != undefined &&
    telefone != undefined &&
    body.nome != "" &&
    body.email != "" &&
    telefone != "" &&
    body.email.includes("@") &&
    telefone.length >= 11 &&
    telefone.length <= 12 &&
    soNumeros
  ) {
    return {
      id,
      telefone: telefone,
      nome: body.nome,
      email: body.email,
      senha: body.senha,
    };
  }
};

const store = (body) => {
  let novo = model(body);
  if (novo) {
    clientes.push(novo);
    return 201;
  }
  return 400;
};

const index = () => clientes;

const show = (id) => clientes.find((el) => el.id == id);

const update = (body, id) => {
  let indice = clientes.findIndex((el) => el.id == id);
  let novo = model(body, parseInt(id));
  console.log(novo);
  if (novo && indice != -1) {
    clientes[indice] = novo;
    return 200;
  }
  return 400;
};

const destroy = (id) => {
  let indice = clientes.findIndex((el) => el.id == id);

  if (indice != -1) {
    clientes.splice(indice, 1);
  }
};

module.exports = {
  store,
  index,
  show,
  update,
  destroy,
};
