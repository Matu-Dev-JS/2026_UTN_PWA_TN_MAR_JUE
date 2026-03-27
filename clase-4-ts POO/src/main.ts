
class Persona  {
  nombre: string 
  edad: number
  vida: number = 100
  constructor(nombre_crudo: string, edad: number){
    this.nombre = nombre_crudo
    this.edad = edad
    this.vida = 100
  }

  presentarse () : void{
    console.log(`Hola! mi nombre es ${this.nombre}`)
  }
}

const pepe = new Persona('pepe', 20)

pepe.presentarse()

function extraerNombre (persona: Persona) : void{
    console.log(persona.nombre)
}

extraerNombre(pepe)

/* 
DESAFIO PRACTICO: E-commerce

Crear la class ItemTienda
  -nombre
  -precio
  -id
  -descripcion
  -mostrarItem(): Mostrara por consola el mensaje: {nombre} es {descripcion} y cuesta ${precio} Pesos

Crear la class Tienda
  -nombre
  -cantidad_dinero_en_cuenta
  -items: ItemTienda[],
  -id

*/