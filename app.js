const express = require("express");
const path = require("path");
const session = require("express-session");
const bloqueiaForaDeHora = require("./middlewares/bloqueiaForaDeHora");
const registraRequisicao = require("./middlewares/registraRequisicao");
const servidor = express();
const router = require("./routers/router");
const routerAdm = require("./routers/routerAdm");
const routerApi = require('./routerApi')

servidor.use(express.static(path.join(__dirname, "public")));
servidor.set("view engine", "ejs");
servidor.use(session({
    secret: 'SEGREDO',
    resave: false,
    saveUninitialized: false
}))
servidor.use(express.urlencoded({ extended: false }));
servidor.use(express.json());

// Define roteador da área adm - Antes dos middlewares
// assim as rotas adm não são afetadas pelos middlewares
servidor.use(routerAdm);
servidor.use('/api', routerApi);

// Configurando Middlewares
servidor.use(registraRequisicao);
servidor.use(bloqueiaForaDeHora);

// Define roteador a ser utilizado
servidor.use(router);

servidor.listen(3000);
