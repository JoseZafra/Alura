// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Clasificación de números';

// let subtitulo = document.querySelector('p');
// subtitulo.innerHTML = 'Ingresa un número';

// function verificarIntento() {
//     let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
//     if(numeroUsuario > 0){
//         console.log('El número es positivo');
//     }else if (numeroUsuario < 0) {
//         console.log('El número es negativo');
//     } else {
//         console.log('El número es cero');
//     }
// }

//1
// function verificarIntento() {
//     console.log('¡Hola, mundo!');
// }

// verificarIntento();

//2
// function verificarIntento() {
//     let nombre = document.getElementById('valorUsuario').value;
//     console.log(typeof (nombre));
//     console.log(nombre);
//     saludar(nombre);
// }

// function saludar(nombre) {
//     console.log(`Hola ${nombre}`);
// }

//3 , 5 y 6
// let num1 = null;
// let num2 = null;
// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Cálculo del número mayor';
// let subtitulo = document.querySelector('p');
// subtitulo.innerHTML = 'Ingresa el primer número';
// function verificarIntento() {
//     num1 = parseInt(document.getElementById('valorUsuario').value);
//     document.querySelector('input').value = '';
//     subtitulo.innerHTML = 'Ingresa el segundo número';
// }

// function mayor() {
//     num2 = parseInt(document.getElementById('valorUsuario').value);
//     numeroMayor(num1, num2);
//     document.querySelector('input').value = '';

// }

// function numeroMayor(num1, num2) {
//     console.log(num1 > num2 ? `El número mayor es ${num1}` : `El número mayor es ${num2}`);
// }

//4
// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Promedio de tres números';
// let subtitulo = document.querySelector('p');
// subtitulo.innerHTML = 'Ingresa el primer número';

// let num1 = null;
// let num2 = null;
// let num3 = null;
// let cont = 0;

// function verificarIntento() {
//     if (cont === 0) {
//         num1 = parseInt(document.getElementById('valorUsuario').value);
//         console.log(num1);
//         document.querySelector('input').value = '';
//         subtitulo.innerHTML = 'Ingresa el segundo número';
//         cont ++;
//     } else if (cont > 0) {
//         num2 = parseInt(document.getElementById('valorUsuario').value);
//         console.log(num2);
//         document.querySelector('input').value = '';
//         subtitulo.innerHTML = 'Ingresa el tercer número';
//     }
// }

// function mayor() {
//     num3 = parseInt(document.getElementById('valorUsuario').value);
//     console.log(num3);
//     promedio(num1, num2, num3);
//     document.querySelector('input').value = '';
//     subtitulo.innerHTML = 'Ingresa el primer número';
//     contador = 0;

// }

// function promedio(num1, num2, num3) {
//     console.log(`El número mayor es: ${Math.max(num1, num2, num3)}`);
//     console.log(`El promedio de los 3 números es:  ${(num1 + num2 + num3) / 3}`);
//     num1 = null;
//     num2 = null;
//     num3 = null;
// }

// CALCULADORA DE PROMEDIO Y SITUACIÓN DEL ALUMNO
// let promedio = null;
// let nota1 = null;
// let nota2 = null;
// let nota3 = null;
// let nota4 = null;
// let cont = 1;
// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Promedio de alumno';
// let sub = document.querySelector('p');
// sub.innerHTML = 'Ingresa la primer nota';

// function verificarIntento() {
//     console.log(`Contador: ${cont}`);
//     if (cont === 1) {
//         nota1 = parseFloat(document.getElementById('valorUsuario').value);
//         console.log(nota1);
//         sub.innerHTML = 'Ingresa la segunda nota';
//         cont++;
//     } else if (cont === 2) {
//         nota2 = parseFloat(document.getElementById('valorUsuario').value);
//         console.log(nota2);
//         sub.innerHTML = 'Ingresa la tercer nota';
//         cont++;
//     } else if (cont === 3) {
//         nota3 = parseFloat(document.getElementById('valorUsuario').value);
//         console.log(nota3);
//         sub.innerHTML = 'Ingresa la última nota';
//         cont++;
//     } else if (cont === 4) {
//         nota4 = parseFloat(document.getElementById('valorUsuario').value);
//         console.log(nota4);
//         sub.innerHTML = 'Presiona "Calcular" para mostrar el promedio';
//         cont = 0;
//     }
//     document.querySelector('input').value = '';
// }

// function calcularPromedio(nota1, nota2, nota3, nota4) {
//     return (nota1 + nota2 + nota3 + nota4) / 4;
// }

// function calcular(promedio) {
//     promedio = calcularPromedio(nota1, nota2, nota3, nota4);
//     console.log(promedio);
//     console.log(promedio >= 5 ? 'Aprobado' : 'Reprobado');
// }


