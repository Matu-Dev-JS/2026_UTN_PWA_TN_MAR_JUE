
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

21:40
Crear la class ItemTienda
  -nombre
  -precio
  -id
  -descripcion
  -mostrarItem(): Mostrara por consola el mensaje: {nombre} es {descripcion} y cuesta ${precio} Pesos

*/

class ItemTienda{
    nombre: string
    precio: number
    id: number
    descripcion: string
    constructor(nombre: string, precio: number, id: number, descripcion: string){
        this.nombre = nombre
        this.precio = precio
        this.id = id
        this.descripcion = descripcion
    }
    mostrarItem() : void{
        console.log(`${this.nombre} es ${this.descripcion} y cuesta ${this.precio} pesos`)
    }
}
const jarra = new ItemTienda('jarra', 20, 1, "marron, chico")
jarra.mostrarItem()


/* 
21:53
Representar el estado de la tienda


Crear la class Tienda
  -nombre
  -cantidad_dinero_en_cuenta (Empieza en 0 pero se puede cargar)
  -items: ItemTienda[] (Empieza vacio)
  -id

  Agregar 2 o 3 items de ejemplo con un push
    tienda.push( new ItemTienda(...) )

TAREA:

  buscarItemPorId(id_item_buscado) 
    -buscar en la lista de items el item buscado y devolvera el mismo, sino devolvera null
*/

class Tienda {
    nombre: string
    cantidad_dinero_en_cuenta: number
    items: ItemTienda[]
    id: number
    counter_id: number = 0
    constructor(nombre: string, id: number) {
        this.nombre = nombre
        this.id = id
        this.cantidad_dinero_en_cuenta = 0
        this.items = []
    }
    agregarProducto(nombre: string, precio: number, descripcion: string): void {
        
        const nuevoProducto = new ItemTienda(nombre, precio, this.counter_id, descripcion);       
        this.items.push(nuevoProducto);
        this.counter_id = this.counter_id + 1 
    }
}