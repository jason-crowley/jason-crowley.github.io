import React, { useState, useRef, useLayoutEffect } from "react"
import styled from "styled-components"

export const Body = styled.div`
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

export const Header = styled.div`
  margin: 0;
  padding: 1rem;
`

export const Content = styled.div`
  padding: 0 1rem 1rem;
`

const Collapsing = styled.div`
  margin: 0;
  padding: 0;
  max-height: ${props => (props.expanded ? props.contentHeight : 0)}px;
  overflow: hidden;
  transition: max-height 0.4s ease-in-out;
`

export const Collapse = ({ expanded, children }) => {
  const contentRef = useRef(null)
  const [contentHeight, setContentHeight] = useState(9999)
  useLayoutEffect(() => {
    const handleResize = () => setContentHeight(contentRef.current.scrollHeight)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  })

  return (
    <Collapsing
      expanded={expanded}
      contentHeight={contentHeight}
      ref={contentRef}
    >
      {children}
    </Collapsing>
  )
}
