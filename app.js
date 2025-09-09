// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Juego del número secreto';

// let parrafo = document.querySelector('p');
// parrafo.innerHTML = 'Indica un número del 1 al 10';
let numeroSecreto;
let intentos;
let numerosSorteados = [];
let numeroMax = 10;
//console.log(numeroSecreto);
function asignarTexteElemento(elemento, texto) {
     let elementoHTML = document.querySelector(elemento);
     elementoHTML.innerHTML = texto;
     return;
}

function verificarIntento() {
     //let numeroUsuario = document.querySelector('input');
     let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
     // console.log(typeof(numeroUsuario));
     // console.log(typeof(numeroSecreto));
     // console.log(numeroUsuario);
     // console.log(numeroSecreto);
     console.log(intentos);
     if (numeroUsuario === numeroSecreto) {
          asignarTexteElemento('p', `Acertaste el número en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}`);
          document.getElementById('reiniciar').removeAttribute('disabled');
     } else {
          limpiarCaja();
          if (numeroUsuario < 1 || numeroUsuario > 10) {
               asignarTexteElemento('p', 'Número no válido');
          } else if (numeroUsuario > numeroSecreto) {
               asignarTexteElemento('p', 'El número secreto es menor');
          } else {
               asignarTexteElemento('p', 'El número secreto es mayor');
          }
          intentos++;
     }

     console.log(numeroUsuario === numeroSecreto);
     return; //no es oblogatorio, es para especificar el valor a retornar
}

function limpiarCaja() {
     document.querySelector('input').value = '';
}

function generarNumeroSecreto() {
     let numeroGenerado = Math.floor(Math.random() * numeroMax) + 1;
     console.log(numeroGenerado);
     console.log(numerosSorteados);
     if (numerosSorteados.length == numeroMax) {
          asignarTexteElemento('p', 'Ya se sortearon todos los números posibles');
     } else {
          if (numerosSorteados.includes(numeroGenerado)) {
               return generarNumeroSecreto();
          } else {
               numerosSorteados.push(numeroGenerado);// agrega el numero nuevo al final
               return numeroGenerado;
          }
     }
}

function condicionesIniciales() {
     asignarTexteElemento('h1', 'Juego del número secreto');
     asignarTexteElemento('p', `Indica un número del 1 al ${numeroMax}`);
     numeroSecreto = generarNumeroSecreto();
     intentos = 1;
}

function reinciarJuego() {
     limpiarCaja();
     condicionesIniciales();
     document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();
