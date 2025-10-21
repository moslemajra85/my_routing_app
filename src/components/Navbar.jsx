import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
const Navbar = () => {

    const location = useLocation()

    const isActive = (path) => path === location.pathname

    return (
        <nav className="flex items-center p-4 bg-gray-200 justify-between">
            <h1 className="text-3xl text-blue-500 font-bold">🛍 Shopping Room</h1>

            <div className="space-x-4 text-blue-500 font-semibold">
                <Link className={isActive("/") ? "underline underline-blue-700 underline-offset-4" : ""} to="/">Home</Link>
                <Link className={isActive("/dashboard") ? "underline underline-blue-700 underline-offset-4" : ""} to="/dashboard">Dashboard</Link>
                <Link className={isActive("/products") ? "underline underline-blue-700 underline-offset-4" : ""} to="/products">Products</Link>
                <Link className={isActive("/about") ? "underline underline-blue-700 underline-offset-4" : ""} to="/about">About</Link>
                <Link className={isActive("/contact") ? "underline underline-blue-700 underline-offset-4" : ""} to="/contact">Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar