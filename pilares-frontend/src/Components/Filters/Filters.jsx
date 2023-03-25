import { useState } from "react";
import { FiltersContainer } from "./filtersStyle";

export function Filters() {
  return (
    <FiltersContainer>
      <h2>Filters</h2>
      <form>
        <div className="filter-section">
          <label>Valor mínimo:</label>
          <input className="filters-input" type="text"></input>
        </div>
        <div className="filter-section">
          <label>Valor máximo:</label>
          <input className="filters-input" type="text"></input>
        </div>
        <div className="filter-section">
          <label>Busca por nome:</label>
          <input className="filters-input" type="text"></input>
        </div>
      </form>
    </FiltersContainer>
  );
}
