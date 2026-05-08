import dotenv from 'dotenv'
dotenv.config()

const ENVIRONMENT = {
    PORT: process.env.PORT,
    GMAIL_USERNAME: process.env.GMAIL_USERNAME,
    GMAIL_PASSWORD: process.env.GMAIL_PASSWORD
}
if(ENVIRONMENT.PORT === undefined){
    throw new Error('PORT is not defined')
}

export default ENVIRONMENT