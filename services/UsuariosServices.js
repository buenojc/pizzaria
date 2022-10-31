const usuarios = require("../databases/usuarios.json");
const bcrypt = require('bcrypt');
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

function pegaIndexUsuario( idUsuario ){
  return usuarios.findIndex((usuario => usuario.id == idUsuario));
}


function cadastrar(objeto) {
  
  let id = 0;

  if(usuarios.length === 0){
    id = 1;
  }else{
    const ultimoUsuarioCadastrado = usuarios[usuarios.length - 1]
    id = ultimoUsuarioCadastrado.id + 1
  }

    const usuario = {
        id,
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
    
    const usuario = usuarios.find(usuario => usuario.id == idUsuario)
    
    console.log(`\nNome: ${usuario.nome}`);
    console.log(`E-mail: ${usuario.email}`);
    console.log('\nEndereços')
    console.table(usuario.enderecos);
    console.log('\nFormas de pagamento');
    console.table(usuario.formasDePagamento)
}



function remover(idDoUsuarioParaRemover) {
  const usuarioIndex = pegaIndexUsuario(idDoUsuarioParaRemover);
  usuarios.splice(usuarioIndex, 1);
  salvar(usuarios);
}



function alterar(novosDados, idUsuario) {

    const indexUsuario = pegaIndexUsuario(idUsuario);

    usuarios[indexUsuario].nome = novosDados.nome;
    usuarios[indexUsuario].email = novosDados.email;
    usuarios[indexUsuario].senha = bcrypt.hashSync(novosDados.nome, 10);

    salvar(usuarios);
}



function addEndereco(novoEndereco, idUsuario) {

  const indexUsuario = pegaIndexUsuario(idUsuario);
  usuarios[indexUsuario].enderecos.push(novoEndereco);
  salvar(usuarios);  
  
}


function removerEndereco(posicaoDoEndereco, idUsuario) {
  const indexUsuario = pegaIndexUsuario(idUsuario);
  usuarios[indexUsuario].enderecos.splice(posicaoDoEndereco, 1)
  salvar(usuarios)
}



function alterarEndereco(posicaoDoEndereco, novoEndereco, idUsuario) {
  const indexUsuario = pegaIndexUsuario(idUsuario);
  usuarios[indexUsuario].enderecos[posicaoDoEndereco] = novoEndereco;
  salvar(usuarios);
}

function addFormaDePagamento(novaFormaDePagamento, idUsuario) {
  const indexUsuario = pegaIndexUsuario(idUsuario);
  usuarios[indexUsuario].formasDePagamento.push(novaFormaDePagamento);
  salvar(usuarios);
}

function removerFormaDePagamento(posicaoDaFormaDePagamento, idUsuario) {
  const indexUsuario = pegaIndexUsuario(idUsuario);
  usuarios[indexUsuario].formasDePagamento.splice(posicaoDaFormaDePagamento, 1);
  salvar(usuarios);
}

function alterarFormaDePagamento( novaFormaDePagamento, posicaoDaFormaDePagamento, idUsuario) {
  const indexUsuario = pegaIndexUsuario(idUsuario);
  usuarios[indexUsuario].formasDePagamento[posicaoDaFormaDePagamento] = novaFormaDePagamento;
  salvar(usuarios);
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
