import { useState } from "react";
import {
  ProductContainer,
  ProductImage,
  ProductDescription,
  AddButton,
} from "./productCardStyle";

export function ProductCard({ product, productsCart, setProductsCart }) {
  const handleAddCart = () => {
    setProductsCart([...productsCart, product]);
  };

  return (
    <ProductContainer>
      <ProductImage>
        <img src={product.imagePath} alt="" />
      </ProductImage>
      <ProductDescription>
        <p>{product.name}</p>
        <p>Uc${product.value},00</p>
        <AddButton className="AddButton" onClick={handleAddCart}>
          Adicionar ao Carrinho
        </AddButton>
      </ProductDescription>
    </ProductContainer>
  );
}
