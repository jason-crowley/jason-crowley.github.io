import React from "react"

import ItemCard from "./ItemCard"

const ExperienceCard = ({ title, logo, children }) => (
  <ItemCard image={logo} heading={title}>
    {children}
  </ItemCard>
)

export default ExperienceCard
