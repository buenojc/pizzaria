const { adicionarPizza } = require('../../services/PizzasServices');

const pizza = {
    nome: "Quatro Queijos",
    ingredientes: [
        "mussarela",
        "gorgonzola",
        "parmesão",
        "gruyere"
    ],
    preco: 46.60,
    img: "/img/quatro-queijo.jpg",
    destaque: false
}

adicionarPizza(pizza);