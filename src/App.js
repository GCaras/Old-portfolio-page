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
  margin-top: 120px;
`

const StyledHeaderContainer = styled.div`
  align-items: center;
  background-color: #2B7A78;
  border-bottom: 2px solid #F1F1F1;
  color: #F1F1F1;
  display: flex;
  justify-content: center;
  padding: 20px 0px;
  position: fixed;
  text-align: center;
  top: 0;
  width: 100vw;
  z-index: 1010;
  @media (max-width: 624px) {
    flex-direction: column
  }
  @media (max-width: 375px) {
    flex-direction: column;
    padding: 20px 0px;
  }
`

const StyledFooterContainer = styled.div`
  background-color: #2B7A78;
  border-top: 2px solid #F1F1F1;
  padding: 20px 0px;
  text-align: center;
  width: 100vw;
  z-index: 1000;
`

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 20px;
  @media (max-width: 768px) {
    justify-content: space-around;
    margin: 0px;
  }
`
const StyledPageHeader = styled.h2`
    color: #F1F1F1;
    font-size: 40px;
    margin: 0px;
    text-shadow: 2px 2px 1px #17252A;
`

const StyledPageSubHeader = styled.h3`
    color: #F1F1F1;
    font-size: 20px;
    margin: 0px;
    text-shadow: 2px 2px 1px #17252A;
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
            <StyledPageSubHeader>
              Software Engineer
            </StyledPageSubHeader>
          </StyledNav>
        </StyledHeaderContainer>
        <SplashPage/>
        <Projects/>
        <StyledFooterContainer />
      </AppContainer>
    </div>
  );
}

export default App;
