// Reto: Funciones
// Necesitamos crear una calculadora, y para ellos debemos hacer las siguientes funciones:
// ● Suma.
function suma (a , b) {
    return a + b 
}
console.log(suma(1222,5000))

// ● Resta.
function resta (a , b) {
    return a - b 
}
console.log(resta(23,21))

// ● Multiplicación.
function multiplicación (a , b) {
    return a * b 
}
console.log(multiplicación(4,5))

// ●División (ten en cuenta que si se va a dividir por cero, imprimimos que no se puede dividir por  cero y el resultado será cero).

number=[]
function division (a , b) {
    
    if (a === number && b != number) {
        console.log('Escribe un valor numerico.')
        return 0
    }
    if (a === 0) {
        console.log('No se puede dividir por cero.')
        return 0
    }
    
    else {
     return a/b   
    }
}
console.log(division(4,2))

//Potenciacion 
function potenciacion (a , b) {
    return a ** b 
}
console.log(potenciacion(2,5))


//Reto: Arrow functions 
// Vamos a crear una arrow function para pasarla como callback a un .map() que se le aplicará a una lista de strings, está 
// función tendrá la capacidad de encriptar nuestro lenguaje, y lo que hará es:
// 1. Primero convertir todo el mensaje a mayúscula.

const frasecompleta = ['Los números pueden utilizarse como letras, y la frase resultante puede ser leída sin mucho esfuerzo.','Este es un mensaje super encriptado y solo los mejores podrán leerlo.']

const mayuscula = frasecompleta.map(frasecompleta=> frasecompleta.toUpperCase())

//onsole.log(mayuscula)

// 2. Convertir los siguientes carácteres:
// ● A -> 4
// ● S -> 5
// ● E -> 3
// ● O -> 0
// ● G -> 6
// ● I -> 1
// ● T -> 7

const mensajecompleto =  [ 
mensajeuno = mayuscula.map(string=>string.replace(/A/g,'4')),
 mensajedos = mayuscula.map(string=>string.replace(/S/g,'5')),
 mensajetres = mayuscula.map(string=>string.replace(/E/g,'3')),
 mensajecuatro = mayuscula.map(string=>string.replace(/O/g,'0')),
 mensajecinco = mayuscula.map(string=>string.replace(/G/g,'6')),
 mensajeseis = mayuscula.map(string=>string.replace(/I/gi,'1')),
 mensajesiete = mayuscula.map(string=>string.replace(/T/g,'7')),
]
console.log(mensajecompleto)