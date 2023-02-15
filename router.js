// Importar o express
const express = require("express");

// Importar o controller
const PaginasController = require("./controllers/PaginasController");
const AdmController = require("./controllers/AdmController")

// Criar o roteador
const router = express.Router();

// Definir as rotas para o roteador
router.get("/", PaginasController.showIndex);
router.get("/carrinho", PaginasController.showCarrinho);
router.get("/perfil", PaginasController.showPerfil);
router.get("/cadastro", PaginasController.showCadastro);
router.get("/pizzas/:id", PaginasController.showPizza);

router.get("/adm/pizzas", AdmController.listarPizzas);
router.get("/adm/pizzas/create", AdmController.criarPizza);
router.get("/adm/pizzas/:id/edit", AdmController.showEditPizza);
router.post("/adm/pizzas/store", AdmController.gravarPizza);
router.post("/adm/pizzas/update", (req, res) => {});
router.post("/adm/pizzas/delete", (req, res) => {})

// Exportar o roteador
module.exports = router;
