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
    let id = 1

    if(pizzas.length > 0){
        id = pizzas[pizzas.length - 1].id + 1
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


function alterarPizza( novasInformacoes, idPizza ){
    const indexPizza = pegaIndexPorId(idPizza);

    pizzas[indexPizza].nome = novasInformacoes.nome;
    pizzas[indexPizza].preco = novasInformacoes.preco;
    pizzas[indexPizza].destaque = novasInformacoes.destaque;
    pizzas[indexPizza].img = novasInformacoes.img;

    salvar(pizzas);
}


function alterarScore(novoScore, idPizza){
    const indexPizza = pegaIndexPorId(idPizza);
    pizzas[indexPizza].score = novoScore;
    salvar(pizzas);

}


function adicionarIngrediente(novosIngrediente, idPizza){
    const indexPizza = pegaIndexPorId(idPizza);
    pizzas[indexPizza].ingredientes.push(novosIngrediente)
    salvar(pizzas);
}


function removerIngrediente(indexIngredienteARemover, idPizza){
    const indexPizza = pegaIndexPorId(idPizza);
    pizzas[indexPizza].ingredientes.splice(indexIngredienteARemover, 1);
    salvar(pizzas);
}


function alterarIngrediente(indexIngrediente, ingredienteAtualizado, idPizza){
    const indexPizza = pegaIndexPorId(idPizza);
    pizzas[indexPizza].ingredientes[indexIngrediente] = ingredienteAtualizado;
    salvar(pizzas);
}

module.exports = {
    listarPizzas,
    adicionarPizza,
    removerPizza,
    alterarPizza,
    alterarScore,
    adicionarIngrediente,
    removerIngrediente,
    alterarIngrediente
}