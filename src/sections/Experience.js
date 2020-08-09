import React from "react"

import Section from "../components/Section"
import SectionHeading from "../components/SectionHeading"
import SectionList from "../components/SectionList"
import ExperienceCard from "../components/ExperienceCard"

const Experience = () => (
  <Section>
    <SectionHeading>Experience</SectionHeading>
    <SectionList>
      <ExperienceCard title="The MITRE Corporation">
        <ul>
          <li>Was an intern</li>
        </ul>
      </ExperienceCard>
      <ExperienceCard title="Boston Children's Hospital">
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
      <ExperienceCard title="KTBYTE">
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
