const pizzas = require('../databases/pizzas.json');

function listar(){
    console.table(
        pizzas.map(pizza => {
            return {
                id: pizza.id,
                nome: pizza.nome,
                preco: pizza.preco,
                score: pizza.score
            }
        })
    )
}


module.exports = {
    listar
}