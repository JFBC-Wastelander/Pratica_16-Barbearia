const express = require("express")
const cep_endereco = require("./middlewares/cep_endereco.js")
const cliente_controller = require("./controllers/cliente.js")
const usuario_controller = require("./controllers/usuario.js")
const rede_controller = require("./controllers/rede.js")
const app = express()
const port = 5000

app.use(express.json())

app.post("/barbearia", cep_endereco, (req, res) => {
    console.log(req.body)
    res.json(req.body)
})

// GERENCIAMENTO DE CLIENTE
app.get("/cliente", (req, res) => {
    res.json(cliente_controller.index())
})

app.get("/cliente", (req, res) => {
    res.json(cliente_controller.show(req.params.id))
})

app.post("/cliente", (req, res) => {
    const code = cliente_controller.store(req.body)
    res.status(code).json()
})

app.put("/cliente/:id", (req, res) => {
    const code = cliente_controller.update(req.body, req.params.id)
    res.status(code).json()
})

app.delete("/cliente/:id", (req, res) => {
    cliente_controller.destroy(req.params.id)
    res.json()
})
// FIM DO GERENCIAMENTO DE CLIENTE

// GERENCIAMENTO DO USUARIO
app.get("/usuario", (req, res) => {
    res.json(usuario_controller.index())
})

app.get("/usuario", (req, res) => {
    res.json(usuario_controller.show(req.params.id))
})

app.post("/usuario", (req, res) => {
    const code = usuario_controller.store(req.body)
    res.status(code).json()
})

app.put("/usuario/:id", (req, res) => { 
    const code = usuario_controller.update(req.body, req.params.id)
    res.status(code).json()
})

app.delete("/usuario/:id", (req, res) => {
    usuario_controller.destroy(req.params.id)
    res.json()
})
// FIM DO GERENCIAMENTO DO USUARIO

// GERENCIAMENTO DE REDE
app.get("/rede", (req, res) => {
    res.json(rede_controller.index())
})

app.get("/rede", (req, res) => {
    res.json(rede_controller.show(req.params.id))
})

app.post("/rede", (req, res) => {
    const code = rede_controller.store(req.body)
    res.status(code).json()
})

app.put("/rede/:id", (req, res) => {
    const code = rede_controller.update(req.body, req.params.id)
    res.status(code).json()
})

app.delete("/rede/:id", (req, res) => {
    rede_controller.destroy(req.params.id)
    res.json()
})
// FIM DO GERENCIAMENTO DE REDE

// PORTA
app.listen(port, () => {
    console.log(`Server running in ${port} port`)
})