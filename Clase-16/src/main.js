console.log('hello world')


/* 
ENDPOINTS

GET /api/groups => La lista de grupos a los que perteneces

GET /api/groups/:group_id => La información de un grupo

POST /api/groups => Crea un nuevo grupo

DELETE /api/groups/:group_id => Elimina un grupo


GET /api/contacts => La lista de contactos

GET /api/contacts/:contact_id => La información de un contacto

POST /api/contacts => Crea un nuevo contacto


Para este tipo de aplicaciones necesitamos saber hacer un SERVIDOR WEB y el framework mas usado para crear servidores web con NODE JS es EXPRESS (o nestjs o fastify)
*/

import express from 'express'
import ENVIRONMENT from './config/environment.config.js'

import products_repository from './repositories/product.repository.js'
import ServerError from './helpers/serverError.helper.js'
import product_router from './routes/product.route.js'


//Creamos una app de express (Servidor web)
const app = express()

/* 
Si el servidor recibe un JSON por medio del body de la consulta, express ejecutara una transformacion del JSON a objeto de JS
*/
app.use(express.json({
    limit: '50mb'
}))




app.listen(
    ENVIRONMENT.PORT,
    () => {
        console.log(`Nuestra app de express se ejecuta correctamente en el puerto ${ENVIRONMENT.PORT}`)
    }
)

/* 
PRACTICA EXPRESS
En la aplicacion existira un archivo products.json que guardara la lista de productos, inicialmente vacia
Cada producto tendra titulo, precio, id, descripcion

POST /api/products => 
    Crea un nuevo producto 
    Validar que nos envien un titulo, descripcion (opcional, puede ser '') y precio (numerico)

GET /api/products => La lista de productos

GET /api/products/:product_id => 
    La informacion de un producto
    Si no existe el producto devuelve un mensaje del estilo "El producto no existe"

DELETE /api/products/:product_id => Elimina un producto
    Validar que exista
        Si existe: Eliminar el producto
        Sino: Devolver un mensaje del estilo "El producto no existe"

Recomendacion personal:
    Primero armar toda la logica de manejo de productos. 
    Luego armar cada endpoint e ir probando 1 a 1 a medida se van creando con postman
*/



//Cualquier consulta que tenga el prefijo /api/products se va a delegar a product_router
app.use('/api/products', product_router)