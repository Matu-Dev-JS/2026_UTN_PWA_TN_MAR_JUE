import React, { useState } from 'react'

const LoginForm = () => {

    /* 
    Un formulario controlado es guardar los datos del formulario en tiempo real con un estado
    */

    const initial_state = {
        email: 'pepe@gmail.com',
        password: ''
    }

    const [formState, setFormState] = useState(initial_state)


    /* 
    CUANDO UNA FUNCION SE ASOCIA A UN EVENTO DEL NAVEGADOR ESA FUNCION RECIBIRA A EVENT, es un comportamiento del navegador (OSEA el evento lo proporciona el navegador)

    El evento es un objeto con detalles de como sucedio dicho evento
    EL EVENT.TARGET es QUE ELEMENTO DEL DOM DESENCADENO EL EVENTO
    */
    function onHandleChangeField(event) {
        console.log('ocurrio un cambio', event.target)
        console.log("NOMBRE DEL CAMPO CAMBIADO", event.target.name)
        console.log("VALOR DEL CAMPO CAMBIADO", event.target.value)
        const field_name = event.target.name
        const field_value = event.target.value

        setFormState(
            (prevFormState) => {
                return {
                    ...prevFormState,
                    [field_name]: field_value
                }
            }
        )
    }

    function onSubmitLoginForm(event) {
        event.preventDefault()
        console.log('Usuario intenta loguearse', formState)
    }

    return (
        <form 
            className="login-form" 
            aria-label="Formulario de login" 
            onSubmit={onSubmitLoginForm}
        >

            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="ejemplo@dominio.com"
                    required
                    value={formState.email}
                    onChange={onHandleChangeField}
                />
            </div>
            <div>
                <label htmlFor="password">Contraseña:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Ingresa tu contraseña"
                    required
                    value={formState.password}
                    onChange={onHandleChangeField}
                />
            </div>
            <div>
                <button type="submit">Ingresar</button>
            </div>
        </form>
    )
}

export default LoginForm