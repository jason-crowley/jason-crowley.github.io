import React from "react"

import ItemCard from "./ItemCard"

const ProjectCard = ({ title, link, children }) => (
  <ItemCard heading={title}>
    {link && (
      <a href={link} target="_blank" rel="noreferrer">
        {link}
      </a>
    )}
    {children}
  </ItemCard>
)

export default ProjectCard
