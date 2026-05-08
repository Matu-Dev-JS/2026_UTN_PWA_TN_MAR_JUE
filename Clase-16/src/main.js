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
import mailer_transport from './config/mailer.config.js'


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

const welcomeMessages = [
    "¡Tu camino en el ecommerce empieza hoy! Estamos felices de acompañarte en cada paso.",
    "¡Bienvenido a la comunidad! Descubrí miles de productos con envíos rápidos y seguros.",
    "¡Es un gusto tenerte con nosotros! Explorá las mejores ofertas y promociones hoy mismo.",
    "¡Hola! Gracias por unirte. Tu próxima gran compra está a solo un clic de distancia."
];

const randomMessage = welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];

mailer_transport.sendMail({
    from: ENVIRONMENT.GMAIL_USERNAME,
    to: ENVIRONMENT.GMAIL_USERNAME, // Enviamos el test a nosotros mismos
    subject: "¡Te damos la bienvenida a Mercado Libre! 🤝",
    html: `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f5f5f5; padding: 40px 0; margin: 0; width: 100%;">
            <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; border-collapse: collapse;">
                <!-- Header -->
                <tr>
                    <td style="background-color: #fff159; padding: 20px 40px; text-align: left;">
                        <img src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.18.9/mercadolibre/logo__large_plus.png" alt="Mercado Libre" style="height: 34px; display: block;">
                    </td>
                </tr>
                
                <!-- Hero Image/Banner -->
                <tr>
                    <td style="padding: 0;">
                        <img src="https://http2.mlstatic.com/storage/developers-site-cms-admin/624443152643-banner_ayuda_v2.png" alt="Bienvenida" style="width: 100%; display: block;">
                    </td>
                </tr>

                <!-- Content -->
                <tr>
                    <td style="padding: 40px; text-align: center;">
                        <h1 style="color: #333333; font-size: 28px; font-weight: 600; margin: 0 0 20px 0;">¡Hola! Qué bueno tenerte acá</h1>
                        <p style="color: #666666; font-size: 18px; line-height: 1.6; margin: 0 0 30px 0;">
                            ${randomMessage}
                        </p>
                        
                        <a href="https://www.mercadolibre.com.ar" style="background-color: #3483fa; color: #ffffff; padding: 16px 32px; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 16px; display: inline-block;">
                            Empezar a comprar
                        </a>
                    </td>
                </tr>

                <!-- Benefits -->
                <tr>
                    <td style="padding: 0 40px 40px 40px;">
                        <table width="100%" border="0" cellpadding="0" cellspacing="0">
                            <tr>
                                <td width="33%" style="text-align: center; padding: 10px;">
                                    <div style="color: #3483fa; font-size: 24px; margin-bottom: 5px;">🚚</div>
                                    <div style="color: #333333; font-size: 12px; font-weight: bold;">Envíos gratis</div>
                                </td>
                                <td width="33%" style="text-align: center; padding: 10px;">
                                    <div style="color: #3483fa; font-size: 24px; margin-bottom: 5px;">🛡️</div>
                                    <div style="color: #333333; font-size: 12px; font-weight: bold;">Compra Protegida</div>
                                </td>
                                <td width="33%" style="text-align: center; padding: 10px;">
                                    <div style="color: #3483fa; font-size: 24px; margin-bottom: 5px;">💳</div>
                                    <div style="color: #333333; font-size: 12px; font-weight: bold;">Cuotas sin interés</div>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>

                <!-- Footer -->
                <tr>
                    <td style="background-color: #f8f8f8; padding: 30px 40px; text-align: center; border-top: 1px solid #eeeeee;">
                        <p style="color: #999999; font-size: 12px; margin: 0 0 10px 0;">
                            ¿Necesitás ayuda? <a href="#" style="color: #3483fa; text-decoration: none;">Contactanos</a>
                        </p>
                        <p style="color: #999999; font-size: 12px; margin: 0;">
                            Mercado Libre S.R.L. Av. Caseros 3039, Piso 2, CABA.
                        </p>
                    </td>
                </tr>
            </table>
        </div>
    `,
})
.then(() => console.log("Email de bienvenida enviado con éxito! 🚀"))
.catch((err) => console.error("Error al enviar el email:", err));