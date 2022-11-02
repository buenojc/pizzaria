const pedidos = require('../databases/pedidos.json');
const usuarios = require('../databases/usuarios.json');
const pizzas = require('../databases/pizzas.json');
const fs = require('fs');


function listarPedidos(){
    console.table(
        pedidos.map(pedido => {
            const pizzasPedidas = [];
            const usuario = usuarios.find(usuario => usuario.id == pedido.idUsuario);

            // Pega o nome das pizzas para melhor leitura.
            pedido.pizzas.map(idPizza => {
                const pizzaIndex = pizzas.findIndex(pizza => pizza.id == idPizza);
                pizzasPedidas.push(pizzas[pizzaIndex].nome);
            })
            
            return {
                id: pedido.id,
                pizzas: pizzasPedidas,
                usuario: {
                    id: pedido.idUsuario,
                    nome: usuario.nome
                },
                endereco: pedido.endereco,
                createdAt: pedido.createdAt,
                entregue: pedido.entregue
            }
            
        })
    )
}


function salvar(pedidos){
    fs.writeFileSync('./databases/pedidos.json', JSON.stringify(pedidos, null, 4));
}

function pegaIndexPedido(id){
    return pedidos.findIndex(pedido => pedido.id == id);
}

function cadastrarPedido(infoPedido){
    let id = 1;
    
    if(pedidos.length > 0){
        id = pedidos[pedidos.length - 1].id + 1
    }

    const pedido = {
        id,
        pizzas: infoPedido.pizzas,
        idUsuario: infoPedido.idUsuario,
        endereco: infoPedido.endereco,
        createdAt: new Date().toISOString(),
        entregue: null
    }

    pedidos.push(pedido);
    salvar(pedidos);
}


function alterarUsuario(idPedido, idNovoUsuario){
    const indexPedido = pegaIndexPedido(idPedido);
    pedidos[indexPedido].idUsuario = idNovoUsuario;
    salvar(pedidos)   
}


function adicionarPizzaPedido(idPedido, idPizza){
    const indexPedido = pegaIndexPedido(idPedido);
    pedidos[indexPedido].pizzas.push(idPizza)
    salvar(pedidos);
}

function removerPizzaPedido(idPedido, indexPizza){
    const indexPedido = pegaIndexPedido(idPedido);
    pedidos[indexPedido].pizzas.splice(indexPizza, 1);
    salvar(pedidos);
}


function marcarComoEntregue(idPedido){
    const indexPedido = pegaIndexPedido(idPedido);
    pedidos[indexPedido].entregue = true;
    salvar(pedidos);
}


module.exports = {
    listarPedidos,
    cadastrarPedido,
    alterarUsuario,
    adicionarPizzaPedido,
    removerPizzaPedido,
    marcarComoEntregue
}