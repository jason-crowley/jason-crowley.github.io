import React from "react"
import styled from "styled-components"

import * as Card from "./Card"

const Logo = styled.div`
  margin-right: 1rem;
  min-width: 80px;
`

const Company = styled.h3`
  margin: 0;
`

const Position = styled.h4`
  margin: 0;
  font-weight: normal;
`

const ExperienceHeader = styled(Card.Header)`
  display: flex;
  align-items: center;
`

const ExperienceCard = ({ logo, company, position, children }) => (
  <Card.Body as="li">
    <ExperienceHeader>
      <Logo>{logo}</Logo>
      <div>
        <Company>{company}</Company>
        <Position>{position}</Position>
      </div>
    </ExperienceHeader>
    <Card.Content>{children}</Card.Content>
  </Card.Body>
)

export default ExperienceCard
