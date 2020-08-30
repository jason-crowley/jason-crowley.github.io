import React from "react"

import Layout from "../components/Layout"
import Footer from "../components/Footer"
import SEO from "../components/SEO"
import Intro from "../sections/Intro"
import About from "../sections/About"
import Experience from "../sections/Experience"
import Projects from "../sections/Projects"
import Contact from "../sections/Contact"

const IndexPage = () => (
  <Layout header={<Intro />} footer={<Footer />}>
    <SEO title="Home" />
    <About />
    <Experience />
    <Projects />
    <Contact />
  </Layout>
)

export default IndexPage
