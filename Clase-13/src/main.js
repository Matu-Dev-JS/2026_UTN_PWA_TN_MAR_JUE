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
//userRepository.create('pepe', 'pepe@gmail.com', 'pepe123')

/* userRepository.updateById(
    '69eaa482681999efac4eb3bd', {
        nombre: 'juan'
    }
) */

/* userRepository.getById('69eaa482681999efac4eb3bd')
.then(
    (resultado) => {
        console.log(resultado)
    }
) */

/* workspaceMemberRepository.create(
    '69eaa482681999efac4eb3bd',
    '69f14d6b8dc2e2fa8a6fa1be',
    MEMBER_WORKSPACE_ROLES.ADMIN
) */

//workspaceMemberRepository.getById('69f14b53ffa2c5930ae6713c').then(resultado => console.log(resultado))
//workspaceMemberRepository.updateById('69f14b53ffa2c5930ae6713c', {rol: MEMBER_WORKSPACE_ROLES.OWNER})
//workspaceMemberRepository.deleteById('69f14b53ffa2c5930ae6713c')
/*     workspaceRepository.create(
        'Test 2',
        'Test'
    ) */


workspaceMemberRepository.getByWorkspaceId('69f14d6b8dc2e2fa8a6fa1be').then(result => {

    console.log(result)
})
.catch(error => {
    console.log("error", error)
})