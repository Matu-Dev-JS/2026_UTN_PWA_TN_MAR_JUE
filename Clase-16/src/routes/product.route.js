import express from 'express'
import productController from '../product.controller.js'

//Creamos la ruta de express
const product_router = express.Router() 


product_router.post('/', productController.post)


export default product_router