import React, { useState, useRef, useLayoutEffect } from "react"
import styled from "styled-components"

const Card = styled.li`
  padding: 0;
  border: 0.2px solid #eee;
  border-radius: 3px;
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

  &:not(:first-child) {
    margin-left: 1rem;
  }
`

const Button = styled.button`
  display: flex;
  align-items: center;
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
  max-height: ${props => (props.expanded ? props.contentHeight : 0)}px;
  overflow: hidden;
  transition: max-height 0.2s ease-in-out;
`

const CardContentBox = styled.div`
  padding: 0 1rem 1rem;
`

const ItemCard = ({ image, heading, children }) => {
  const [expanded, setExpanded] = useState(false)

  const contentRef = useRef(null)
  const [contentHeight, setContentHeight] = useState(9999)
  useLayoutEffect(() => {
    const handleResize = () => setContentHeight(contentRef.current.scrollHeight)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  })

  return (
    <Card>
      <Button onClick={() => setExpanded(expanded => !expanded)}>
        {image}
        <CardHeader>{heading}</CardHeader>
      </Button>
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
