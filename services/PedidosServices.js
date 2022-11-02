const pedidos = require('../databases/pedidos.json');
const usuarios = require('../databases/usuarios.json');
const pizzas = require('../databases/pizzas.json');

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



module.exports = {
    listarPedidos
}