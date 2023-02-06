const path = require("path");
const pizzas = require("../databases/pizzas.json");

const PaginasController = {
  showIndex: (req, res) => {
    return res.render("index");
  },
  showCarrinho: (req, res) => {
    const carrinho = [pizzas[0], pizzas[1], pizzas[2]];
    const nomeDoUsuario = "Ligia Pretel"
    return res.render("carrinho", { carrinho, nomeDoUsuario });
  },
  showPerfil: (req, res) => {
    return res.render("perfil");
  },
  showCadastro: (req, res) => {
    return res.render("cadastro");
  },
  showPizza: (req, res) => {
    const id = req.params.id;
    const pizza = pizzas.find((pizza) => pizza.id == id);

    if (pizza == undefined) return res.send("Não encontramos esta pizza");

    return res.render("pizza", { pizza: pizza });
  },
};

module.exports = PaginasController;
