import React from "react"

import Section from "../components/Section"
import SectionHeading from "../components/SectionHeading"
import SectionList from "../components/SectionList"
import ExperienceCard from "../components/ExperienceCard"

import MITRELogo from "../components/logos/MITRELogo"
import BCHLogo from "../components/logos/BCHLogo"
import KTBYTELogo from "../components/logos/KTBYTELogo"

import Link from "../components/Link"

const Experience = () => (
  <Section>
    <SectionHeading>Experience</SectionHeading>
    <SectionList>
      <ExperienceCard
        logo={<MITRELogo />}
        company="The MITRE Corporation"
        position="2020 // Healthcare Software Developer Intern"
        tech={[
          "React",
          "Bootstrap",
          "Jest",
          "HAPI FHIR",
          "Spark",
          "JUnit",
          "Docker",
        ]}
      >
        <ul>
          <li>
            Practiced scrum on Team{" "}
            <Link href="https://github.com/onc-healthit/inferno">Inferno</Link>{" "}
            of the Open Health Services department
          </li>
          <li>
            Ported Inferno's{" "}
            <Link href="https://inferno.healthit.gov/validator/">
              FHIR validator app
            </Link>{" "}
            to <Link href="https://reactjs.org/">React</Link> and architected
            form state management to enable dynamic form validation
          </li>
          <li>
            Optimized response times on first request by a factor of 3 by
            refactoring validator service to be eagerly initialized
          </li>
          <li>
            Introduced support for validating against 200+ different FHIR
            Implementation Guides fetched from packages.fhir.org
          </li>
          <li>
            Spearheaded development of the{" "}
            <Link href="https://www.hl7.org/fhir/fhirpath.html">FHIRPath</Link>{" "}
            evaluator microservice
          </li>
        </ul>
      </ExperienceCard>
      <ExperienceCard
        logo={<BCHLogo />}
        company="Boston Children's Hospital"
        position="2019 // Computational Health Informatics Intern"
        tech={["React", "SMART-on-FHIR", "Material-UI", "VictoryCharts"]}
      >
        <ul>
          <li>
            Trained in FHIR health resource representation and{" "}
            <Link href="https://smarthealthit.org/">SMART app</Link>{" "}
            authentication
          </li>
          <li>
            Fetched and processed simulated FHIR health resources in the same
            format as health data found in EHR databases using JavaScript
          </li>
          <li>
            Enabled{" "}
            <Link href="http://hl7.org/fhir/smart-app-launch/index.html">
              SMART launch sequence
            </Link>{" "}
            for secure integration from within a hospital EHR context
          </li>
          <li>
            Leveraged{" "}
            <Link href="https://formidable.com/open-source/victory/">
              Victory Charts
            </Link>{" "}
            library for interactive, responsive, and informative custom charts
          </li>
        </ul>
      </ExperienceCard>
      <ExperienceCard
        logo={<KTBYTELogo />}
        company="KTBYTE"
        position="2018 // Teaching Assistant"
        tech={["Java", "JavaBlocks", "Scratch", "Processing"]}
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
