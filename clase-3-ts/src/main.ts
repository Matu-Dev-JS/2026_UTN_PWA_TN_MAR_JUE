//console.log('hola mundo')

let nombre : string = 'pepe'
let isOpen : boolean = false
let nota : number = 2
let result : null = null
let result_2 : undefined = undefined

const PI : number = 3.14


const nombres : string[] = ['pepe', 'juan', 'maria']

//No se usa tanto...
//const persona : [string, number] = ['pepe', 52] 

/* const persona_2 : {
  nombre: string,
  edad: number
} = {
  nombre: 'pepe',
  edad: 40
}
 */

interface Persona {
  nombre: string,
  edad: number
}

const persona_1 : Persona = {
  nombre: 'pepe',
  edad: 40
}

const persona_2 : Persona = {
  nombre: 'juan',
  edad: 30
}

const personas : Persona[] = [persona_1, persona_1]

/* function calcularIva (precio: number) : number{
  let iva = precio * 0.21
  return iva
} */

const calcularIva = (precio: number) : number => {
  let iva : number = precio * 0.21
  return iva
}


//Dado un array de números, escribir una función que calcule la suma de todos los números del array.
