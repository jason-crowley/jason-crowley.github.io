import React from "react"

import ItemCard from "./ItemCard"

const ExperienceCard = ({ title, logo, children }) => (
  <ItemCard image={logo} title={title} expanded>
    {children}
  </ItemCard>
)

export default ExperienceCard
