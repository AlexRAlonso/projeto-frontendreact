import { useState } from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import { HomeContainer, HomeHeader, Order, ProductDisplay } from "./homeStyle";

export function Home(props) {
  return (
    <HomeContainer>
      <HomeHeader>
        <p>Quantidade de produtos:</p>
        <Order>
          <p>Ordenação:</p>
          <select>
            <option value="0">Crescente</option>
            <option value="1">Decrescente</option>
          </select>
        </Order>
      </HomeHeader>
      <ProductDisplay>
        {props.products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            productsCart={props.productsCart}
            setProductsCart={props.setProductsCart}
          />
        ))}
      </ProductDisplay>
    </HomeContainer>
  );
}
