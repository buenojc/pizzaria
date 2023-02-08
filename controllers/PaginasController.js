const fs = require("fs");
const path = require("path");
const pizzas = require("../databases/pizzas.json");
const idu = 2;

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
      return res.render("perfil", { usuario });
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
    const imgSrc = path.join(__dirname, `../public/${pizza.img}`);
    let pizzaImg = "";

    if (pizza == undefined) return res.send("Não encontramos esta pizza");

    if (pizza.img == undefined || fs.existsSync(imgSrc) == false) {
      pizzaImg = "/img/no-image.png";
    } else {
      pizzaImg = pizza.img;
    }

    return res.render("pizza", { pizza, pizzaImg });
  },
};

module.exports = PaginasController;
