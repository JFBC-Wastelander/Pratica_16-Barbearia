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

module.exports = model