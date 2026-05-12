import ENVIRONMENT from "./config/environment.config.js";
import connectMongoDB from "./config/mongodb.config.js";
import { sumar } from "./math.js";
import User from "./models/user.model.js";

/* SOLO EN LOCAL Y SI TENER PROBLEMAS DE DNS PARA CONECTARTE A MONGODB */
import dns from 'dns';
import userRepository from "./repositories/user.repository.js";
import workspaceMemberRepository from "./repositories/workspaceMember.repository.js";
import workspaceRepository from "./repositories/workspace.repository.js";
import { MEMBER_WORKSPACE_ROLES } from "./constants/memberRoles.constant.js";

if(ENVIRONMENT.MODE === 'development'){
    dns.setServers(['8.8.8.8', '8.8.4.4']);
}

connectMongoDB()

/* 
Crear una API de express
Route:
    /api/auth
        POST /register
            body: {name, email, password}
            Crear un usuario en la DB
            Validar que el usuario tenga nombre mayor a 2 caracteres
            Validar email
            Validar password con almenos 6 caracteres 



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


.catch(error => {
    console.log("error", error)
})