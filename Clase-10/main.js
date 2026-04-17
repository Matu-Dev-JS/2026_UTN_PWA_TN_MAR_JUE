//'fs' Modulo nativo de NODE.JS para manejar el sistema de archivos (filesystem)

const Filesystem = require('fs')//Sirve para hacer importaciones

console.log("Chau \"mundo\" desde Node.js!!")


/* 
Escribimos en disco un archivo llamado test.txt con el contenido "Hola desde Node.js"
*/
//Filesystem.writeFileSync('test.txt', "Hola desde node.js")
//Filesystem.writeFileSync('script.js', 'console.log("hola mundo")')
//Filesystem.writeFileSync('users.json', '[{"id": 1, "name": "pepe"}]')

/* //Traigo la lista en JSON (string)
const users_JSON = Filesystem.readFileSync('users.json')

//Transformo el JSON String a Objeto de JS
const users = JSON.parse(users_JSON)

//Agrego al array de usuarios un nuevo usuario
users.push({id: 2, name: 'pepesito'})

//Vuelvo el objeto de JS a JSON String nuevamente
const new_users_JSON = JSON.stringify(users)

//Sobreescribo el archivo de lista de usuarios existente
Filesystem.writeFileSync('users.json', new_users_JSON) */

/* 
15/20 MIN
Crear un archivo llamado products.json con el valor [] (Osea empieza como array vacio)
Crear una clase llamada ProductsManager 
con 2 metodos:
- add -> Permite añadir un producto
- deleteById -> Permite eliminar un producto por id
- get -> Permite obtener la lista de productos (Lo lee directo del archivo (Solo una fuente de verdad))

Aclaraciones:
- La clase tendra manejo de IDs autogenerados (Recomendacion: Tener algun archivo donde guardes el conteo y empiece en 0, ej product-id-counter.txt)
- La lista de usuarios persiste en memoria, en el archivo products.json
- Recomiendo usar funciones o metodos internos: get(), save(), getNewId()

*/

class UsersManager {
    static USER_COUNTER_ID_FILE_NAME = 'users-id-counter.txt'
    static USER_FILE = 'users.json'

    get(){
        const products_JSON = Filesystem.readFileSync(UsersManager.USER_FILE, 'utf-8')
        return JSON.parse(products_JSON)
    }

    save (users){
        Filesystem.writeFileSync(UsersManager.USER_FILE, JSON.stringify(users))
    }

    genNewId(){
        /* 
        Paso 1: Lee el archivo donde se guarda el id (users-id-counter) y lo pasamos a numero
        Paso 2: Guardo el valor como id
        Paso 3: Sobreescribo el archivo con id + 1 
        */
        let new_id = Filesystem.readFileSync(UsersManager.USER_COUNTER_ID_FILE_NAME, 'utf-8')
        new_id = Number(new_id) + 1
        Filesystem.writeFileSync(UsersManager.USER_COUNTER_ID_FILE_NAME, new_id, 'utf-8')
        return new_id
    }
    add(name){
        const users = this.get()
        const new_id = this.genNewId()
        const new_user = {
            id: new_id,
            name: name
        }
        users.push(new_user)
        this.save(users)
    }

    deleteById(id){
        /* 
        -paso 1 llamar a la lista del archivo y pasar a objeto
        -paso 2 eliminar producto
        -paso 3 sobreescribir
        */
        const users = this.get()
        const users_updated = users.filter(user => Number(id) !== Number(id))
        this.save(users_updated)
    }


}