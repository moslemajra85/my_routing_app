import { Routes, Route } from "react-router-dom"
import { useState } from "react"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"
import Products from "./pages/Products"
import ProductDetails from "./pages/ProductDetails"
import Layout from "./components/Layout"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import ProtectedRoute from "./components/ProtectedRoute"


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)


  const handleLogin = () => {

    // in real world you need to connect to your backend server 
    setIsAuthenticated(true)
  }

  const handleLogout = () => {

    // in real world you need to connect to your backend server 
    setIsAuthenticated(false)
  }
  return (


    <>
      <Routes>

        <Route path="/"  element={<Layout isAuthenticated={isAuthenticated} handleLogout={handleLogout}/>} >
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/dashboard" element={<ProtectedRoute isAuthenticated={isAuthenticated}>
            <Dashboard />
          </ProtectedRoute>}

          />
        </Route>

        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App