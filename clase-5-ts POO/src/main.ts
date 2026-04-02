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


class ItemTienda extends Item {
    precio: number;
    stock: number;
    constructor(id: number, titulo: string, descripcion: string, precio: number, stock: number) {
        super(id, titulo, descripcion);
        this.precio = precio;
        this.stock = stock;
    }
    describir(): void {
        console.log(`[Tienda #${this.id}] ${this.titulo} cuesta $${this.precio}. Stock: ${this.stock}`);
    }
}

class Tienda {
    nombre: string;
    dinero: number;
    inventario: ItemTienda[] = [];
    lista_ventas: Venta[] = [];
    lista_compras: Compra[] = [];
    generador_id_transacciones: number = 1;

    constructor(nombre: string, dinero_inicial: number) {
        this.nombre = nombre;
        this.dinero = dinero_inicial;
    }

    obtenerItemPorId (id_item: number): ItemTienda | undefined {
      const itemEnInventario = this.inventario.find(item => item.id === id_item);
      return itemEnInventario
    } 

    comprar(
      id_item: number, 
      precio_unitario: number, 
      cantidad: number, 
      margen_esperado: number,
      id_vendedor: number = 1
    ): void {
        const costoTotal = precio_unitario * cantidad;

        //Checkeo si tengo el dinero
        if (this.dinero < costoTotal) {
            console.log("Error: Dinero insuficiente");
            return;
        }

        //Resto el dinero
        this.dinero -= costoTotal;
        //Genero el registro de la compra
        

        this.registrarCompra(cantidad, precio_unitario, id_item, id_vendedor)

        
        const nuevoPrecioVenta = precio_unitario * margen_esperado;
        const itemEnInventario = this.obtenerItemPorId(id_item)
        if (itemEnInventario) {
            itemEnInventario.precio = nuevoPrecioVenta;
            itemEnInventario.stock += cantidad;
        } else {
            const itemBase = item_manager.obtenerPorId(id_item);
            if (itemBase) {
                const nuevoItemTienda = new ItemTienda(itemBase.id, itemBase.titulo, itemBase.descripcion, nuevoPrecioVenta, cantidad);
                this.inventario.push(nuevoItemTienda);
            }
        }
    }

    registrarCompra(cantidad: number, precio_unitario: number, id_item: number, id_vendedor: number){
      const nuevaCompra = new Compra(this.generador_id_transacciones, cantidad, precio_unitario, id_item, id_vendedor);
      this.lista_compras.push(nuevaCompra);
      return this.generador_id_transacciones++
    }

    

    vender(id_item: number, cantidad: number, id_comprador: number): void {

        const itemEnInventario = this.obtenerItemPorId(id_item);

        if (!itemEnInventario) {
            console.log("Error: El producto no existe en nuestro inventario.");
            return;
        }

        if (itemEnInventario.stock < cantidad) {
            console.log(`Error: Stock insuficiente. Solo quedan ${itemEnInventario.stock} unidades.`);
            return;
        }

        const ingresoTotal = itemEnInventario.precio * cantidad;
        this.dinero += ingresoTotal;
        itemEnInventario.stock -= cantidad;

        //registrarVenta / registrarTransaccion
        const nuevaVenta = new Venta(this.generador_id_transacciones, cantidad, itemEnInventario.precio, id_item, id_comprador);
        this.lista_ventas.push(nuevaVenta);
        this.generador_id_transacciones++;

        console.log(`Venta realizada. Ingreso: $${ingresoTotal}. Stock restante: ${itemEnInventario.stock}`);
    }
}