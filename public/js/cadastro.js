window.addEventListener("load", () => {
  const inputCep = document.querySelector("#cep");
  const inputRua = document.getElementById("rua");
  const inputBairro = document.getElementById("bairro");
  const inputCidade = document.getElementById("cidade");
  const selectEstado = document.getElementById("estado");

  function preencheInfosEndereco(endereco) {
    inputRua.value = endereco.logradouro;
    inputBairro.value = endereco.bairro;
    inputCidade.value = endereco.localidade;
    selectEstado.value = endereco.uf;
  }

  async function carregaInfoCep(cep) {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const response = await fetch(url);
    const dadosCep = await response.json();
    return dadosCep;
  }

  async function onInputCepKeyup() {
    if (inputCep.value.length == 9) {
      const endereco = await carregaInfoCep(inputCep.value);

      if (endereco.erro !== true) {
        preencheInfosEndereco(endereco);
      }
    }
  }

  inputCep.addEventListener("keyup", onInputCepKeyup);
});
