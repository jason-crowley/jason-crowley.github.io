import React from "react"
import styled from "styled-components"

import Waves from "../components/Waves"
import Hello from "../components/Hello"

const WavesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
  height: 65vh;
  min-height: 65vh;
  position: relative;
  background: linear-gradient(
    60deg,
    rgba(84, 58, 183, 1) 0%,
    rgba(0, 172, 193, 1) 100%
  );
`

const PositionedWaves = styled(Waves)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
`

const IntroHeading = styled.h1`
  font-size: 3rem;
  color: white;

  @media screen and (min-width: 768px) {
    font-size: 4rem;
  }

  padding: 1rem;
  text-shadow: 0 0 0 rgba(0,0,0,0.6);
  transform: translate(0, 0);

  transition: all 0.3s ease;

  &:hover {
    padding: 2rem;
    text-shadow: 5px 3px 2px rgba(0,0,0,0.2);
    transform: translate(-8px, -4px);
  }
`

const Intro = () => (
  <WavesContainer>
    <IntroHeading>
      <Hello /> Hi, I'm Jason&nbsp;Crowley
    </IntroHeading>
    <PositionedWaves />
  </WavesContainer>
)

export default Intro
