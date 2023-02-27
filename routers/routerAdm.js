// Importar o express
const express = require("express");

// Importar o controller
const AdmController = require("../controllers/AdmController");

// Criar o roteador
const routerAdm = express.Router();

// Definir as rotas para o roteador
routerAdm.get("/adm/pizzas", AdmController.listarPizzas);
routerAdm.get("/adm/pizzas/create", AdmController.criarPizza);
routerAdm.get("/adm/pizzas/:id/edit", AdmController.showEditPizza);
routerAdm.post("/adm/pizzas/store", AdmController.gravarPizza);
routerAdm.post("/adm/pizzas/update", (req, res) => {});
routerAdm.post("/adm/pizzas/delete", (req, res) => {})

// Exportar o roteador
module.exports = routerAdm;
