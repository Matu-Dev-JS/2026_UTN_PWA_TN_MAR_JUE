import ENVIRONMENT from "./config/environment.config.js";
import connectMongoDB from "./config/mongodb.config.js";
import express from "express";

/* SOLO EN LOCAL Y SI TENER PROBLEMAS DE DNS PARA CONECTARTE A MONGODB */
import dns from 'dns';
import authRouter from "./routes/auth.router.js";
import authMiddleware from "./middlewares/auth.middleware.js";


if(ENVIRONMENT.MODE === 'development'){
    dns.setServers(['8.8.8.8', '8.8.4.4']);
}

connectMongoDB()

/* 
Crear una API de express
Route:
    /api/auth => Trabaja todo lo relacionado a autentificacion
        POST /register
            body: {name, email, password}
            Validar que el usuario tenga nombre mayor a 2 caracteres
            Validar email
            Validar password con almenos 6 caracteres 
            Crear un usuario en la DB
        



Mas Adelante...
        POST /login
        
RECOMENDACION:
    El controller puede ser asincrono!!
    authRouter.post(
        '/register', 
        async (request, response) => {
            await userRepository.create('pepe')
        }
    )
*/


const app = express();
const PORT = ENVIRONMENT.PORT;

// Parse JSON
app.use(express.json());

app.use('/api/auth', authRouter);


/* 
Un endpoint donde el cliente debera enviarnos por header de autorizacion el access token, en caso de estar presente y ser correcto
Le daremos los datos de la cuenta
*/
app.get(
    '/api/profile', 
   /*  (request, response, next) => {
        const random_num = Math.random() 
        console.log('Numero aleatorion generado:', random_num)
        if(random_num > 0.5){
            return response.json({
                message:"Mala suerte campeon ☠"
            })
        }
        else{
            next()
        }
    }, */
    authMiddleware,
    (request, response) => {
        console.log(
            'Nombre del cliente:',
            request.user.nombre
        )
        return response.json({
            ok: true,
            status: 200,
            message: "Estas autenticado"
        })
    }
)

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});