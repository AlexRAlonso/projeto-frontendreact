import styled from "styled-components";

export const ProductContainer = styled.section`
  width: 360px;
  
`;

export const ProductImage = styled.section`
  border: solid black 2px;
  height: 500px;
  width: 360px;
  display: flex;
  align-items: center;
  justify-content: center;

  & > img{
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
`;

export const ProductDescription = styled.section`
  border: solid darkgray 1px;
  width: 100%;
  height: 15vh;
  padding: 1vw;
  display: flex;
  flex-direction: column;

  .AddButton {
    align-self: center;
  }
`;

export const AddButton = styled.button`
  margin-top: 0.5vw;
  width: 12em;
  height: 2em;
  background: lightgray;
  border: solid 1px;
  border-radius: 2px;
  :active {
    transform: scale(0.6);
    transition-duration: 500ms;
  }
`;
