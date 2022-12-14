// OBJETIVO: mostrar alerta caso o campo de nome
// seja abandonado sem ser preenchido

// 1 - Representar/capturar o campo "nome" p o mundo JS

// 2 - Associar uma ação a ser realizada ao evento
//     "deixou o campo"

// 3 - Definir a ação (função) que será exec

const inputNome = document.getElementById("nome");
const campo = document.querySelector(".campos label");
inputNome.addEventListener("blur", verificaSeCampoDigitado);


function verificaSeCampoDigitado(){
    if(inputNome.value == ''){
        const alerta = document.createElement('p');
        alerta.style.color = '#fff';
        alerta.innerHTML = 'Preencha o campo'
        campo.appendChild(alerta);
    }
}