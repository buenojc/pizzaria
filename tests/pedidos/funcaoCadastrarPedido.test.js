const { cadastrarPedido } = require('../../services/PedidosServices');

const pedido = {
    pizzas: [1, 3 ,2],
    idUsuario: 4,
    endereco: "Rua das árvores 37"
}

cadastrarPedido(pedido);