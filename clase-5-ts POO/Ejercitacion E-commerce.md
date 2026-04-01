## Manejar el estado de una tienda en memoria con TS y POO

## Item: 
- id
- titulo
- descripcion
- describir(){ } Debera describir el producto por consola

## ItemManager
- global: Item[]
- obtenerPorId(item_id){} retorna el item
- agregar(title, descripcion) Añade el item al sistema

Para cuando tengamos tiendas

## ItemTienda
Manejar un item dentro de una Tienda
- id
- titulo
- descripcion
- precio
- stock

## Transaccion: Define la transaccion de un item de un usuario a otro
- id
- id_item
- cantidad
- precio_unitario
- fecha (Fecha actual new Date, tipo Date)

## Venta
- id_comprador (numero para identificar quien compro)

- id
- id_item
- cantidad
- precio_unitario
- fecha (Fecha actual new Date, tipo Date)

## Compra
- id_vendedor

- id
- id_item
- cantidad
- precio_unitario
- fecha (Fecha actual new Date, tipo Date)

## Tienda
- nombre
- inventario: ItemTienda[] Lista de items interna de la tienda
- lista_ventas: Venta[]
- lista_compras: Compra[]
- dinero
- comprar(id_item, precio_unitario, cantidad, margen_esperado){} 
    Accion de comprar
    La tienda debe evaluar si tiene el dinero para realizar la compra, en caso de no tenerlo decir por consola "Error: Dinero insuficiente"
    Si se cuenta con el dinero, se procedera a dejar registro en lista_compras de la compra y se decrementara el dinero
    Se debera agregar el item al inventario (Si ya existe incrementar el stock). 
    Si se agrega el item al inventario el precio del item sera definido por precio_unitario x margen_esperado.
    En caso de que el item ya existe, se calculara y definira el nuevo precio por precio_unitario x margen_esperado

    Aclaraciones:
    - el id_item se usara para acceder al item mediante lista global de items ItemManager
    - Dejar la parte de registro de compras para el final, centrarse en la logica de inventario

EJEMPLO De funcionamiento: 

Dinero inicial: 7000

tienda_1.comprar(1, 1400, 2, 20) //Agregar al inventario el item con el precio 1680 (20% de margen) y stock de 2. Dinero: 4200

tienda_1.comprar(1, 1500, 2, 20) //Agregar al inventario el item con el precio 1800 (20% de margen) y stock de 4. Dinero: 1200

tienda_1.comprar(1, 1500, 2, 20) //ERROR No tengo sufiente dinero
