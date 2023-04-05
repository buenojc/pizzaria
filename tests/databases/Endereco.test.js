const { Endereco, sequelize } = require('../../databases/models')

async function buscaEnderecos(){
    const enderecos = await Endereco.findAll({include: 'usuario'})
    sequelize.close()
    console.log(enderecos.map(e => e.toJSON()))
}

buscaEnderecos()