//1 - Crea una función que calcule el índice de masa corporal (IMC) de una persona
// a partir de su altura en metros y peso en kilogramos, que se recibirán
// como parámetros.
// let peso;
// let altura;

// function condicionesIniciales() {
//     asignaParametros('h1', 'Cálculo del IMC personal');
//     asignaParametros('p', 'Ingresa tu peso en Kg');
//     document.querySelector('input').value = '';
//     document.querySelector('#reiniciar').setAttribute('disabled', 'true');
//     peso = 0;
//     altura = 0;
// }

// function asignaParametros(elemento, texto) {
//     let titulos = document.querySelector(elemento);
//     titulos.innerHTML = texto;
// }

// function limpiarCaja() {
//     document.querySelector('#valorUsuario').value = '';
// }

// condicionesIniciales();

// function verificarIntento() {
//     if (peso === 0) {
//         peso = parseFloat(document.getElementById('valorUsuario').value);
//         limpiarCaja();
//         asignaParametros('p', 'Ingresa tu altura en metros');
//     } else if (altura === 0) {
//         altura = parseFloat(document.getElementById('valorUsuario').value);
//         limpiarCaja();
//         document.getElementById('reiniciar').removeAttribute('disabled');
//     }
// }

// function reinciarJuego() {
//     let imc = calcularIMC(peso, altura);
//     console.log(`El IMC de la persona es: ${imc}`);
//     condicionesIniciales();
// }

// function calcularIMC(peso, altura) {
//     return peso / (altura * altura);
// }

//2 - Crea una función que calcule el valor del factorial de un número
// pasado como parámetro.
// let numero;

// function condicionesIniciales() {
//     asignaParametros('h1', 'Cálculo del factorial de un número');
//     asignaParametros('p', 'Ingresa un número');
//     document.querySelector('input').value = '';
//     document.querySelector('#reiniciar').setAttribute('disabled', 'true');
//     numero = 0;
// }

// function asignaParametros(elemento, texto) {
//     let titulos = document.querySelector(elemento);
//     titulos.innerHTML = texto;
// }

// function limpiarCaja() {
//     document.querySelector('#valorUsuario').value = '';
// }

// condicionesIniciales();

// function verificarIntento() {
//     numero = parseInt(document.getElementById('valorUsuario').value);
//     limpiarCaja();
//     document.getElementById('reiniciar').removeAttribute('disabled');
// }

// function reinciarJuego() {
//     let factorial = calcularFactorial(numero);
//     console.log(`El factorial de ${numero} es: ${factorial}`);
//     condicionesIniciales();
// }

// function calcularFactorial(numero) {
//     // let cont = numero;
//     // let fact = numero;
//     if (numero === 0 || numero === 1) {
//         return 1;
//     } else {
//         //for (i = 1; i < cont; i++) {
//         // fact = fact * (--numero);
//         return numero * calcularFactorial(--numero); // recursividad
//         //}
//         //return fact;
//     }
// }

//3 - Crea una función que convierta un valor en dólares, pasado como
// parámetro, y devuelva el valor equivalente en
// reales(moneda brasileña,si deseas puedes hacerlo con el valor
// del dólar en tu país). Para esto, considera la cotización del
// dólar igual a R$4,80.
// let cantidad;

// function condicionesIniciales() {
//     asignaParametros('h1', 'Conversión de moneda');
//     asignaParametros('p', 'Ingresa una cantidad en dólares');
//     document.querySelector('input').value = '';
//     document.querySelector('#reiniciar').setAttribute('disabled', 'true');
//     cantidad = 0;
// }

// function asignaParametros(elemento, texto) {
//     let titulos = document.querySelector(elemento);
//     titulos.innerHTML = texto;
// }

// function limpiarCaja() {
//     document.querySelector('#valorUsuario').value = '';
// }

// condicionesIniciales();

// function verificarIntento() {
//     cantidad = parseFloat(document.getElementById('valorUsuario').value);
//     limpiarCaja();
//     document.getElementById('reiniciar').removeAttribute('disabled');
// }

// function reinciarJuego() {
//     let conversion = convertir(cantidad);
//     console.log(`${cantidad} ${cantidad == 1 ? 'Dólar equivale' : 'Dólares equivalen'} a: R$${conversion} ${conversion === 1 ? 'Real Brasileño' : 'Reales Brasileños'}`);
//     condicionesIniciales();
// }

// function convertir(cantidad) {
//     return cantidad * 4.80;
// }

//4 - Crea una función que muestre en pantalla el área y
// el perímetro de una sala rectangular, utilizando la altura
// y la anchura que se proporcionarán como parámetros.

