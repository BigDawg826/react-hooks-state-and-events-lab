import React, {useState} from "react";

function Item({ name, category }) {

const [inCart, setinCart] = useState(false);

function handleAddToCartClick() {
  setinCart((inCart) => !inCart);
}

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={inCart ? "remove" : "add"} onClick={handleAddToCartClick}>{inCart ? "Remove From" : "Add to"} Cart</button>
    </li>
  );
}

export default Item;
