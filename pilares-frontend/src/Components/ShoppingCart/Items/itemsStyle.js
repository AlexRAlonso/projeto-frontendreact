import styled, { createGlobalStyle } from "styled-components";

export const ItemsContainer = styled.section`
  width: 15vw;
  height: 40vh;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 2vw;
`;

export const RemoveButton = styled.button`
  width: 5em;
  height: 2em;
  background: lightgray;
  border: solid 1px;
  border-radius: 2px;
  :active {
    transform: scale(0.6);
    transition-duration: 500ms;
  }
`;
