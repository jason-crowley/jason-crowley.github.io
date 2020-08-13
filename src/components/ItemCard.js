import React, { useState } from "react"
import styled from "styled-components"

const Card = styled.li`
  padding: 1em;
  border: 0.2px solid #eee;
  border-radius: 5px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.07);
  list-style-type: none;

  &:hover {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }

  &:last-child {
    margin-bottom: 1.45rem;
  }
`

const CardHeader = styled.h2`
  margin: 0;
`

const Button = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  text-align: start;
`

const CardContent = styled.div`
  display: ${props => (props.expanded ? "block" : "none")};
  margin-top: 1.45rem;
`

const ItemCard = ({ heading, children }) => {
  const [expanded, setExpanded] = useState(false)
  return (
    <Card>
      <CardHeader>
        <Button onClick={() => setExpanded(expanded => !expanded)}>
          {heading}
        </Button>
      </CardHeader>
      <CardContent expanded={expanded}>{children}</CardContent>
    </Card>
  )
}

export default ItemCard
