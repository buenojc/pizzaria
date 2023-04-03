const { Usuario } = require("../../databases/models");

async function buscaUsuarios() {
  const usuarios = await Usuario.findAll({attributes: {exclude: ['senha']}, raw: true });
  console.log(usuarios);
}

buscaUsuarios();
