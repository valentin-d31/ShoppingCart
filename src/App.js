import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import FloatingCart from "./Pages/Home/Home";
import Home from "./Pages/Home/Home";
import Product from "./Pages/Products/Product";
import ProductShowcase from "./Pages/ProductShowcase/ProductShowcase";
import Contact from "./Pages/Contact/Contact";
import ShoppingCart from "./Pages/ShoppingCart/ShoppingCart";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <FloatingCart/>
    <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/produits" element={<Product/>}/>
        <Route path="/produits/:id" element={<ProductShowcase/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/shoppingcart" element={<ShoppingCart/>}/>
    </Routes>
    </div>
  );
}

export default App;
