import ENVIRONMENT from "./config/environment.config.js";
import connectMongoDB from "./config/mongodb.config.js";
import { sumar } from "./math.js";
import User from "./models/user.model.js";

/* SOLO EN LOCAL Y SI TENER PROBLEMAS DE DNS PARA CONECTARTE A MONGODB */
import dns from 'dns';
import userRepository from "./repositories/user.repository.js";

if(ENVIRONMENT.MODE === 'development'){
    dns.setServers(['8.8.8.8', '8.8.4.4']);
}

connectMongoDB()
//userRepository.create('pepe', 'pepe@gmail.com', 'pepe123')

/* userRepository.updateById(
    '69eaa482681999efac4eb3bd', {
        nombre: 'juan'
    }
) */

userRepository.getById('69eaa482681999efac4eb3bd')
.then(
    (resultado) => {
        console.log(resultado)
    }
)