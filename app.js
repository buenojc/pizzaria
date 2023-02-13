const express = require("express");
const path = require("path");
const servidor = express();
const router = require("./router")

servidor.use(express.static(path.join(__dirname, "public")));
servidor.set("view engine", "ejs")

servidor.use(express.urlencoded({extended: false}))
servidor.use(express.json())
// Define roteador a ser utilizado
servidor.use(router)


servidor.listen(3000);
