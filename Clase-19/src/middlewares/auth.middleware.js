import ServerError from "../helpers/serverError.helper.js";

function authMiddleware(request, response, next) {
    try {
        const authorization_header = request.headers.authorization
        console.log('SE ACTIVO EL MIDDLEWARE')
        console.log('Auth Header:', authorization_header)

        //Activamos el siguiente controlador
        return next()
    }
    catch (error) {
        if (error instanceof ServerError) {
            return response.status(error.status).json(
                {
                    message: error.message,
                    ok: false,
                    status: error.status
                }
            )
        }
        else {
            console.error('Error critico:', error);
            return response.status(500).json({
                message: "Error interno del servidor",
                ok: false,
                status: 500
            });
        }

    }
}

export default authMiddleware