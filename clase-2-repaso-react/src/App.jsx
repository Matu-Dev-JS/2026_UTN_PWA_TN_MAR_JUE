import React from 'react'
import LoginForm from './Components/LoginForm/LoginForm'

const App = () => {

  const nombres = ['pepe', 'Juan', 'Maria']
  const personas = [
    {
      nombre: 'pepe'
    },
    {
      nombre: "juan"
    },
    {
      nombre: "maria"
    }
  ]
  //Quiero que la lista de nombres se transforme en LI donde cada nombre sea el texto del li
  /* 
  ['pepe', 'Juan', 'Maria'] => [<li>pepe</li>, <li>Juan</li>, <li>Maria</li>]
  
  */
   //JSX Listas
  /* const titulos = [
    <h1 key={1}>Hola</h1>,
    <h2 key={2}>Que tal</h2>,
    <h3 key={3}>Todo bien</h3>
  ] */
 
  return (
    <div>
      <ol>  
        {
          personas.map(
            (persona) => <li key={persona.nombre}>{persona.nombre}</li>
          )
        }
      </ol>
      <h1>Iniciar sesion</h1>
      <LoginForm/>
    </div>
  )
}

export default App


/* 

TEMAS A TENER EN CUENTA PARA LA CURSADA:

- Componentes, sintaxis JSX, props 
- Listas: products.map(product => <ProductCard/>)
- React router
- estados
- Formularios controlados
- OPCIONAL PERO RECOMENDABLE: Custom hooks
- OPCIONAL PERO RECOMENDABLE: Context

*/