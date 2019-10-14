import React from 'react';
import styled from 'styled-components'
import headshot from './img/headshot.png'
import SplashPage from './SplashPage'

const AppContainer = styled.div`
  display: flex;
`

const StyledHeaderContainer = styled.div`
  align-items: center;
  background-image: linear-gradient(slateblue, lightgreen);
  border-right: 2px solid white;
  color: white;
  display: flex;
  flex-direction: column;
  font-family: 'Orbitron', sans-serif;
  font-weight: bolder;
  height: 100vh;
  justify-content: center;
  text-shadow: 2px 2px darkgray;
  min-width: 200px;
  max-width: 250px;
  padding: 20px;
  text-align: center;
`

const StyledHeader = styled.h1`
  color: white;
  
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
      <AppContainer>
        <StyledHeaderContainer>
          <StyledHeader>George Caras</StyledHeader>
          <HeadshotNavImage src={headshot}></HeadshotNavImage>
          <p>I bring functional solutions featuring engaging interfaces to make everyone's job easier.</p>
          <StyledNav>
            <div>Resume</div>
            <div>Projects</div>
          </StyledNav>
        </StyledHeaderContainer>
        <SplashPage />
      </AppContainer>
    </div>
  );
}

export default App;
