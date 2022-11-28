const express = require('express')
const path = require('path')
const servidor = express();

servidor.use(express.static(path.join(__dirname, 'public')))

servidor.get('/', (req, res) => {
    return res.sendFile(__dirname + '/views/index.html')
})


servidor.get('/carrinho', (req, res) => {
    return res.sendFile(__dirname + '/views/carrinho.html')
})


servidor.get('/perfil', (req, res) => {
    return res.sendFile(__dirname + '/views/perfil.html')
})

servidor.listen(3000)