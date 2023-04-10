const { Pizza } = require('../../databases/models')

async function buscaPizzas() {

    // raw traz só os dados do banco de dados ao invez de funções junto com dados
    let pizzas = await Pizza.findAll({include: 'ingredientes'})
    console.log(pizzas)
}

buscaPizzas()