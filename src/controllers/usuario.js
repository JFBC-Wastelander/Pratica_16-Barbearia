const usuarios = []
let proxId = 1
const model = (usuario, id = proxId++) => {
    if (ususario.email != "" &&
    usuario.email != undefined &&
    usuario.senha != "" &&
    usuario.senha != undefined) {
        return {
            id,
            email,
            senha
        }
    }
}

const store = (body) => {
    const novo = model(body)
    if (novo) {
        usuarios.push(body)
        return 201
    }
    return 400
}

const index = () => usuarios

const show = (id) => usuarios.find((el) => el.id == id)

const update = (id, body) => {
    const index = usuarios.find((el) => el.id == id)

}