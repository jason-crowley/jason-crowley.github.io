import React, { useState } from "react"
import styled from "styled-components"

import * as Card from "./Card"
import Tech from "./Tech"
import Link from "./Link"

const Title = styled.h3`
  display: inline-block;
  margin: 0;
  font-size: 1rem;
`

const Description = styled.h4`
  display: inline;
  margin: 0;
  font-weight: normal;
`

const ProjectCard = ({ title, description, link, tech, children }) => {
  const [expanded, setExpanded] = useState(false)
  return (
    <Card.Body as="li" onClick={() => setExpanded(expanded => !expanded)}>
      <Card.Header>
        <Title>{link ? <Link href={link}>{title}</Link> : title}</Title> &mdash;{" "}
        <Description>{description}</Description>
      </Card.Header>
      <Card.Collapse expanded={expanded}>
        <Card.Content>
          {children}
          <Tech tech={tech} />
        </Card.Content>
      </Card.Collapse>
    </Card.Body>
  )
}

export default ProjectCard
