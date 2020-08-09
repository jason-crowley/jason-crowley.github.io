import React from "react"

import ItemCard from "./ItemCard"

const ExperienceCard = ({ title, children }) => (
  <ItemCard heading={title}>{children}</ItemCard>
)

export default ExperienceCard
