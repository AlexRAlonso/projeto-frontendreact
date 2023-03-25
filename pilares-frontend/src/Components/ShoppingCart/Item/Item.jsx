import { useState } from "react";
import { Container, ItemsContainer, RemoveButton } from "./itemStyle.js";

export function Item({ product, productsCart, setProductsCart }) {
  const handleRemoveItem = () => {
    const filteredProduct = productsCart.filter((p) => p.id !== product.id);
    setProductsCart(filteredProduct);
  };

  return (
    <ItemsContainer>
      <Container>
        <p>{product.name}</p>
        <RemoveButton onClick={handleRemoveItem}>remover</RemoveButton>
      </Container>
      <p>Valor: Uc${product.value},00</p>
    </ItemsContainer>
  );
}
