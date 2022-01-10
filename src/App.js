import { useState, useEffect } from 'react';
import ProductPage from "./pages/ProductPage";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import CheckoutPage from './pages/CheckoutPage';

function App() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const localCart = localStorage.getItem("myCart");
    if (localCart) {
      setCartItems(JSON.parse(localCart));
    } else {
      localStorage.setItem("myCart", JSON.stringify([]))
    }
  }, []);

  const addItem = (item) => {
    const localCart = localStorage.getItem("myCart");
    if (localCart) {
      let data = JSON.parse(localCart);
      data.push(item);
      setCartItems(data);
      localStorage.setItem('myCart', JSON.stringify(data));
    } else {
      setCartItems([item]);
      localStorage.setItem('myCart', JSON.stringify([item]))
    }

  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/product/*" element={<ProductPage addItem={addItem} cart={cartItems} />} />
        <Route path="/cart" element={<CheckoutPage cartItems={cartItems} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
