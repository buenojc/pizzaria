// Importar o express
const express = require("express");
const path = require("path");
// Importar o controller
const AdmController = require("../controllers/AdmController");

// Criar o roteador
const routerAdm = express.Router();

const multer = require("multer");
const verificaSeLogado = require("../middlewares/verificaSeLogado");
const upload = multer({ dest: 'public/img/upload' })



routerAdm.get('/adm/login', AdmController.showLogin);
routerAdm.post('/adm/login', AdmController.login);
routerAdm.use('/adm/', verificaSeLogado)

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
routerAdm.get("/admin/pizzas/:id/delete", AdmController.delete);


// Exportar o roteador
module.exports = routerAdm;
