const express = require('express')
const servidor = express();


servidor.get('/usuarios', (req, res) => {
    console.log("chegou uma requisição!")
    return res.send('Enviando lista de usuários')
})


servidor.listen(3000)