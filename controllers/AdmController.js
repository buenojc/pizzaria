const PizzasServices = require("../services/PizzasServices");
const fs = require("fs");

const AdmController = {
  listarPizzas: (req, res) => {
    const pizzas = PizzasServices.carregarPizzas();
    res.render("lista-de-pizzas", { pizzas });
  },
  criarPizza: (req, res) => {
    res.render("form-add-pizza");
  },
  gravarPizza: (req, res) => {
    const novoNome = `${Date.now()}-${req.file.originalname}`;
    fs.renameSync(req.file.path, `${req.file.destination}/${novoNome}`);

    const pizza = {
      nome: req.body.nome,
      preco: Number(req.body.preco),
      img: `/img/upload/${novoNome}`,
      destaque: false,
      score: 0,
      ingredientes: req.body.ingredientes.split(",").map((e) => e.trim()),
    };

    PizzasServices.adicionarPizza(pizza);
    res.redirect("/adm/pizzas");
  },
  showEditPizza: (req, res) => {
    const pizza = PizzasServices.carregarPizza(req.params.id);
    res.render("form-edit-pizza", { pizza });
  },
};

module.exports = AdmController;
