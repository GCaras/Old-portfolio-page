import React from 'react';
import styled from 'styled-components'
import SplashPage from './SplashPage'
import Projects from './Projects'

const AppContainer = styled.section`
  background-color: #7A797D;
  display: flex;
  flex-direction: column;
  font-family: 'Varela', sans-serif;
  margin: 0 auto;
`

const StyledHeaderContainer = styled.div`
  align-items: center;
  background-color: #2B7A78;
  border-bottom: 2px solid #F1F1F1;
  color: #F1F1F1;
  display: flex;
  justify-content: center;
  padding: 10px 30px;
  text-align: center;
  @media (max-width: 624px) {
    flex-direction: column
  }
  @media (max-width: 375px) {
    flex-direction: column;
    padding: 10px;
  }
`

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
  min-height: 30px;
  @media (max-width: 768px) {
    justify-content: space-around;
    margin: 5px;
  }
`
const StyledPageHeader = styled.h2`
    color: #F1F1F1;
    font-size: 40px;
    margin: 10px;
    text-shadow: 2px 2px 1px #17252A;
`

// const StyledNavItem = styled.div`
//   background-color: #17252A;
//   border: 2px solid #F1F1F1;
//   border-radius: 13%/30%;
//   box-shadow: 2px 2px 10px gray;
//   font-size: 25px;
//   margin: 0 10px;
//   padding: 8px 10px;
//   &:hover{
//     box-shadow: 5px 5px 7px gray;
//     transform:scale(1.05);
//     z-index:1;
//   }
//   @media (max-width: 768px) {
//     border-radius: 10%/25%;
//     font-size: 20px;
//     padding: 5px 10px;
//   }
// `

const StyledSocialLinksContainer = styled.div`
  display: flex;
  @media (max-width: 768px) {
    margin: 3px;
  }
`

const StyledSocialLinks = styled.img`
  height: 50px;
  padding: 0 15px;
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
  background-color: #2B7A78;
  border-top: 2px solid #F1F1F1;
  color: #F1F1F1;
  display: flex;
  height: 90px;
  justify-content: space-between;
  padding: 0 30px;
  position: fixed; 
  text-shadow: 1px 1px #17252A;
  text-align: center;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0px;
  }
`

const StyledContactPointHeader = styled.span`
    color: #17252A;
    font-size: 18px;
    font-weight: bolder;
    margin: 15px;
    text-shadow: none;
`

function App() {
  return (
    <div>
      <AppContainer>
        <StyledHeaderContainer>
          <StyledNav>
            <StyledPageHeader>
              George Caras
            </StyledPageHeader>
          </StyledNav>
        </StyledHeaderContainer>
        <SplashPage/>
        <Projects/>
      </AppContainer>
      <StyledFooterContainer>
        <div>
          <StyledContactPointHeader>Email:</StyledContactPointHeader> gcaras0@gmail.com
          <StyledContactPointHeader>Phone:</StyledContactPointHeader>
          (703) 975 2084
        </div>
        <StyledSocialLinksContainer>
          <a target="_blank" href="https://www.linkedin.com/in/george-caras/"><StyledSocialLinks src="https://image.flaticon.com/icons/svg/254/254394.svg"/></a>
          <a target="_blank" href="https://github.com/GCaras"><StyledSocialLinks src="https://image.flaticon.com/icons/svg/25/25657.svg"/></a>
        </StyledSocialLinksContainer>
      </StyledFooterContainer>
    </div>
  );
}

export default App;
