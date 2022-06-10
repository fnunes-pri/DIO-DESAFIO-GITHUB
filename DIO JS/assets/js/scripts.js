const sempreZero = 0
let numeroAtual = 0

const spanAtual = window.document.getElementById('numero-atual');

spanAtual.innerText = numeroAtual

const buttonMenos = window.document.getElementById('diminuir');
const buttonMais = window.document.getElementById('acrescentar');

function diminuir(){
  numeroAtual = numeroAtual - 1
  spanAtual.innerText = numeroAtual
}
buttonMenos.addEventListener('click',diminuir)

function acrescentar(){
  numeroAtual = numeroAtual + 1
  spanAtual.innerText = numeroAtual
}
buttonMais.addEventListener('click',acrescentar)