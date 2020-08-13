import React, { useState, useRef } from "react"
import styled from "styled-components"

const Card = styled.li`
  padding: 0;
  border: 0.2px solid #eee;
  border-radius: 5px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.07);
  list-style-type: none;
  transition: box-shadow 0.1s linear;

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
  padding: 1rem;
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  text-align: start;

  &:focus {
    outline: none;
  }
`

const CardContent = styled.div`
  margin: 0;
  padding: 0;
  max-height: ${props => (props.expanded ? props.contentHeight() : 0)}px;
  overflow: hidden;
  transition: max-height 0.2s ease-in-out;
`

const CardContentBox = styled.div`
  padding: 0 1rem 1rem;
`

const ItemCard = ({ heading, children }) => {
  const [expanded, setExpanded] = useState(false)
  const contentRef = useRef(null)

  return (
    <Card>
      <CardHeader>
        <Button onClick={() => setExpanded(expanded => !expanded)}>
          {heading}
        </Button>
      </CardHeader>
      <CardContent
        expanded={expanded}
        contentHeight={() => contentRef.current.scrollHeight}
        ref={contentRef}
      >
        <CardContentBox>{children}</CardContentBox>
      </CardContent>
    </Card>
  )
}

export default ItemCard
