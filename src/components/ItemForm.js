// src/ItemForm.js
import React, { useState } from "react";
// Make sure to import the uuid library correctly
import { v4 as uuid } from 'uuid'; 

function ItemForm({ onItemFormSubmit }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  const handleSubmit = (event) => {
    event.preventDefault(); // This is important to prevent the page from reloading

    // Create the new item object using the state variables
    const newItem = {
      id: uuid(), // Use the uuid function to generate a unique ID
      name,
      category,
    };

    // Call the callback function from the parent component with the new item
    onItemFormSubmit(newItem);

    // Clear the form inputs by resetting the state
    setName("");
    setCategory("Produce");
  };

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Category:
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>
      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;