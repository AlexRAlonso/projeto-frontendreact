import { useState } from "react";
import { Items } from "../Items/Items";
import { CartContainer } from "./cartStyle";

export function Cart() {
  return (
    <CartContainer>
      <h2>Cart</h2>
      <Items />
    </CartContainer>
  );
}
