import React from "react"
import styled, { createGlobalStyle } from "styled-components"

import "./layout.css"

const GlobalStyles = createGlobalStyle`
  h1, h2, h3, h4, h5, h6 {
    font-family: Ubuntu, sans-serif;
  }

  body {
    font-family: Lato, sans-serif;
  }
`

const Main = styled.main`
  margin: 0 auto;
  padding: 0 1rem;
  max-width: 750px;
`

const Footer = styled.footer`
  margin: 0 auto;
  padding: 0 1.0875rem 1.45rem;
  max-width: 960px;
`

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Main>{children}</Main>
    <Footer>
      &copy; {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </Footer>
  </>
)

export default Layout
