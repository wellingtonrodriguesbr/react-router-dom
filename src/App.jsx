import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Products from "./components/Product/Products";
import Product from "./components/Product/Product";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
