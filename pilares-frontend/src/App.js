import { useState } from "react";
import "./Styles/appStyles.css";
import { Filters } from "./Components/Filters/Filters";
import { Home } from "./Components/ProductList/Home/Home";
import { Cart } from "./Components/ShoppingCart/Cart/Cart";
import { productList } from "./Assets/productsList";

export default function App() {
  const [products, setProducts] = useState(productList);
  const [productsCart, setProductsCart] = useState([]);

  return (
    <div className="appContainer">
      <Filters />
      <Home
        products={products}
        productsCart={productsCart}
        setProductsCart={setProductsCart}
      />
      <Cart 
        productsCart={productsCart}
        setProductsCart={setProductsCart} />
    </div>
  );
}
