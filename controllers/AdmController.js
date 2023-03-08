const PizzasServices = require("../services/PizzasServices");
const administradores = require("../databases/administradores.json");
const fs = require("fs");
const bcrypt = require("bcrypt");

const AdmController = {
  listarPizzas: (req, res) => {
    const msg = req.query.msg
    const pizzas = PizzasServices.carregarPizzas();
    res.render("lista-de-pizzas", { pizzas, msg });
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
  showLogin: (req, res) => {
    res.render("adm-login");
  },
  login: (req, res) => {
    const { email, senha } = req.body;
    const adm = administradores.find((adm) => adm.email == email);

    if (adm == undefined) {
      return res.send("E-mail não cadastrado");
    }

    const senhaCorreta = bcrypt.compareSync(senha, adm.senha);

    if (!senhaCorreta) {
      return res.send("E-mail não cadastrado");
    }

    req.session.admLogado = true
    return res.redirect("/adm/pizzas");
  },
  delete: (req, res) => {
    const {id} = req.params
    PizzasServices.removerPizza(id)
    return res.redirect('/adm/pizzas?msg=pizza-apagada')    
  }
};

module.exports = AdmController;
