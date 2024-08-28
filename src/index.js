const express = require("express")
const cep_endereco = require("./middlewares/cep_endereco.js")
const app = express()
const port = 5000

app.use(express.json())

app.post("/barbearia", cep_endereco, (req, res) => {
    console.log(req.body)
    res.json(req.body)
})

app.get("/barbearia", (req, res) => {
    res.json()
})

app.listen(port, () => {
    console.log(`Server running in ${port} port`)
})