import fileSystem from 'fs'
import {v4 as uuid} from 'uuid'
class ProductsRepository {
    constructor(products_path) {
        this.products_path = products_path;

    }

    create({titulo, precio, descripcion}) {
   
        const products_json = this.getProducts()
        const new_product = {
                id: uuid(),
                titulo: titulo,
                precio: precio,
                descripcion: descripcion
            }
        products_json.push(new_product)
        fileSystem.writeFileSync(this.products_path, JSON.stringify(products_json))
        return new_product
    }
    
    getProducts() {
        const products = fileSystem.readFileSync(this.products_path)
        const products_json = JSON.parse(products)
        return products_json
    }

    getProductById(product_id) {
        const product_id_number = parseInt(product_id)
        if (isNaN(product_id_number)) {
            return "El id del producto debe ser un numero"
        }
        const products = fileSystem.readFileSync(this.products_path)
        const products_json = JSON.parse(products)
        const product = products_json.find((product) => product.id === product_id_number)
        if(!product) {
                return "El producto no existe"
        }
        return product
    }

   

    deleteProduct(product_id) {
        const products = fileSystem.readFileSync(this.products_path)
        const products_json = JSON.parse(products)
        const product_id_number = parseInt(product_id)
        if (isNaN(product_id_number)) {
            return "El id del producto debe ser un numero"
        }
        const product = products_json.find((product) => product.id === product_id_number)
        if(!product) {
                return "El producto no existe"
        }
        products_json.splice(products_json.indexOf(product), 1)
        fileSystem.writeFileSync(this.products_path, JSON.stringify(products_json))
        return "Producto eliminado"
    }
}

const products_repository = new ProductsRepository('./products.json')
export default products_repository