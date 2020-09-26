import styled from "styled-components"

const Link = styled.a.attrs({
  target: "_blank",
  rel: "noreferrer",
})`
  color: black;

  &:hover,
  &:active {
    color: dodgerblue;
  }

  transition: color 0.1s ease;
`

export default Link
