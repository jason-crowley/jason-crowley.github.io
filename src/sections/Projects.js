import React from "react"

import Section from "../components/Section"
import SectionHeading from "../components/SectionHeading"
import SectionList from "../components/SectionList"
import ProjectCard from "../components/ProjectCard"

import SMARTPatientData from "../components/screenshots/SMARTPatientData"
import StormRouter from "../components/screenshots/StormRouter"
import Weenix from "../components/screenshots/Weenix"

const Projects = () => (
  <Section>
    <SectionHeading>Projects</SectionHeading>
    <SectionList>
      <ProjectCard
        title="Weenix"
        link="https://github.com/brown-cs1690/handout/wiki"
      >
        <p>OS Project</p>
        <Weenix />
      </ProjectCard>
      <ProjectCard
        title="SMART Patient Data Analytics"
        link="https://github.com/jason-crowley/smart-patient-data"
      >
        <p>
          A SMART on FHIR app that allows doctors to view analytics for
          patient-generated health data
        </p>
        <SMARTPatientData />
      </ProjectCard>
      <ProjectCard title="StormRouter">
        <p>
          A Java application designed to help travelers plan a road trip around
          inclement weather to help keep their trip safe and stress free.
        </p>
        <StormRouter />
      </ProjectCard>
      <ProjectCard
        title="HappyLog"
        link="https://github.com/ArYalavarti/HappyLog"
      >
        <p>
          A mental health web app to track and provide analytics for
          fluctuations in happiness of the user from day to day
        </p>
      </ProjectCard>
      <ProjectCard title="Portfolio Website">
        <p>
          This website was built from the ground up using a React framework
          called Gatsby.
        </p>
      </ProjectCard>
    </SectionList>
  </Section>
)

export default Projects
