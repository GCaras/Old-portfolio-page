import React from 'react'
import headshot from './img/headshot.png'
import styled from 'styled-components'

const HeadshotImage = styled.img`
  border: 3px solid #17252A;
  border-radius: 10%;
  box-shadow: 5px 5px 3px rgba(0, 0, 0, 0.4);
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
    background: #FEFFFF;
    border: 5px solid #3AAFA9;
    border-radius: 5%/10%;
    color: #17252A;
    margin: 10px;
    padding: 20px;
    text-align: center;
    width: 50vw;
    @media (max-width: 440px) {
        width: 280px;
    }
`

function SplashPage () {
    return(
        <div>
            <StyledMain>
                <StyledSplashContainer>
                    <h1>George Caras</h1>
                    <HeadshotImage src={headshot} />
                    <p>"I bring functional solutions featuring engaging interfaces to make everyone's job easier."</p>
                    <h2>About Me</h2>
                    <p>From Ashburn, Va born and raised. On the playgrounds is where I spent most of my days. </p>
                </StyledSplashContainer>
            </StyledMain>
        </div>
    )
}

export default SplashPage;