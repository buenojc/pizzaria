const { cadastrar } = require('../../services/UsuariosServices')

cadastrar({
    nome: "Julio Cesar",
    email: "juliocesar@dousuario.com",
    senha: "senha_do_usuario_sem_criptografar",
    endereco: "Rua dos usuários, nº 256. Usuariolândia-BA"
})