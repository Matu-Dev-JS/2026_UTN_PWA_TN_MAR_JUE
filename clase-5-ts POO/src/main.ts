class Persona{
  nombre: string
  edad: number
  vida: number
  constructor(nombre: string, edad: number){
    this.nombre = nombre
    this.edad = edad
    this.vida = 100
  }

  presentarse(): void{
    console.log(`Hola mi nombre es ${this.nombre}`)
  }

  saltar(): void {
    console.log(`${this.nombre} ha saltado 1 vez`)
  }

  decirNumeroFavorito(): number{
    return 1
  }

}

/* 
Quiero definir a una super persona, una super persona tiene algo llamado superpoder, el superpoder es un string descriptivo del poder EJ: Telekinesis, Vuelo, Rayo laser.
En el resto de cosas va ser lo mismo que una persona, solo tiene una caracteristica extra.

*/

/* 
extends es una palabra reservada que se usa para marcar que cierta clase proviene de otra
super es la invocacion de la funcion constructora de la clase que estoy heredando

*/

class SuperPersona extends Persona {
  superpoder: string
  constructor(nombre: string, edad: number, superpoder: string){
    super(nombre, edad) //Siempre va arriba
    
    this.superpoder = superpoder
    this.vida = 200
  }

  decirSuperpoder(): void{ //Este metodo solo existira en superpersona
    console.log('Tengo un secreto...., yo tengo el poder de ' + this.superpoder)
  }

  //Si vas a modificar un metodo existente tienen que tener los mismos contratos que el metodo original
 /*  saltar(): void {
    console.log(`El superheroe ${this.nombre} ha saltado`)
  } */
  decirNumeroFavorito(): number {
    return 5
  }
}

const juan = new SuperPersona('Juan', 30, 'Telekinesis')
const pepe = new Persona('Pepe', 50)
juan.presentarse()
juan.saltar()
pepe.saltar()

const publico = [juan, pepe]

//Obtener la sumatoria de los numeros favoritos de mi publica
let total = 0
for(let persona of publico){
  const numero = persona.decirNumeroFavorito()
  total = total + numero
}

console.log("El total de numeros favoritos del publico es " + total)