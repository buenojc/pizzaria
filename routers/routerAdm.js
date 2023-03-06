// Importar o express
const express = require("express");
const path = require("path");
// Importar o controller
const AdmController = require("../controllers/AdmController");

// Criar o roteador
const routerAdm = express.Router();

const multer = require("multer");
const upload = multer({ dest: 'public/img/upload' })

// Definir as rotas para o roteador
routerAdm.get("/adm/pizzas", AdmController.listarPizzas);
routerAdm.get("/adm/pizzas/create", AdmController.criarPizza);
routerAdm.get("/adm/pizzas/:id/edit", AdmController.showEditPizza);
routerAdm.post(
  "/adm/pizzas/store",
  upload.single("imgPizza"),
  AdmController.gravarPizza
);
routerAdm.post("/adm/pizzas/update", (req, res) => {});
routerAdm.post("/adm/pizzas/delete", (req, res) => {});

routerAdm.get('/adm/login', AdmController.showLogin);
routerAdm.post('/adm/login', AdmController.login);

// Exportar o roteador
module.exports = routerAdm;
