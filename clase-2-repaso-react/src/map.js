const nombres = ['pepe', 'Juan', 'Maria']


const iniciales = nombres.map(
    function (nombre){
        return 1
    }
)

/* 
Callbacks: UNA FUNCION QUE SE PASA COMO PARAMETRO DE OTRA FUNCION
Cuando haga click se mostrara por consola un 'hola'
function accion (){console.log('hola')}
button.addEventListener('click', accion ) //accion Es la callback que se ejecutara al 'click'
*/

/* 
MAP: Lo usamos cuando quiero crear un array a partir de otro array
Quiero obtener una lista de iniciales donde cada inicial sera la incial del nombre de la lista original
['pepe', 'Juan', 'Maria'] => ['p', 'j', 'm']
['pepe', 'Juan', 'Maria'] => [4, 4, 5]


Map es un metodo avanzado: Osea usa Callbacks
Map internamente 
    - Crea un array vacio  
    - RECORRE EL ARRAY y por cada elemento EJECUTA LA CALLBACK
        - Por cada callback ejecutada se capturara el retorno y se sumara al array vacio
MAP es un metodo NO mutable
*/