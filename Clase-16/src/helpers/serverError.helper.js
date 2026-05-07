/* 
ERRORES CONTROLADOS
    Aquellos que esperamos que sucedan y podemos prevenir
    En contexto de servidor van a ser los errores que sean ServerError
ERRORES NO CONTROLADOS
    Aquellos que no esperamos que sucedan
*/

class ServerError extends Error {
    constructor(message, status) {
        super(message)
        this.status = status
    }
}

export default ServerError