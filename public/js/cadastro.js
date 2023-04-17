window.addEventListener("load", () => {
  const inputCep = document.querySelector("#cep");
  const inputRua = document.getElementById("rua");
  const inputBairro = document.getElementById("bairro");
  const inputCidade = document.getElementById("cidade");
  const selectEstado = document.getElementById("estado");
  const form = document.querySelector('form')

  function preencheInfosEndereco(endereco) {
    inputRua.value = endereco.logradouro;
    inputBairro.value = endereco.bairro;
    inputCidade.value = endereco.localidade;
    selectEstado.value = endereco.uf;
  }

  async function carregaInfoCep(cep) {

    try {
      const url = `https://viacep.com.br/ws/${cep}/json/`;
      const response = await fetch(url);
      const dadosCep = await response.json();
      return dadosCep;
    } catch (error) {
      alert('Erro ao buscar Cep')
    }
  }

  async function onInputCepKeyup() {
    if (inputCep.value.length == 9) {
      const endereco = await carregaInfoCep(inputCep.value);

      if (endereco) {
        preencheInfosEndereco(endereco);
      }
    }
  }

  async function onFormSubmit(evt){
    evt.preventDefault()

    // Pega os dados do form e transforma em um objeto literal
    const formData = new FormData(evt.target)
    const dadosFormulario = Object.fromEntries(formData.entries())

    const response = await fetch(
      '/api/auth/register',
      {
          method: 'POST',
          body: JSON.stringify(dadosFormulario),
          headers: {
              "Content-type": "application/json"
          }
      }
  );

  }

  inputCep.addEventListener("change", onInputCepKeyup);
  form.addEventListener('submit', onFormSubmit)
});