// let altura;
// let ancho;
// let area = 0;
// let perimetro = 0;
// function condicionesIniciales() {
//     asignaParametros('h1', 'Cálculo de área y perímetro');
//     asignaParametros('p', 'Ingresa la altura');
//     document.querySelector('input').value = '';
//     document.querySelector('#reiniciar').setAttribute('disabled', 'true');
//     altura = 0;
//     ancho = 0;
// }

// function asignaParametros(elemento, texto) {
//     let titulos = document.querySelector(elemento);
//     titulos.innerHTML = texto;
// }

// function limpiarCaja() {
//     document.querySelector('#valorUsuario').value = '';
// }

// condicionesIniciales();

// function verificarIntento() {
//     if (altura === 0) {
//         altura = parseFloat(document.getElementById('valorUsuario').value);
//         limpiarCaja();
//         asignaParametros('p', 'Ingresa el ancho');
//     } else if (ancho === 0) {
//         ancho = parseFloat(document.getElementById('valorUsuario').value);
//         limpiarCaja();
//         document.getElementById('reiniciar').removeAttribute('disabled');
//     }
// }

// function reinciarJuego() {
//     let mensaje = convertir(altura, ancho);
//     console.log(mensaje);
//     condicionesIniciales();
// }

// function convertir(altura, ancho) {
//     area = altura * ancho;
//     perimetro = (altura * 2) + (ancho * 2);
//     //asignaParametros('p', `El área es: ${area} y su perímetro es: ${perimetro}`);
//     return `El área es: ${area} y su perímetro es: ${perimetro}`;
// }

//5 - Crea una función que muestre en pantalla el área y el perímetro
// de una sala circular, utilizando su radio que se proporcionará
// como parámetro. Considera Pi = 3,14.
// let radio;
// const pi = 3.14;
// function condicionesIniciales() {
//     asignaParametros('h1', 'Cálculo de área y perímetro');
//     asignaParametros('p', 'Ingresa el radio');
//     document.querySelector('input').value = '';
//     document.querySelector('#reiniciar').setAttribute('disabled', 'true');
//     altura = 0;
//     ancho = 0;
// }

// function asignaParametros(elemento, texto) {
//     let titulos = document.querySelector(elemento);
//     titulos.innerHTML = texto;
// }

// function limpiarCaja() {
//     document.querySelector('#valorUsuario').value = '';
// }

// condicionesIniciales();

// function verificarIntento() {
//         radio = parseFloat(document.getElementById('valorUsuario').value);
//         limpiarCaja();
//         document.getElementById('reiniciar').removeAttribute('disabled');
// }

// function reinciarJuego() {
//     let mensaje = convertir(radio);
//     console.log(mensaje);
//     condicionesIniciales();
// }

// function convertir(radio) {
//     area = pi * radio * radio;
//     perimetro = 2 * pi * radio;
//     //asignaParametros('p', `El área es: ${area} y su perímetro es: ${perimetro}`);
//     return `El área es: ${area} y su perímetro es: ${perimetro}`;
// }

//6 Crea una función que muestre en pantalla la tabla de
// multiplicar de un número dado como parámetro.
// let tabla;
// function condicionesIniciales() {
//     asignaParametros('h1', 'Generación de tablas de multiplicar');
//     asignaParametros('p', 'Ingresa el número de la tabla');
//     document.querySelector('input').value = '';
//     document.querySelector('#reiniciar').setAttribute('disabled', 'true');
//     altura = 0;
//     ancho = 0;
// }

// function asignaParametros(elemento, texto) {
//     let titulos = document.querySelector(elemento);
//     titulos.innerHTML = texto;
// }

// function limpiarCaja() {
//     document.querySelector('#valorUsuario').value = '';
// }

// condicionesIniciales();

// function verificarIntento() {
//     tabla = parseFloat(document.getElementById('valorUsuario').value);
//     limpiarCaja();
//     document.getElementById('reiniciar').removeAttribute('disabled');
// }

// function reinciarJuego() {
//     let mensaje = generaTabla(tabla);
//     console.log(`Tabla de multiplicar del número ${tabla}\n${mensaje}`);
//     condicionesIniciales();
// }

// function generaTabla(tabla) {
//     let message = '';
//     for (i = 0; i < 10; i++) {
//         message += `${tabla} x ${i + 1} = ${tabla * (i + 1)}\n`;
//     }
//     return message;
// }

//desafio 8
//1 - Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];
console.log(listaGenerica);

//2 - Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
console.log(lenguajesDeProgramacion);

//3 - Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang');
console.log(lenguajesDeProgramacion);

//4 - Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function muestraLista() {
    console.log(`Esta es la lista de los lenguajes de programación`);
    for (i = 0; i < lenguajesDeProgramacion.length; i++) {
        console.log(lenguajesDeProgramacion[i]);
    }

}

