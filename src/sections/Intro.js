import React from "react"

import Section from "../components/Section"
import SectionHeading from "../components/SectionHeading"
import styled from "styled-components"

const IntroSection = styled(Section)`
  display: flex;
  align-items: center;
  min-height: 100vh;
  height: 100vh;
`

const IntroHeading = styled(SectionHeading)`
  margin: 0 auto;
`

const Intro = () => (
  <IntroSection>
    <IntroHeading>Hi, I'm Jason</IntroHeading>
  </IntroSection>
)

export default Intro
