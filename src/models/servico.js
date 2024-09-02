const barbeiro_controller = require("../controllers/barbeiro.js");

let proxId = 1;

const model = (body, id = proxId++) => {
  if (
    body.nome != undefined &&
    body.nome != "" &&
    body.preco != undefined &&
    isNaN(Number(body.preco)) &&
    body.duracao_min != undefined &&
    body.duracao_min > 0 &&
    barbeiro_controller.show(body.barbeiro_id)
  ) {
    return {
      id,
      nome: body.nome,
      preco: body.preco,
      duracao_min: body.duracao_min,
      barbeiro_id: body.barbeiro_id,
    };
  }
};

module.exports = model;
