const usuarios = require("../databases/usuarios.json");
const fs = require('fs')

function listar() {
  console.table(
    usuarios.map( usuario => {
      return {
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email,
      };
    })
  );
}

function salvar(arrayDeUsuarios) {
  fs.writeFileSync('./databases/usuarios.json', JSON.stringify(arrayDeUsuarios, null, 4))
}

function cadastrar(objeto) {
  // Seu código aqui
}

function detalhar(idUsuario) {
  // Seu código aqui
}

function remover(idDoUsuarioParaRemover) {
  // Seu código aqui
}

function alterar(novosDados, idUsuario) {
  // Seu código aqui
}

function addEndereco(novoEndereco, idUsuario) {
  // Seu código aqui
}

function removerEndereco(posicaoDoEndereco, idUsuario) {
  // Seu código aqui
}

function alterarEndereco(posicaoDoEndereco, novoEndereco, idUsuario) {
  // Seu código aqui
}

function addFormaDePagamento(novaFormaDePagamento, idUsuario) {
  // Seu código aqui
}

function removerFormaDePagamento(posicaoDaFormaDePagamento, idUsuario) {
  // Seu código aqui
}

function alterarFormaDePagamento(
  novaFormaDePagamento,
  posicaoDaFormaDePagamento,
  idUsuario
) {
  // Seu código aqui
}

const UsuariosServices = {
  cadastrar,
  listar,
  detalhar,
  salvar,
  remover,
  alterar,
  addEndereco,
  removerEndereco,
  alteraEndereco: alterarEndereco,
  addFormaDePagamento,
  removerFormaDePagamento,
  alterarFormaDePagamento,
};

module.exports = UsuariosServices;
