import React, { useState, useRef, useLayoutEffect } from "react"
import styled from "styled-components"

const Card = styled.li`
  padding: 0;
  border: 0.2px solid #eee;
  border-radius: 3px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.07);
  list-style-type: none;
  transition: box-shadow 0.1s linear;
  cursor: pointer;

  &:hover {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }

  &:last-child {
    margin-bottom: 1.45rem;
  }
`

const CardTitle = styled.h2`
  margin: 0;

  &:not(:first-child) {
    margin-left: 1rem;
  }
`

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 1rem;
`

const CardContent = styled.div`
  margin: 0;
  padding: 0;
  max-height: ${props => (props.expanded ? props.contentHeight : 0)}px;
  overflow: hidden;
  transition: max-height 0.2s ease-in-out;
`

const CardContentBox = styled.div`
  padding: 0 1rem 1rem;
`

const ItemCard = ({
  image,
  title,
  children,
  expanded: defaultExpanded = false,
}) => {
  const [expanded, setExpanded] = useState(defaultExpanded)

  const contentRef = useRef(null)
  const [contentHeight, setContentHeight] = useState(9999)
  useLayoutEffect(() => {
    const handleResize = () => setContentHeight(contentRef.current.scrollHeight)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  })

  return (
    <Card onClick={() => setExpanded(expanded => !expanded)}>
      <CardHeader>
        {image}
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent
        expanded={expanded}
        contentHeight={contentHeight}
        ref={contentRef}
      >
        <CardContentBox>{children}</CardContentBox>
      </CardContent>
    </Card>
  )
}

export default ItemCard