function verificarIntento() {
    muestraLista();
    muestraListaInvertida();
    listaInvertida2();
    promedioNumeros();
    seleccionaNumeros();
    sumaNumeros();
    console.log(encontrarNumero((parseInt(document.getElementById('valorUsuario').value))));
    sumaListasNumeros(listaNumeros, listaNumeros2);
    NumeroCuadradoLista(listaNumeros);
}

//5 - Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
function muestraListaInvertida() {
    console.log('Esta es la lista de los lenguajes de programación invertida');
    for (i = lenguajesDeProgramacion.length - 1; i >= 0; i--) {
        console.log(lenguajesDeProgramacion[i]);
    }
    console.log(lenguajesDeProgramacion.reverse());
}

function listaInvertida2() {
    lenguajesDeProgramacion.reverse();
    let listaInvertida = [];
    for (i = lenguajesDeProgramacion.length - 1, j = 0; i >= 0; i--, j++) {
        listaInvertida[j] = lenguajesDeProgramacion[i];
    }
    console.log('Esta es la lista invertida manualmente');
    console.log(listaInvertida);
}

//6 - Crea una función que calcule el promedio de los elementos en una lista de números.
let listaNumeros = [2, 5, 3, 1, 12, 9, -7, 5, 3, 2];
let listaNumeros2 = listaNumeros.slice(); // copia el array y funciona de manera independiente
function promedioNumeros() {
    let suma = 0;
    for (i = 0; i < listaNumeros.length; i++) {
        suma += listaNumeros[i];
    }
    console.log(`Este es el promedio de la lista de numeros:\nLista de números: ${listaNumeros}\nPromedio: ${(suma / listaNumeros.length)}`);
}

//7 - Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
function seleccionaNumeros() {
    listaNumeros2.sort((a, b) => a - b);
    console.log(`EL número más grande es : ${listaNumeros2[listaNumeros2.length - 1]} y el más pequeño es : ${listaNumeros2[0]}`);
}

// propuesta del instructor
function encontrarMayorMenor(lista) {
    console.log('Propuesta del instructor', numeros);

    let mayor = lista[0];
    let menor = lista[0];

    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > mayor) {
            mayor = lista[i];
        }
        if (lista[i] < menor) {
            menor = lista[i];
        }
    }

    console.log('Mayor:', mayor);
    console.log('Menor:', menor);
}

let numeros = [15, 8, 25, 5, 12];
encontrarMayorMenor(numeros);


//8 - Crea una función que devuelva la suma de todos los elementos en una lista.
function sumaNumeros() {
    let suma = 0;
    let i = 0;
    while (i < listaNumeros.length) {
        suma += listaNumeros[i];
        i++;
    }
    console.log(`La suma de la lista de números es: ${suma}`);
}

//9 - Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
function encontrarNumero(numero) {
    console.log(`lista de números: ${listaNumeros}`);
    console.log(`El número buscado es: ${numero}`);
    return listaNumeros.findIndex((a) => a === numero); // se usa para comparaciones mas complejas
    //return listaNumeros.indexOf(numero); // devuelve el indice del parametro buscado
}

// porpuesta del isntructor
function encontrarIndiceElemento(lista, elemento) {
    console.log('Segunda Propuesta del instructor\nLista: ', lista, '\nNumero: ', elemento);
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === elemento) {
            return i; // Retorna el índice del elemento encontrado
        }
    }
    return -1; // Retorna -1 si el elemento no se encuentra en la lista
}

console.log(`Indice: ${encontrarIndiceElemento(listaNumeros, 12)}`);

//10 - Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
function sumaListasNumeros(lista1, lista2) {
    let sumaListas = [];
    let i = 0;
    while (i < lista1.length) {
        sumaListas.push(lista1[i] + lista2[i]); // se usa .push() y no lista += para agregar al array
        i++;
    }
    console.log(`Lista 1: ${lista1}\nLista 2: ${lista2}`);
    console.log(`Suma de lista 1 y lista 2: ${sumaListas}`);
}

//11 - Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
function NumeroCuadradoLista(lista) {
    let i = 0;
    let listaC = [];
    console.log(`Lista de números: ${lista}`);
    while (i < lista.length) {
        listaC.push(lista[i] * lista[i]);
        i++;
    }

    console.log(`Lista con números elevados al cuadrado: ${listaC}`);
} 

// propuesta del instructor
function cuadradoLista(lista) {
    console.log('Propuesta del instructor del cuadrado de numeros: ', lista);
    return lista.map(num => num ** 2);
}

const lista = [2, 3, 4];
const resultado = cuadradoLista(lista);
console.log(resultado);  
