import Navbar from "./Navbar"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"
import About from "../pages/About"

const Layout = ({ isAuthenticated, handleLogout }) => {
    return (
        <div>
            <Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout