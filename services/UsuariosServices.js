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



function pegaIdDisponivel(){
    //Função criada para lidar com usuários já cadastrados no database com Id não sequencial.

    let id = usuarios.length + 1;
    let idDisponivel = usuarios.find( usuario => usuario.id == id)

    while(idDisponivel !== undefined){
        id += 1;
        idDisponivel = usuarios.find( usuario => usuario.id == id)
    }
  
    return id;
}



function cadastrar(objeto) {
  
    const bcrypt = require('bcrypt');
    const usuario = {
        id: pegaIdDisponivel(),
        nome: objeto.nome,
        email: objeto.email,
        senha: bcrypt.hashSync(objeto.senha, 10),
        enderecos: [objeto.endereco],
        formasDePagamento: []
    }

    usuarios.push(usuario);
    salvar(usuarios);

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
