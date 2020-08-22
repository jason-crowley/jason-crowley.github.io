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

const Header = styled.header`
  margin: 0;
  padding: 0;
`

const Main = styled.main`
  margin: 0;
  padding: 0;
`

const Footer = styled.footer`
  margin: 0;
  padding: 0;
`

const Layout = ({ header, children, footer }) => (
  <>
    <GlobalStyles />
    <Header>{header}</Header>
    <Main>{children}</Main>
    <Footer>{footer}</Footer>
  </>
)

export default Layout
