import { useState } from "react";
import { Item } from "../Item/Item";
import { CartContainer } from "./cartStyle";

export function Cart({ productsCart, setProductsCart }) {
  let count = 0;

  const totalValue = () => {
    if (productsCart.length === 0) return 0;
    const values = productsCart.map((product) => product.value);
    return values.reduce((curr, acc) => curr + acc);
  };

  return (
    <CartContainer>
      <h2>Cart</h2>
      {productsCart.map((product) => (
        <Item 
        key={count++} 
        product={product}
        productsCart={productsCart}
        setProductsCart={setProductsCart} />
      ))}
      <div>
        <p>Valor total: Uc${totalValue()},00</p>
      </div>
    </CartContainer>
  );
}
