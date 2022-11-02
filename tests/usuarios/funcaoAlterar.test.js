const { alterar } = require('../../services/UsuariosServices');

alterar({
    nome: "Julio Cesar",
    email: "juliocesar@email.com",
    senha: '1234'
}, 1)