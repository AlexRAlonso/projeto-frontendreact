import { useState } from "react";
import { PorductContainer, PorductImage, PorductDescription, AddButton } from "./productCardStyle";

export function ProductCard() {
  return (
    <PorductContainer>
      <PorductImage>
        <p>Product Card</p>
      </PorductImage>
      <PorductDescription>
        <p>Nome do Produto</p>
        <p>Valor</p>
        <AddButton className="AddButton">Adicionar ao Carrinho</AddButton>
      </PorductDescription>
    </PorductContainer>
  );
}
