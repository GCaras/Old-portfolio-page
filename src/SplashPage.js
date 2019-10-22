import React from 'react'
import headshot from './img/headshot.png'
import styled from 'styled-components'

const HeadshotImage = styled.img`
  border: 2px solid black;
  border-radius: 10%;
  box-shadow: 5px 5px 3px rgba(0, 0, 0, 0.4);
  height: 150px;
  margin: 5px;
  width: 130px;
`

const StyledMain = styled.section`
    align-items: center;
    background: cover;
    background-color: beige;
    display: flex;
    flex-direction: column;
    height: calc(100vh - 184px);
    margin: 0;
    padding: 20px 0 0 0;
`

function SplashPage () {
    return(
        <div>
            <StyledMain>
                <HeadshotImage src={headshot} />
                <p>"I bring functional solutions featuring engaging interfaces to make everyone's job easier."</p>
                <h2>About Me</h2>
                <p>Things n' stuff all about George!</p>
            </StyledMain>
        </div>
    )
}

export default SplashPage;