// // src/App.js
// import React, { useState } from "react";
// // Import your other components like Header, Filter, and ItemForm
// import Header from "./Header";
// import Filter from "./Filter";
// import ItemForm from "./ItemForm";
// import Item from "./Item"; // Assuming you have an Item component

// // Assume you have some initial items
// const initialItems = [
//   { id: 1, name: "Apple", category: "Produce" },
//   { id: 2, name: "Milk", category: "Dairy" },
//   { id: 3, name: "Ice Cream", category: "Dessert" },
//   // ... and so on
// ];

// function App() {
//   const [items, setItems] = useState(initialItems);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [category, setCategory] = useState("All");

//   // Handle adding a new item
//   const handleAddItem = (newItem) => {
//     setItems((currentItems) => [...currentItems, newItem]);
//   };

//   // Filter the items based on the search query and category
//   const filteredItems = items.filter((item) => {
//     const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
//     const matchesCategory = category === "All" || item.category === category;
//     return matchesSearch && matchesCategory;
//   });

//   return (
//     <div className="App">
//       <Header />
//       {/* Pass state and state setters to the Filter component */}
//       <Filter
//         search={searchQuery}
//         onSearchChange={setSearchQuery}
//         category={category}
//         onCategoryChange={setCategory}
//       />
      
//       {/* Render the list of items directly in App.js */}
//       <ul className="items-list">
//         {filteredItems.map((item) => (
//           // Assuming you have an Item component that renders a single item
//           <Item key={item.id} item={item} /> 
//         ))}
//       </ul>
      
//       {/* Pass the callback function to the ItemForm component */}
//       <ItemForm onItemFormSubmit={handleAddItem} />
//     </div>
//   );
// }

// export default App;

// src/App.js
import React, { useState } from "react";
import Header from "./Header";
import Filter from "./Filter";
import ItemForm from "./ItemForm";
import Item from "./Item"; // Assuming you have this component

const initialItems = [
  { id: 1, name: "Apple", category: "Produce" },
  { id: 2, name: "Milk", category: "Dairy" },
  // { id: 3, name: "Ice Cream", category: "Dessert" },
];

function App() {
  const [items, setItems] = useState(initialItems);
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("All");

  // This is the callback function passed to ItemForm
  const handleAddItem = (newItem) => {
    // We use the spread operator to create a NEW array with the new item added.
    setItems((currentItems) => [...currentItems, newItem]);
  };

  const filteredItems = items.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = category === "All" || item.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="App">
      <Header />
      <Filter
        search={searchQuery}
        onSearchChange={setSearchQuery}
        category={category}
        onCategoryChange={setCategory}
      />
      <ul className="items-list">
        {filteredItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
      {/* Pass the handleAddItem function as the callback prop */}
      <ItemForm onItemFormSubmit={handleAddItem} />
    </div>
  );
}

export default App;