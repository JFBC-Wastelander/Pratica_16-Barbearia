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
    let novo = model(body)
    if (novo) {
        usuarios.push(body)
        return 201
    }
    return 400
}

const index = () => usuarios

const show = (id) => usuarios.find((el) => el.id == id)

const update = (id, body) => {
    let index = usuarios.find((el) => el.id == id)
    let novo = model(body, parseInt(id))
    if (novo && indes != -1) {
        usuarios[index]= novo
        return 200
    }
    return 400
}

const destroy = (id) => {
    let index = usuarios.find((el) => el.id == id)

    if (index != -1){
        usuarios.splice(index, 1)
    }
}

module.exports = {
    store,
    index,
    show,
    update,
    destroy
}