import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/blocks/Navbar"
import Footer from "./components/blocks/Footer"

// pages
import Home from "./pages/Home"
import Product from "./pages/Products"
import About from "./pages/About"

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>

        <Navbar />

        <div className="flex-grow">
          <Routes>

            <Route path="/"
              element={<Home />} />

            <Route path="/product/:id"
              element={<Product />} />

            <Route path="/about"
              element={<About />} />

          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </div>

  )
}