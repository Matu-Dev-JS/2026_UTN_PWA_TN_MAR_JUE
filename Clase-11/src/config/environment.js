import dotenv from 'dotenv'

//Lee el archivo .env e inyecta las variables de entorno dentro de process.env
dotenv.config()

//Guardar en mismo lugar las variables de entorno
const ENVIRONMENT = {
    MONGO_DB_CONNECTION_STRING: process.env.MONGO_DB_CONNECTION_STRING
}

export default ENVIRONMENT