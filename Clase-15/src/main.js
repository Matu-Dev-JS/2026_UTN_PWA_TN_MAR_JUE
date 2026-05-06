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


//Creamos una app de express (Servidor web)
const app = express()

/* 
Si el servidor recibe un JSON por medio del body de la consulta, express ejecutara una transformacion del JSON a objeto de JS
*/
app.use(express.json())


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
        const { test_id } = request.params
        console.log("Se busca el test con id " + test_id)
        return response.send('Aca tenes la info')
    }
)

app.get(
    '/api/users',
    (request, response) => {
        try{

            p
            const { limit, search_value } = request.query
            console.log(`Se buscan hasta ${limit} usuarios con el termino de busqueda ${search_value}`)
            return response.send({ mensaje: 'Resultado', result: [] })
        }
        catch(error){
            console.log('ERROR', error)
            return response.send(
                {
                    ok:false,
                    message: 'Error interno del servidor'
                }
            )
        }
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

/* 
ERRORES CONTROLADOS
    Aquellos que esperamos que sucedan y podemos prevenir
    En contexto de servidor van a ser los errores que sean ServerError
ERRORES NO CONTROLADOS
    Aquellos que no esperamos que sucedan
*/

class ServerError extends Error {
    constructor(message, status) {
        super(message)
        this.status = status
    }
}


app.post('/api/products', (request, response) => {
    try {
        const body = request.body
        if (!body.titulo || !body.precio) {
            throw new ServerError(
                "El titulo y el precio son obligatorios",
                400
            )
             
        }
        if (body.titulo === '') {
            throw new ServerError(
                "El titulo es obligatorio",
                400
            )
        }
        if (isNaN(body.precio)) {
            throw new ServerError(
                "El precio debe ser un numero",
                400
            )
        }
        if (!body.descripcion || body.descripcion === '') {
            body.descripcion = ''
        }
        const new_product = products_repository.create(
            {
                titulo: body.titulo,
                precio: body.precio,
                descripcion: body.descripcion
            }
        )
        return response.send(
            {
                ok: true,
                message: "Producto creado",
                data: {
                    new_product: new_product
                }
            }
        )
    }
    catch (error) {
        if (error instanceof ServerError) {
            return response.status(error.status).send(
                {
                    ok: false,
                    message: error.message
                }
            )
        }
        console.log(error)
        return response.status(500).send(
            {
                ok: false,
                message: "Error interno del servidor"
            }
        )
    }

})
