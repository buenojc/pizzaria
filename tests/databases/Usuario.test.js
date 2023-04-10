const { Usuario, sequelize } = require("../../databases/models");

async function buscaUsuario() {
  const usuario = await Usuario.findByPk(2, {include: ['enderecos', 'pedidos']});
  sequelize.close()
  console.log(usuario.toJSON());
}

buscaUsuario();
