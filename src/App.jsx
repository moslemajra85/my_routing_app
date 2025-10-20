import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"
import Navbar from "./components/Navbar"
import Products from "./pages/Products"
import ProductDetails from "./pages/ProductDetails"

const App = () => {
  return (

    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />


        <Route path="*" element={<NotFound />} />

      </Routes>
    </>
  )
}

export default App