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

