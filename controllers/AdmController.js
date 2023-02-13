const PizzasServices = require("../services/PizzasServices");

const AdmController = {
  listarPizzas: (req, res) => {
    const pizzas = PizzasServices.carregarPizzas();
    res.render("lista-de-pizzas", { pizzas });
  },
  criarPizza: (req, res) => {
    res.render("form-add-pizza")
  },
  gravarPizza: (req, res) => {
    const pizza = {
        nome: req.body.nome,
        preco: Number(req.body.preco),
        ingredientes: req.body.ingredientes
    }
    
    PizzasServices.adicionarPizza(pizza)

    res.redirect("/adm/pizzas")
  }
};

module.exports = AdmController;
