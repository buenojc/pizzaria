const express = require('express')
const servidor = express();


servidor.get('/usuarios', (req, res) => {
    console.log("chegou uma requisição!")
    // return res.send('Enviando lista de usuários')
    return res.sendFile(__dirname + '/views/index.html')
})


servidor.listen(3000)