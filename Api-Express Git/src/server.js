//Importações
const express = require('express')
const bancoDados = require('./bdMemoria')
const bodyParser = require('body-parser')

//Declarações
const porta = 3001
const app = express()

//verificar padrão nos testes com Postman
app.use(bodyParser.urlencoded({ extended: true }))

//Passando o Res/rotas

//Selecionar tudo da base de dados
app.get('/produtos', (req, res) => {
    res.send(bancoDados.getPrdoutos())
})

//Selecionar produto pelo Id
app.get('/produtos/:id', (req, res) => {
    res.send(bancoDados.getProduto(req.params.id))
})

//Criando Produto
app.post('/produtos', (req, res) => {
    const produto = bancoDados.salvarProduto({
        nome:req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

//Editando produto
app.put('/produtos/:id', (req, res) => {
    const produto = bancoDados.salvarProduto({
        id: req.params.id,
        nome:req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

//Deletando produto
app.delete('/produtos/:id', (req, res) => {
    const produto = bancoDados.excluirProduto(req.params.id)
    res.send(produto)
})


//Configuração de porta
app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})
