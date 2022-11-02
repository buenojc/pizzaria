const pizzas = require('../databases/pizzas.json');
const fs = require('fs');


function listarPizzas(){
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

function salvar( listaDePizzas ){
    fs.writeFileSync('./databases/pizzas.json', JSON.stringify(listaDePizzas, null, 4))
}

function pegaIndexPorId(id){
    return pizzas.findIndex(pizza => pizza.id == id);
}


function adicionarPizza( informacoesPizza ){
    let id = pizzas[pizzas.length - 1].id + 1

    if(pizzas.length == 0){
        id = 1
    }

    const pizza = {
        id,
        nome: informacoesPizza.nome,
        ingredientes: informacoesPizza.ingredientes,
        preco: informacoesPizza.preco,
        img: informacoesPizza.img,
        destaque: informacoesPizza.destaque,
        score: 0
    }

    pizzas.push(pizza);
    salvar(pizzas)

}


function removerPizza( idPizza ){
    const indexPizza = pegaIndexPorId(idPizza);
    pizzas.splice(indexPizza, 1);
    salvar(pizzas);
}




module.exports = {
    listarPizzas,
    adicionarPizza,
    removerPizza
}