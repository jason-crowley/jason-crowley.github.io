import React from "react"

import Section from "../components/Section"
import SectionHeading from "../components/SectionHeading"
import SectionList from "../components/SectionList"
import ProjectCard from "../components/ProjectCard"

import Weenix from "../components/screenshots/Weenix"
import SMARTPatientData from "../components/screenshots/SMARTPatientData"
import StormRouter from "../components/screenshots/StormRouter"
import HappyLog from "../components/screenshots/HappyLog"

import Link from "../components/Link"

const Projects = () => (
  <Section>
    <SectionHeading>Projects</SectionHeading>
    <SectionList>
      <ProjectCard
        title="Weenix"
        description="A mini operating system inspired by Unix"
        link="https://github.com/brown-cs1690/handout/wiki"
        tech={["C", "Makefile"]}
      >
        <div style={{ margin: "0 auto", maxWidth: "50%" }}>
          <Weenix />
        </div>
        <p>This semester-long project consisted of five parts:</p>
        <ul>
          <li>
            <strong>Procs:</strong> Threads, processes, and synchronization
            primitives.
          </li>
          <li>
            <strong>Drivers:</strong> Device drivers for terminals, disks, and
            the memory devices <code>/dev/zero</code> and <code>/dev/null</code>
            .
          </li>
          <li>
            <strong>Virtual File System (VFS):</strong> A common interface
            between the operating system kernel and the various file systems.
          </li>
          <li>
            <strong>System V File System (S5FS):</strong> A file system based on
            the original Unix file system.
          </li>
          <li>
            <strong>Virtual Memory (VM):</strong> The final culmination of a
            semester's work. This included implementing virtual memory maps,
            handling page faults, creating copy-on-write and anonymous memory
            objects, setting up system calls, and running userland code!
          </li>
        </ul>
        <p>
          In the end, my operating system was able to sustain multiple fork
          bombs and stress tests in parallel!
        </p>
      </ProjectCard>

      <ProjectCard
        title="SMART Patient Data Analytics"
        description="A patient analytics dashboard for practitioners"
        link="https://github.com/jason-crowley/smart-patient-data"
        tech={["React", "SMART-on-FHIR", "Material-UI", "VictoryCharts"]}
      >
        <div style={{ margin: "0 auto", maxWidth: "50%" }}>
          <SMARTPatientData />
        </div>
        <p>
          A <Link href="https://smarthealthit.org">SMART on FHIR</Link> app that
          allows doctors to view analytics for patient-generated health data
          (health/treatment history, biometric data, etc.). This app was
          designed with practitioners in mind, initiating a{" "}
          <Link href="http://hl7.org/fhir/smart-app-launch/index.html">
            SMART launch sequence
          </Link>{" "}
          so that the app can be launched securely within an EHR. It currently
          supports filtering by different events, zooming and panning to focus
          on a specific time period, and also plots a line and Gantt chart
          side-by-side.
        </p>
      </ProjectCard>
      <ProjectCard
        title="StormRouter"
        description="A weather-aware road trip planner"
        tech={["Spark", "jQuery", "Mapbox", "JUnit"]}
      >
        <p>
          A Java application designed to help travelers plan a road trip around
          inclement weather to help keep their trip safe and stress-free. I
          first prototyped the UI using HTML/CSS and later integrated the{" "}
          <Link href="https://www.mapbox.com/">Mapbox</Link> JavaScript API to
          provide the underlying map and to enable searching for locations by
          name.
        </p>
        <StormRouter />
      </ProjectCard>

      <ProjectCard
        title="HappyLog"
        description="A simple and colorful mood calendar"
        link="https://github.com/ArYalavarti/HappyLog"
        tech={["React", "Express", "MongoDB"]}
      >
        <p>
          A mental health web app to track and provide analytics for
          fluctuations in happiness of the user from day to day. The idea was to
          take a colorful mood calendar, which gives a high-level overview of
          your mood at a glance, and add analytics for users to learn more about
          their habits and productivity. I contributed to the analytics chart,
          which required filtering and displaying data queried from a{" "}
          <Link href="https://www.mongodb.com/">MongoDB</Link> database.
        </p>
        <HappyLog />
      </ProjectCard>

      <ProjectCard
        title="Portfolio Website"
        description="The blazing fast website you're on right now!"
        link="https://github.com/jason-crowley/jason-crowley.github.io/tree/development"
        tech={["React", "Gatsby", "styled-components"]}
      >
        <p>
          I built this website from the ground up using a{" "}
          <Link href="https://reactjs.org/">React</Link> framework called{" "}
          <Link href="https://www.gatsbyjs.com">Gatsby</Link>. I wanted a
          website that was blazing fast. I wanted composable components. Luckily
          Gatsby had me covered on both fronts.
        </p>
      </ProjectCard>
    </SectionList>
  </Section>
)

export default Projects
