const { Usuario } = require("../databases/models");

const ApiController = {
  listarClientes: async (req, res) => {
    const pagina = req.query.page;
    const limite = 2;
    const produtosPorPagina = pagina ? pagina * limite : 0;
    const usuarios = await Usuario.findAll({ offset: produtosPorPagina, limit: limite });
    return res.json(usuarios);
  },
};

module.exports = ApiController;
