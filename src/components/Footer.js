import React from "react"
import styled from "styled-components"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

import Link from "./Link"

const Socials = styled.address`
  margin: 0;
  padding: 4rem 0;
  background-color: #1a202c;
  font-style: normal;
`

const SocialList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 0 1rem;
  max-width: 960px;
  list-style-type: none;
`

const Social = styled.li`
  margin: 0.1rem 0;
`

const SocialLink = styled(Link)`
  margin: 0 1rem;
  color: white;
  text-decoration: none;
`

const LinkText = styled.span`
  margin-left: 0.5rem;
`

const Footer = () => (
  <Socials>
    <SocialList>
      <Social>
        <SocialLink href="https://github.com/jason-crowley">
          <FontAwesomeIcon icon={faGithub} />
          <LinkText>jason-crowley</LinkText>
        </SocialLink>
      </Social>
      <Social>
        <SocialLink href="https://www.linkedin.com/in/jason-crowley">
          <FontAwesomeIcon icon={faLinkedin} />
          <LinkText>jason-crowley</LinkText>
        </SocialLink>
      </Social>
      <Social>
        <SocialLink href="mailto:jason_crowley@brown.edu">
          <FontAwesomeIcon icon={faEnvelope} />
          <LinkText>jason_crowley@brown.edu</LinkText>
        </SocialLink>
      </Social>
    </SocialList>
  </Socials>
)

export default Footer
