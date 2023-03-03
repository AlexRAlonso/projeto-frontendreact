import { useState } from "react";
import "./Styles/appStyles.css"
import { Filters } from "./Components/Filters/Filters";
import { Home } from "./Components/ProductList/Home/Home";
import { Cart } from "./Components/ShoppingCart/Cart/Cart";

export default function App() {

  return (
    <appContainer className="appContainer">
      <Filters />
      <Home />
      <Cart />
    </appContainer>
  );
}
