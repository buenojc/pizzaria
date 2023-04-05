const { Ingrediente, sequelize } = require('../../databases/models')

async function buscaIngredientes(){
    const ingredientes = await Ingrediente.findAll({include: 'pizzas'})
    sequelize.close()
    console.log(ingredientes.map(e => e.toJSON()))
}

buscaIngredientes()