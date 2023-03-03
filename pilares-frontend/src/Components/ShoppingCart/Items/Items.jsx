import { useState } from "react";
import { Container, ItemsContainer, RemoveButton } from "./itemsStyle.js";

export function Items() {
  return (
    <ItemsContainer>
      <Container>
      <p>0x Produto X</p>
      <RemoveButton>remover</RemoveButton>
      </Container>
      <p>Valor total: 0</p>
    </ItemsContainer>
  );
}
