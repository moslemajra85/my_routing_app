import { useParams, Link } from "react-router-dom"
import products from "../data/products"

const ProductDetails = () => {

    const { id } = useParams()

    const product = products.find((p) => p.id === +id)


    return (
        <div className="max-w-2xl mx-auto my-10 p-6 bg-white rounded-lg shadow-xl border border-gray-200">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">{product.name}</h1>
            <p className="text-3xl font-semibold text-blue-600 mb-4">${product.price.toFixed(2)}</p>
            <p className="text-gray-600 text-lg mb-6">{product.description}</p>
            <p className="text-md font-medium text-gray-700">Items in stock: <span className="font-bold text-green-600">{product.numberInStock}</span></p>
        </div>
    )
}

export default ProductDetails