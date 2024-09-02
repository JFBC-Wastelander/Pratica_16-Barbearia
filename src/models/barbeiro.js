const barbearia_controller = require("../controllers/barbearia.js");

let proxId = 1;

const model = (body, id = proxId++) => {
  if (
    body.nome != undefined &&
    body.nome != "" &&
    body.foto != undefined &&
    body.foto != "" &&
    body.bio != undefined &&
    body.bio != "" &&
    barbearia_controller.show(body.barbearia_id)
  ) {
    return {
      id,
      nome: body.nome,
      foto: body.foto,
      bio: body.bio,
      barbearia_id: body.barbearia_id,
    };
  }
};

module.exports = model;
