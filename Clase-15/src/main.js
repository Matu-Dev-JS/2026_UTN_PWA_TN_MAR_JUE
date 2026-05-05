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


//Creamos una app de express (Servidor web)
const app = express()

/* 
Si el servidor recibe un JSON por medio del body de la consulta, express ejecutara una transformacion del JSON a objeto de JS
*/
app.use(express.json())

import fs from 'fs'
app.post(
    '/api/test', 
    (request, response) => {
        console.log('Body de la consulta:', request.body)
   
        return response.send("<h1>Respuesta de prueba</h1>")
    }
)

app.get(
    '/api/test', 
    (request, response) => {
        console.log("Llego una consulta de test")
        return response.send("<h1>Respuesta de prueba</h1>")
    }
)

app.get(
    '/api/test/:test_id',
    (request, response) => {
        const {test_id} = request.params
        console.log("Se busca el test con id " + test_id)
        return response.send('Aca tenes la info')
    }
)

app.get(
    '/api/users',
    (request, response) => {
        const { limit, search_value } = request.query
        console.log(`Se buscan hasta ${limit} usuarios con el termino de busqueda ${search_value}`)
        return response.send('Resultado')
    }
)


/* 
Metodos HTTP:
    - Get => Obtener informacion del servidor
    - Post => Crear un recurso en el servidor
    - Put => Actualizar un recurso existente en el servidor
    - Delete => Eliminar un recurso del servidor

Los metodos NO GARANTIZAN que realmente el servidor los este usando de forma correcta, es decir un get podria crear recursos en el servidor, un delete actualizar y un post obtener.
Pero es una BUENA PRACTICA seguir las recomendaciones
*/


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


GET /api/products => La lista de productos
GET /api/products/:product_id => 
    La informacion de un producto
    Si no existe el producto devuelve un mensaje del estilo "El producto no existe"
POST /api/products => 
    Crea un nuevo producto 
    Validar que nos envien un titulo, descripcion (opcional, puede ser '') y precio (numerico)
DELETE /api/products/:product_id => Elimina un producto
    Validar que exista
        Si existe: Eliminar el producto
        Sino: Devolver un mensaje del estilo "El producto no existe"

Recomendacion personal:
    Primero armar toda la logica de manejo de productos. 
    Luego armar cada endpoint e ir probando 1 a 1 a medida se van creando con postman
*/