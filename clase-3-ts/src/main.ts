//console.log('hola mundo')

let nombre: string = 'pepe'
let isOpen: boolean = false
let nota: number = 2
let result: null = null
let result_2: undefined = undefined

const PI: number = 3.14


const nombres: string[] = ['pepe', 'juan', 'maria']

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

const persona_1: Persona = {
  nombre: 'pepe',
  edad: 40
}

const persona_2: Persona = {
  nombre: 'juan',
  edad: 30
}

const personas: Persona[] = [persona_1, persona_1]

/* function calcularIva (precio: number) : number{
  let iva = precio * 0.21
  return iva
} */

const calcularIva = (precio: number): number => {
  let iva: number = precio * 0.21
  return iva
}


//Dado un array de números, escribir una función que calcule la suma de todos los números del array.
function calcularSumatoriaArray(numeros: number[]): number {
  let total: number = 0;
  for (let number of numeros) {
    total = total + number;
  }
  return total;
}
console.log(calcularSumatoriaArray([2,2,2]))

interface DatosRaros {
  'Respuesta': string,
  'Status HTTP': number
}


/* 
21:40
Dado un array de nombres transformar este array en un array de personas donde cada persona tenga la propiedad nombre
*/

/* 
21:45 
Dado un array de números, escribir una función que devuelva un array con todos los números mayores a 10.
*/

/* 
21:55
Dado un array de objetos donde cada objeto tendra la propiedad 'D.N.I', 'Nombre Completo', 'Edad' transformarlo en un array de personas con las propiedades dni, nombre_completo, edad

EJ: [
  {
    'D.N.I': 11222333,
    'Edad': 30,
    'Nombre Completo': 'Pepe suarez'
  }
]
*/