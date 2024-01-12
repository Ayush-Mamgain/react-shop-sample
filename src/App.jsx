import { Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import products from "./data";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home products={products}/>}/>
        <Route path="cart" element={<Cart />} />
      </Routes>
    </div>
  );
}