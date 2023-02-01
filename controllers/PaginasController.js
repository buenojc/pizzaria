const path = require("path");
const pizzas = require("../databases/pizzas.json");

const PaginasController = {
  showIndex: (req, res) => {
    return res.sendFile(path.resolve("views/index.html"));
  },
  showCarrinho: (req, res) => {
    return res.sendFile(path.resolve("views/carrinho.html"));
  },
  showPerfil: (req, res) => {
    return res.sendFile(path.resolve("views/perfil.html"));
  },
  showCadastro: (req, res) => {
    return res.sendFile(path.resolve("views/cadastro.html"));
  },
  showPizza: (req, res) => {
    const id = req.params.id;
    const pizza = pizzas.find((pizza) => pizza.id == id);

    if (pizza == undefined) return res.send("Não encontramos esta pizza");

    return res.send(pizza);
  },
};

module.exports = PaginasController;
