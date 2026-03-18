/* 
TEMAS NECESARIOS:

- Tipos de datos
- Comparadores, Operadores logicos, Operadores aritmeticos
- Condicionales
- Bucles (For, For of)
- Funciones
- Arrays y objetos 8
- Metodos de arrays 3
    - Push
    - Splice 1
    - indexOf
    - includes
    Avanzados: 5
        - map 1
        - filter
        - find
        - findIndex
- Desestructuracion de objetos y arrays 12
- Spread operator (...) 3
- Import export
- Async / await ( Lo vemos en cursada, pero estaria MUUUY bueno que lo sepan ) 9



Git y github
    - Crear un repo
    - subir el repo a github
    - clonar el repo
    - hacer commits

*/


/* 
- Desestructuracion de objetos y arrays 12
- Async / await ( Lo vemos en cursada, pero estaria MUUUY bueno que lo sepan ) 9
- Arrays y objetos 8
- Avanzados: 5
        - map 1
        - filter
        - find
        - findIndex 
*/


/* 
Desestructuracion

Es parte de lo que se conoce como Sugar Sintax (abreviaciones)
*/
/* const persona = {
    nombre: 'pepe',
    edad: 50
} */

//Forma larga... ❌
/* 
const nombre = persona.nombre
const edad = persona.edad
 */
//Forma corta ✅
/* const {nombre, edad} = persona

console.log(
    `
    Hola, mi nombre es ${nombre} y tengo ${edad}
    `
) */
/* 
const respuesta_renaper = {
    "Nombre Completo": 'Pepe Suarez',
    "Sexo": "M",
    "Edad (Anios)": 40
}
 */
//const nombre = respuesta_renaper['Nombre Completo']
//const edad = respuesta_renaper['Edad (Anios)']
//const sexo = respuesta_renaper['Sexo']
/* const {
    ["Nombre Completo"]: nombre,
    Sexo: sexo,
    ["Edad (Anios)"]: edad
} = respuesta_renaper



console.log(nombre) */

/* 
Como se que el primer parametro de presentarse sera un objeto con nombre y edad, lo desestructurare en el mismo parametro
*/
/* function presentarse ( {nombre: name, edad: age} ){
    console.log(
        `
        Hola, mi nombre es ${name} y tengo ${age}
        `
    )
}

presentarse({nombre: 'pepe', edad: 50}) */

//Desestructuracion de arrays

//Esta lista tiene al mejor promedio al principio
/* const nombres = ['pepe', 'maria', 'juan'] */

//const primer_promedio = nombres[0]

/* const [ primer_promedio, segundo_promedio, tercer_promedio ] = nombres

console.log(segundo_promedio) */

/* function useState (initial_value){
    let state = initial_value
    function setter (value){
        state = value
        render()
    }
    return [state, setter]
}

const [counter, setCounter] = useState(0) */

/* 
- Async / await 

Es una tecnica que nos permite desbloquear el hilo de ejecucion cuando una operacion se procesa fuera de nuestro hilo (codigo o acciones bloqueantes)
Por ejemplo: 
    - tengo que llamar a un servidor (3s)
    - mientras dejo libre mi hilo de ejecucion para que siga procesando otras acciones

De esta manera logramos aplicaciones mas eficientes (Procesar mas inputs en menos tiempo ( o dar mas rapido los outputs ))
*/

async function obtenerDatosServidor (){
    console.log('hola')
    const response_http = await fetch(
        'https://jsonplaceholder.typicode.com/users',
        {
            method: "GET"
        }
    )
    console.log(response_http)
    const data = await response_http.json()
    console.log('Data', data)


}

function renderDatosUsuario (){
    console.log('Usuario mengano ingreso')
}

function renderCopyright(){
    console.log("Todos los derechos reservados")
}



obtenerDatosServidor()
renderDatosUsuario()
renderCopyright()

/* 
1 - obtenerDatosUsuario
2 - console.log('hola')
3 - fetch() (emite peticion y deja el resto del bloque como microtarea) microTask1()
4 - renderDatosUsuario()
5 - console.log('Usuario mengano ingreso')
6 - Checkeo si debo ejecutar microtask1 
    IF
        SI 7 - response_http.json()
        NO 7 - renderCopyright()
8 - (si aun no resolvio) microtask1
*/