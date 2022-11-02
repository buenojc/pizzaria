const { salvar } = require('../../services/UsuariosServices')

const usuarios = [
    {
        nome: "Julio Cesar",
        email: "juliocesar@email.com",
        senha: "1234",
        endereco: [
            "Rua das flores, 45. São Paulo-SP"
        ]
    },
    {
        nome: "Marcelo Junior",
        email: "marcelo@email.com",
        senha: "1234",
        endereco: [
            "Rua das Árvores, 1050. Osasco-SP"
        ]
    },
    {
        nome: "Ana Luisa",
        email: "analuisa@email.com",
        senha: "1234",
        endereco: [
            "Av das Orquideas, 10. Belo Horizonte-MG"
        ]
    }
]

salvar(usuarios)