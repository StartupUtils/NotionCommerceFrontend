import { useState, useEffect } from 'react';
import findFocus from './utils/findFocus';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import CartPage from './pages/CartPage';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import Products from './pages/Products';
import Imageupload from './pages/ImageUpload';
import ShowImages from './pages/ShowImages';
import Success from './pages/Success';

function App() {
  const [cart, setCart] = useState(null);
  const [refresh, setRefresh] = useState(null);
  let focus = localStorage.getItem("focus")
  useEffect((findFocusFunc = findFocus) => {
    findFocusFunc(setCart)
  }, [refresh])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/cart" element={focus ? <CartPage setCart={setCart} cart={cart} setRefresh={setRefresh} refresh={refresh} /> : <Home focus={focus} />} />
        <Route path="/cart/*" element={<CartPage setCart={setCart} cart={cart} setRefresh={setRefresh} refresh={refresh} />} />
        <Route path="/product/*" element={<ProductPage cart={cart} setRefresh={setRefresh} />} />
        <Route path="/products" element={<Products cart={cart} />} />
        <Route path="/manage_image/load/*" element={<Imageupload />} />
        <Route path="/manage_image/show/*" element={<ShowImages />} />
        <Route path="/success" element={<Success cart={cart}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
