class Persona {
  nombre: string
  edad: number
  vida: number
  constructor(nombre: string, edad: number) {
    this.nombre = nombre
    this.edad = edad
    this.vida = 100
  }

  presentarse(): void {
    console.log(`Hola mi nombre es ${this.nombre}`)
  }

  saltar(): void {
    console.log(`${this.nombre} ha saltado 1 vez`)
  }

  decirNumeroFavorito(): number {
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
/* 
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

  decirNumeroFavorito(): number {
    return 5
  }
} */

/* const juan = new SuperPersona('Juan', 30, 'Telekinesis')
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

class Personas {
  personas: Persona[]
  constructor(){
    this.personas = []
  }
} */

class Item {
  id: number
  titulo: string
  descripcion: string
  constructor(id: number, titulo: string, descripcion: string) {
    this.id = id
    this.titulo = titulo
    this.descripcion = descripcion
  }
  describir(): void {
    console.log(`Producto: ${this.titulo}   Descripcion: ${this.descripcion}`)
  }
}

class ItemManager {
  global: Item[] = [];
  id_counter: number = 0;

  listar(): void {
    console.log(this.global);
  }
  agregar(titulo: string, descripcion: string): void {
    let id = this.id_counter++;
    const item_creado = new Item(id, titulo, descripcion)
    this.global.push(item_creado);
  }
  obtenerPorId(id: number): Item | null {
    const itemEncontrado = this.global.find((item) => item.id === id);
    return itemEncontrado || null
  }
}


const item_manager = new ItemManager()
item_manager.agregar('Celular samsung s7 edge', 'Una masa')
item_manager.agregar('Celular samsung s3', 'Otra masa')

item_manager.listar()
console.log(item_manager.obtenerPorId(1))


class Transaccion {
    id: number;
    cantidad: number;
    precio_unitario: number;
    fecha: Date;
    id_item: number;
    constructor(id: number, cantidad: number, precio_unitario: number, id_item: number) {
        this.id = id;
        this.cantidad = cantidad;
        this.precio_unitario = precio_unitario;
        this.id_item = id_item
        this.fecha = new Date();
    }
}

class Venta extends Transaccion {
    id_comprador: number;
    constructor(id: number, cantidad: number, precio_unitario: number, id_item: number, id_comprador: number) {
        super(id, cantidad, precio_unitario, id_item);
        this.id_item = id_item;
        this.id_comprador = id_comprador;
    }
}
class Compra extends Transaccion {
    id_vendedor: number;
    constructor(id: number, cantidad: number, precio_unitario: number, id_vendedor: number, id_item: number) {
        super(id, cantidad, precio_unitario, id_item);
        this.id_vendedor = id_vendedor;
    }
}