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

app.listen(
    ENVIRONMENT.PORT,
    () => {
        console.log(`Nuestra app de express se ejecuta correctamente en el puerto ${ENVIRONMENT.PORT}`)
    }
)