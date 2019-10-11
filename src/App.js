import React from 'react';
import styled from 'styled-components'
import headshot from './img/headshot.png'

const StyledHeaderContainer = styled.div`
  align-items: center;
  background-image: linear-gradient(lightblue, lightgreen);
  color: darkslategray;
  display: flex;
  flex-direction: column;
  font-family: 'Orbitron', sans-serif;
  height: 100vh;
  justify-content: center;
  max-width: 250px;
  padding: 20px;
  text-align: center;
`

const StyledHeader = styled.h1`
  color: darkslategray;
  text-shadow: 2px 2px white;
`

const HeadshotNavImage = styled.img`
  border: 5px solid white;
  border-radius: 25%;
  height: 150px;
  width: auto;
`

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;  
`


function App() {
  return (
    <div>
      <StyledHeaderContainer>
        <StyledHeader>George Caras</StyledHeader>
        <HeadshotNavImage src={headshot}></HeadshotNavImage>
        <p>Community-oriented Full-Stack developer driven to create and implement the most efficient solutions that achieve company and team goals.</p>
        <p>I bring functional solutions featuring engaging interfaces to make everyone's job easier.</p>
        <StyledNav>
          <div>Resume</div>
          <div>Projects</div>
        </StyledNav>
      </StyledHeaderContainer>
    </div>
  );
}

export default App;
