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

Aclaraciones:
- La clase tendra manejo de IDs autogenerados (Recomendacion: Tener algun archivo donde guardes el conteo y empiece en 0, ej product-id-counter.txt)
- La lista de usuarios persiste en memoria, en el archivo products.json
*/