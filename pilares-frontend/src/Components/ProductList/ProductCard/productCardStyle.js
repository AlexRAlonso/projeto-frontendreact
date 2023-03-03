import styled from "styled-components";

export const PorductContainer = styled.section`
  min-width: 18vw;
  
`;

export const PorductImage = styled.section`
  border: solid black 2px;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PorductDescription = styled.section`
  border: solid darkgray 1px;
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
