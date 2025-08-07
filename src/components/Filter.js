// src/Filter.js
// src/Filter.js
import React from "react";

function Filter({ search, onSearchChange, category, onCategoryChange }) {
  return (
    <div className="Filter">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        value={search} // The input's value is controlled by the state prop
        onChange={(e) => onSearchChange(e.target.value)} // Update state on change
        data-testid="search-input"
      />
      <select name="filter" value={category} onChange={(e) => onCategoryChange(e.target.value)}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
