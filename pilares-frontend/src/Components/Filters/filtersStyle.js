import styled from "styled-components";

export const FiltersContainer = styled.section`
  border: 1px solid black;
  width: 20vw;
  height: 80vh;
  margin: 1vw;
  padding: 1vw;
  display: flex;
  flex-direction: column;

  .filter-section {
    display: flex;
    flex-direction: column;
  }

  .filters-input {
    margin-bottom: 2vh;
    width: 10vw;
  }
`;
