import React from 'react';
import styled from 'styled-components'
import SplashPage from './SplashPage'

const AppContainer = styled.body`
  background-color: black;
  display: flex;
  flex-direction: column;
  font-family: 'Varela', sans-serif;
  height: calc(100vh - 10%);
  margin: 0 auto;
  width: calc(100vw - 0%);
`

const StyledHeaderContainer = styled.div`
  align-items: center;
  background-color: darkcyan;
  border-bottom: 2px solid black;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  text-shadow: 2px 2px black;
  text-align: center;
  @media (max-width: 375px) {
    flex-direction: column;
    padding: 10px;
  }
`

const StyledHeader = styled.h1`
  color: white;
  font-size: 40px;
  margin: 0px;
  @media (max-width: 560px) {
    font-size: 24px;
  }
  @media (max-width: 375px) {
    font-size: 16px;
    display: none;
  }
`

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    justify-content: space-around;
    margin: 5px;
  }
`

const StyledNavItem = styled.div`
  /* background-color: black; */
  background-image: linear-gradient(black, slategray, black);
  border: 2px solid white;
  border-radius: 13%/30%;
  box-shadow: 2px 2px darkslategray;
  font-size: 30px;
  margin: 0 10px;
  padding: 3px 5px;
  &:hover{
    box-shadow: 5px 5px darkslategray;
    transform:scale(1.05);
    z-index:1;
  }
  @media (max-width: 768px) {
    font-size: 20px;
    padding: 0 10px;
  }
`

const StyledSocialLinksContainer = styled.div`
  display: flex;
  @media (max-width: 768px) {
    margin: 3px;
  }
`

const StyledSocialLinks = styled.img`
  height: 50px;
  padding: 0 5px;
  &:hover{
    transform:scale(1.1);
    z-index:1;
  }
  @media (max-width: 768px) {
    height: 30px;
    padding: 0 5px;
  }
`

const StyledFooterContainer = styled.div`
  align-items: center;
  background-color: darkcyan;
  border-top: 2px solid black;
  color: white;
  display: flex;
  height: 90px;
  justify-content: center;
  text-shadow: 2px 2px black;
  text-align: center;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0px;
  }
`


function App() {
  return (
    <div>
      <AppContainer>
        <StyledHeaderContainer>
          <StyledHeader>George Caras</StyledHeader>
          <StyledNav>
            <a href="#"><StyledNavItem>Resume</StyledNavItem></a>
            <a href="#"><StyledNavItem>Projects</StyledNavItem></a>
          </StyledNav>
        </StyledHeaderContainer>
        <SplashPage />
      </AppContainer>
      <StyledFooterContainer>
        <StyledSocialLinksContainer>
          <a href=""><StyledSocialLinks src="https://image.flaticon.com/icons/svg/254/254394.svg" /></a>
          <a href=""><StyledSocialLinks src="https://image.flaticon.com/icons/svg/25/25657.svg" /></a>
        </StyledSocialLinksContainer>
      </StyledFooterContainer>
    </div>
  );
}

export default App;
