const pizzas = require("../databases/pizzas.json");
const idu = 1;

const PaginasController = {
  showIndex: (req, res) => {
    return res.render("index");
  },

  showCarrinho: (req, res) => {
    const carrinho = [pizzas[0], pizzas[1], pizzas[2]];
    const nomeDoUsuario = "Ligia Pretel";
    return res.render("carrinho", { carrinho, nomeDoUsuario });
  },

  showPerfil: (req, res) => {
    const usuarios = require("../databases/usuarios.json");
    const usuario = usuarios.find((usuario) => usuario.id == idu);
    if (usuario !== undefined) {
      return res.render("perfil", { usuario: usuario });
    } else {
      return res.render("erro-404");
    }
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
