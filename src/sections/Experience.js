import React from "react"

import Section from "../components/Section"
import SectionHeading from "../components/SectionHeading"
import SectionList from "../components/SectionList"
import ExperienceCard from "../components/ExperienceCard"

import MITRELogo from "../components/logos/MITRELogo"
import BCHLogo from "../components/logos/BCHLogo"
import KTBYTELogo from "../components/logos/KTBYTELogo"

const Experience = () => (
  <Section>
    <SectionHeading>Experience</SectionHeading>
    <SectionList>
      <ExperienceCard
        logo={<MITRELogo />}
        company="The MITRE Corporation"
        position="2020 // Healthcare Software Developer Intern"
      >
        <ul>
          <li>Was an intern</li>
        </ul>
      </ExperienceCard>
      <ExperienceCard
        logo={<BCHLogo />}
        company="Boston Children's Hospital"
        position="2019 // Computational Health Informatics Intern"
      >
        <ul>
          <li>
            Trained in FHIR health resource representation and SMART app
            authentication
          </li>
          <li>
            Fetched and processed simulated FHIR health resources in the same
            format as health data found in EHR databases using JavaScript
          </li>
          <li>
            Enabled SMART launch sequence for secure integration from within a
            hospital EHR context
          </li>
          <li>
            Leveraged Victory Charts library for interactive, responsive, and
            informative custom charts
          </li>
        </ul>
      </ExperienceCard>
      <ExperienceCard
        logo={<KTBYTELogo />}
        company="KTBYTE"
        position="2018 // Teaching Assistant"
      >
        <ul>
          <li>
            Designed lessons to build practice with RGB color values, variables,
            loops, timing & more
          </li>
          <li>
            Instructed kids aged 9–12 in said lessons while encouraging best
            practices for coding (using Scratch, Java Blocks, and Java)
          </li>
        </ul>
      </ExperienceCard>
    </SectionList>
  </Section>
)

export default Experience
