import products from "../data/products"
import { Link } from "react-router-dom"
const Products = () => {
    return (
        <div className="space-y-4 p-6">

            {

                products.map((p) => (<div className="p-4 shadow-lg rounded border border-blue-300ß" key={p.id}>
                    <h2 className="text-2xl text-blue-400 font-bold">{p.name}</h2>
                    <p className="text-xl font-semibold">${p.price.toFixed(2)}</p>

                    <Link className="px-8 py-2 mt-4 rounded-lg bg-blue-600 text-white" to={`/products/${p.id}`}>See Details</Link>
                </div>))
            }
        </div>
    )
}

export default Products