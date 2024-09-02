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

module.exports = model