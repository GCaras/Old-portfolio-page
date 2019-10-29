import React from 'react'
import styled from 'styled-components'
import headshot from './img/headshot.png'

const StyledMain = styled.section`
    align-items: center;
    background: cover;
    background-color: #17252A;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 78.5vh;
    margin: 0;
    padding: 20px 20px;
`

const HeadshotImage = styled.img`
  border: 3px solid #17252A;
  border-radius: 10%;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.4);
  height: 150px;
  margin: 5px;
  width: 130px;
`

const StyledPageHeader = styled.h2`
    color: #F1F1F1;
    font-size: 36px;
    margin: 0px;
`

const StyledSplashContainer = styled.article`
    align-items: center;
    background: #DEF2F1;
    border: 5px solid #3AAFA9;
    border-radius: 5%;
    color: #17252A;
    margin: 10px;
    padding: 20px;
    text-align: center;
    max-height: 350px;
    max-width: 450px;
    /* @media (max-width: 440px) {
        width: 280px;
    } */
`

const StyledSocialLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
  padding: 10px;
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

const StyledContactPointHeader = styled.span`
    color: #17252A;
    font-size: 24px;
    margin: 15px;
    text-shadow: 1px 1px 1px #3AAFA9;
`


function SplashPage () {
    return(
        <div>
            <StyledMain>
                <StyledPageHeader>Contact</StyledPageHeader>
                <StyledSplashContainer>
                    <HeadshotImage src={headshot} />
                    <section>
                        <StyledContactPointHeader>George Caras</StyledContactPointHeader>
                        <br/>
                        <div>
                            <StyledContactPointHeader>Email:</StyledContactPointHeader>  gcaras0@gmail.com
                        </div>
                        <div>
                            <StyledContactPointHeader>Phone:</StyledContactPointHeader>
                             (703) 975 2084
                        </div>
                        <StyledSocialLinksContainer>
                            <a target="_blank" href="https://www.linkedin.com/in/george-caras/">
                                <StyledSocialLinks src="https://image.flaticon.com/icons/svg/254/254394.svg"/>
                            </a>
                            <a target="_blank" href="https://github.com/GCaras">
                                <StyledSocialLinks src="https://image.flaticon.com/icons/svg/25/25657.svg"/>
                            </a>
                        </StyledSocialLinksContainer>
                    </section>
                </StyledSplashContainer>
            </StyledMain>
        </div>
    )
}

export default SplashPage;