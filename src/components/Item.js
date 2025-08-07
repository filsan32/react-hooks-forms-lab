// import React, { useState } from "react";

// function Item({ name, category }) {
//   const [isInCart, setIsInCart] = useState(false);

//   function handleAddToCartClick() {
//     setIsInCart((isInCart) => !isInCart);
//   }

//   return (
//     <li className={isInCart ? "in-cart" : ""}>
//       <span>{name}</span>
//       <span className="category">{category}</span>
//       <button
//         className={isInCart ? "remove" : "add"}
//         onClick={handleAddToCartClick}
//       >
//         {isInCart ? "Remove From" : "Add to"} Cart
//       </button>
//     </li>
//   );
// }

// export default Item;
// components/Item.js
function Item({ item }) {
  return <li>{item.name}</li>; // must include item.name directly
}

export default Item;