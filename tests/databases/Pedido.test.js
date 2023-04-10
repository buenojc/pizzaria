const { Pedido, sequelize } = require('../../databases/models')

async function listaPedidos(){
    const pedidos = await Pedido.findAll({include: 'pizzas'})
    sequelize.close()
    console.log(pedidos.map(e => e.toJSON()))
}

listaPedidos()