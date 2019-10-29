import React from 'react'
import headshot from './img/headshot.png'
import styled from 'styled-components'

const HeadshotImage = styled.img`
  border: 3px solid #17252A;
  border-radius: 10%;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.4);
  height: 150px;
  margin: 5px;
  width: 130px;
`

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

const StyledSplashContainer = styled.article`
    align-items: center;
    background: #DEF2F1;
    border: 5px solid #3AAFA9;
    border-radius: 5%/10%;
    color: #2B7A78;
    margin: 10px;
    padding: 30px;
    text-align: center;
    width: 50vw;
    @media (max-width: 440px) {
        width: 280px;
    }
`

const StyledSplashHeader = styled.h2`
    color: #17252A;
    font-size: 24px;
    margin: 15px;
    text-shadow: 1px 1px 1px #3AAFA9;
`

function SplashPage () {
    return(
        <div>
            <StyledMain>
                <StyledSplashContainer>
                    <StyledSplashHeader>George Caras</StyledSplashHeader>
                    <HeadshotImage src={headshot} />
                    <p>"I bring functional solutions featuring engaging interfaces to make everyone's job easier."</p>
                    <StyledSplashHeader>About Me</StyledSplashHeader>
                    <p>I'm a Community-oriented full-stack developer driven to create and implement the most efficient solutions that achieve the company and team goals. I've worked in the IT Consulting industry for over 5 years in back-office support and management. Using my past experiences to understand client pain points, I strive to provide the best results for clients and their stakeholders.</p>
                </StyledSplashContainer>
            </StyledMain>
        </div>
    )
}

export default SplashPage;