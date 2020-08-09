import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Intro from "../sections/Intro"
import About from "../sections/About"
import Experience from "../sections/Experience"
import Projects from "../sections/Projects"
import Contact from "../sections/Contact"
import "./layout.css"

const Layout = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>
        <Intro />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        &copy; {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  )
}

export default Layout
