const { Usuario, Endereco } = require("../databases/models");
const bcrypt = require("bcrypt");

const ApiController = {
  listarClientes: async (req, res) => {
    const pagina = req.query.page;
    const limite = 2;
    const produtosPorPagina = pagina ? pagina * limite : 0;
    const usuarios = await Usuario.findAll({
      offset: produtosPorPagina,
      limit: limite,
    });
    return res.json(usuarios);
  },
  registrarCliente: async (req, res) => {
    let usuarioCriado = await Usuario.create({
      nome: req.body.nome,
      email: req.body.email,
      senha: bcrypt.hashSync(req.body.senha, 10),
    });

    Endereco.create({
      endereco: `${req.body.estado}-${req.body.cidade}-${req.body.logradouro}-${req.body.numero}-${req.body.numero}`,
      usuario_id: usuarioCriado.id,
    });

    // usuarioCriado.setEnderecos(
    //   {
    //     endereco: `
    //       ${req.body.uf}-${req.body.cidade}-${req.body.logradouro}-${req.body.numero}-${req.body.numero}
    //     `
    //   }
    // )

    return res.json(usuarioCriado);
  },
};

module.exports = ApiController;
