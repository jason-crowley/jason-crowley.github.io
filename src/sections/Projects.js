import React from "react"

import Section from "../components/Section"
import SectionHeading from "../components/SectionHeading"
import SectionList from "../components/SectionList"
import ProjectCard from "../components/ProjectCard"

const Projects = () => (
  <Section>
    <SectionHeading>Projects</SectionHeading>
    <SectionList>
      <ProjectCard
        title="SMART Patient Data Analytics"
        link="https://github.com/jason-crowley/smart-patient-data"
      >
        A SMART on FHIR app that allows doctors to view analytics for
        patient-generated health data
      </ProjectCard>
      <ProjectCard title="StormRouter">
        A Java application designed to help travelers plan a road trip around
        inclement weather to help keep their trip safe and stress free.
      </ProjectCard>
      <ProjectCard
        title="HappyLog"
        link="https://github.com/ArYalavarti/HappyLog"
      >
        A mental health web app to track and provide analytics for fluctuations
        in happiness of the user from day to day
      </ProjectCard>
      <ProjectCard
        title="Privasmart"
        link="https://github.com/hlcolani/privasmart"
      >
        A Google Chrome extension that educates users on terms of service and
        privacy policies of websites the user visits
      </ProjectCard>
    </SectionList>
  </Section>
)

export default Projects
