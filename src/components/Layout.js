import React from "react"
import styled from "styled-components"

import "./layout.css"

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
    <Main>{children}</Main>
    <Footer>
      &copy; {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </Footer>
  </>
)

export default Layout
