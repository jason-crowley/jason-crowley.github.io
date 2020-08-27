import React from "react"
import styled, { keyframes } from "styled-components"

const hello = keyframes`
  5% {
    transform: rotate(20deg);
  }
  8% {
    transform: rotate(-15deg);
  }
  11% {
    transform: rotate(10deg);
  }
  14% {
    transform: rotate(-10deg);
  }
  17% {
    transform: rotate(5deg);
  }
  20% {
    transform: rotate(-5deg);
  }
  23% {
    transform: rotate(0deg);
  }
`

const Container = styled.span.attrs({
  role: "img",
  "aria-label": "waving hand",
})`
  display: inline-block;
  animation: ${hello} 5s ease-in-out 0.5s infinite;
`

const Hello = () => <Container>👋</Container>

export default Hello
