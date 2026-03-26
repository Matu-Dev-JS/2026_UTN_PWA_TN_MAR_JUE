/* 
Los programadores tienen paradigmas para programar (Es basicamente el "estilo" de programacion)
Actualmente nuestro paradigma es programacion funcional:
    - Flexibilidad
    - Reutilizacion
En este paradigma tratamos de resolver y separar la logica de nuestro proyecto en funciones reutilizables y abstractas
EJ:
    - validarString()
    - validarPrecio()
    - calcularIva()
Dejar de pensar en como funciona y pensar en que hace 

JS tiene soporte para un segundo "paradigma", Programacion orientada a objetos. No todos los lenguajes soportan este paradigma y algunos solo soportan POO

POO:
    - Robustez
    - Estructura
*/

/* let persona_1 = {
    nombre: 'pepe',
    edad: 40
}

let persona_2 = {
    nombre: 'juan',
    edad: 50
} */

/* function construirPersona (nombre, edad){
    return {
        nombre: nombre,
        edad: edad
    }
}

let persona_1 = construirPersona('pepe', 40)
let persona_2 = construirPersona('juan', 50)
let persona_3 = {
    nombre: 'maria',
    edad: 50
} */

/* 
PROBLEMA: Yo no tengo una forma programatica de saber si persona_1 y persona_2 son personas
Por que quiero saberlo? Validar que mis personas realmente sean personas
*/

//Funcion constructora ES5
//Nos permite definir tipos de objetos
//this es una autoreferencia que cambia de valor segun el contexto de uso, en el caso de usar this dentro de function instanciada (new) estamos haciendo referencia al objeto instanciado por la funcion constructora
/* function Persona (nombre, edad){
    this.nombre = nombre
    this.edad = edad
    this.vida = 100
} */

//Cada vez que hago un new de la funcion constructora se esta instanciando la misma, eso generara un objeto this dentro de esa funcion
/* const pepe = new Persona('pepe', 40)
const maria = new Persona('maria', 63)
const juan = {
    nombre: 'juan',
    edad: 32,
    vida: 100
} */

//En la memoria de JS se guarda la definicion de Persona
/* 
if(pepe instanceof Persona){
    console.log('Si, pepe lo es')
}


if(juan instanceof Persona){
    console.log('Si, juan lo es')
}
else{
    console.log('No, juan no lo es')
} */

//Class ES6
class Persona {
    constructor(nombre, edad){
        this.nombre = nombre
        this.edad = edad
        this.vida = 100
    }
}


const pepe = new Persona('pepe', 40)
pepe.edad -= 1
const maria = new Persona('maria', 63)