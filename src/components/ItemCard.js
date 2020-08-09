import React from "react"

const ItemCard = ({ heading, children }) => (
  <li>
    <div>
      <h2>
        <button>{heading}</button>
      </h2>
      {children}
    </div>
  </li>
)

export default ItemCard
