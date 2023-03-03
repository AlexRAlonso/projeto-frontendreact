import { useState } from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import { HomeContainer, HomeHeader, Order, ProductDisplay } from "./homeStyle";

export function Home() {
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
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ProductDisplay>
    </HomeContainer>
  );
}
