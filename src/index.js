const express = require("express")
const atendimento_router = require("./routers/atendimento.js")
const barbearia_router = require("./routers/barbearia.js")
const barbeiro_router = require("./routers/barbeiro.js")
const cliente_router = require("./routers/cliente.js")
const rede_router = require("./routers/rede.js")
const servico_router = require("./routers/servico.js")
const usuario_router = require("./routers/usuario.js")
const app = express()
const port = 5000

app.use(express.json())

/* app.post("/barbearia", cep_endereco, (req, res) => {
    console.log(req.body)
    res.json(req.body)
})
*/

app.use("/cliente", cliente_router) // GERENCIAMENTO DE CLIENTE

app.use("/usuario", usuario_router) // GERENCIAMENTO DO USUARIO

app.use("/rede", rede_router) // GERENCIAMENTO DE REDE

app.use("/barbearia", barbearia_router) // GERENCIAMENTO DE BARBEARIA

app.use("/atendimento", atendimento_router) // GERENCIAMENTO DE ATENDIMENTO

app.use("/barbeiro", barbeiro_router) // GERENCIAMENTO DE BARBEIRO

app.use("/servico", servico_router) // GERENCIAMENTO DE SERVICO

// PORTA
app.listen(port, () => {
    console.log(`Server running in ${port} port`)
})