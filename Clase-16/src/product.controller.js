import ServerError from "./helpers/serverError.helper.js"
import products_repository from "./repositories/product.repository.js"

class ProductController {
    post(request, response){
        try {
            const body = request.body
            if (!body.titulo || !body.precio) {
                throw new ServerError(
                    "El titulo y el precio son obligatorios",
                    400
                )
            }
            if (body.titulo === '') {
                throw new ServerError(
                    "El titulo es obligatorio",
                    400
                )
            }
            if (isNaN(body.precio)) {
                throw new ServerError(
                    "El precio debe ser un numero",
                    400
                )
            }
            if (!body.descripcion || body.descripcion === '') {
                body.descripcion = ''
            }
            const new_product = products_repository.create(
                {
                    titulo: body.titulo,
                    precio: body.precio,
                    descripcion: body.descripcion
                }
            )
            return response.status(201).send(
                {
                    ok: true,
                    message: "Producto creado",
                    data: {
                        new_product: new_product
                    },
                    status: 201
                }
            )
        }
        catch (error) {
            if (error instanceof ServerError) {
                return response.status(error.status).send(
                    {
                        ok: false,
                        message: error.message,
                        status: error.status //Tenerlo en la response NO es obligatorio
                    }
                )
            }
            console.log(error)
            return response.status(500).send(
                {
                    ok: false,
                    message: "Error interno del servidor",
                    status: 500
                }
            )
        }
    }
}


const productController = new ProductController()

export default productController