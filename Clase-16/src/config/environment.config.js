import dotenv from 'dotenv'
dotenv.config()

const ENVIRONMENT = {
    PORT: process.env.PORT
}
if(ENVIRONMENT.PORT === undefined){
    throw new Error('PORT is not defined')
}

export default ENVIRONMENT