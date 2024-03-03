let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento,texto) {
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}
           
function verificarIntento() {
        let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
            // console.log(numeroDeUsuario);
            // console.log(typeof(numeroDeUsuario));
            //console.log(numeroSecreto);
            // console.log(typeof(numeroSecreto));
            if(numeroDeUsuario === numeroSecreto){
                asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1 ) ? 'vez' : 'veces'} !`);
                document.getElementById('reiniciar').removeAttribute('disabled');
            } else {
                // El usuario no acerto
                if (numeroDeUsuario > numeroSecreto) {
                    asignarTextoElemento('p','El numero secreto es menor !');    
                } else {
                    asignarTextoElemento('p','El numero es mayor!!');
                }
                intentos++;
                limpiarCaja();  
            }
            return;
            
}
function limpiarCaja (){
    let valorCaja = document.querySelector('#valorUsuario').value = '';
    
}   

function generarNumeroSecreto() {

    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
        console.log(numeroGenerado);
        console.log(listaNumerosSorteados);

    // si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'ya se sortearon los numeros posibles');
    } else{
        // si el numero generado esta en una lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
        } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }
    }    
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto!');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego () {
    //limpiar caja
    limpiarCaja();
    // indicar mensaje de intervalo de numero
    //generar el numero aleatorio
     //inicializar de nuevo el numero de intentos
    condicionesIniciales(); 
    // dshabilitar denuevo el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}
            
condicionesIniciales();


// function holaMundo() {
//     console.log("¡Hola, mundo!");
// }

// holaMundo();
// function holaNombre(nombre) {
//     console.log("¡Hola, " + nombre + "!");
// }

// holaNombre("Juan");
// function dobleNumero(numero) {
//     return numero * 2;
// }

// let resultadoDoble = dobleNumero(5);
// console.log(resultadoDoble);
// function promedioTresNumeros(num1, num2, num3) {
//     return (num1 + num2 + num3) / 3;
// }

// let resultadoPromedio = promedioTresNumeros(10, 20, 30);
// console.log(resultadoPromedio);
// function mayorDeDosNumeros(num1, num2) {
//     return (num1 > num2) ? num1 : num2;
// }

// let resultadoMayor = mayorDeDosNumeros(15, 8);
// console.log(resultadoMayor);
// function cuadradoNumero(numero) {
//     return numero * numero;
// }

// let resultadoCuadrado = cuadradoNumero(4);
// console.log(resultadoCuadrado);

/*

// Función para calcular el índice de masa corporal (IMC):
function calcularIMC(altura, peso) {
    var imc = peso / (altura ** 2);
    return imc;
}
//Función para calcular el factorial de un número:
function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        return numero * calcularFactorial(numero - 1);
    }
}
//Función para convertir dólares a reales:
function convertirDolaresAReales(dolares) {
    var cotizacionDolar = 4.80;
    var reales = dolares * cotizacionDolar;
    return reales;
}
//Función para calcular el área y el perímetro de una sala rectangular:
function calcularAreaPerimetroRectangular(altura, anchura) {
    var area = altura * anchura;
    var perimetro = 2 * (altura + anchura);
    console.log("Área:", area);
    console.log("Perímetro:", perimetro);
}
//Función para calcular el área y el perímetro de una sala circular:
function calcularAreaPerimetroCircular(radio) {
    var pi = 3.14;
    var area = pi * (radio ** 2);
    var perimetro = 2 * pi * radio;
    console.log("Área:", area);
    console.log("Perímetro:", perimetro);
}
//Función para mostrar la tabla de multiplicar de un número:
function tablaDeMultiplicar(numero) {
    for (var i = 1; i <= 10; i++) {
        var resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }
}*/

/*
//Puedes llamar a estas funciones con los valores que desees para probarlas. Por ejemplo:

var altura = 1.75;
var peso = 70;
var imcResultado = calcularIMC(altura, peso);
console.log("IMC:", imcResultado);

var numeroFactorial = 5;
var factorialResultado = calcularFactorial(numeroFactorial);
console.log(`Factorial de ${numeroFactorial}: ${factorialResultado}`);

var dolares = 100;
var realesResultantes = convertirDolaresAReales(dolares);
console.log(`${dolares} dólares equivalen a ${realesResultantes} reales`);

var alturaRectangular = 5;
var anchuraRectangular = 10;
calcularAreaPerimetroRectangular(alturaRectangular, anchuraRectangular);

var radioCircular = 3;
calcularAreaPerimetroCircular(radioCircular);

var numeroTabla = 7;
tablaDeMultiplicar(numeroTabla); */
