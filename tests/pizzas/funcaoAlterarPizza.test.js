const { alterarPizza } = require('../../services/PizzasServicesCli');

alterarPizza({
    nome: "Calabresa",
    preco: 28,
    destaque: true,
    img: "/img/calabresa-2.jpg"
}, 1)