import React from 'react'
import headshot from './img/headshot.png'
import styled from 'styled-components'

const HeadshotImage = styled.img`
  border: 5px solid white;
  border-radius: 10%;
  box-shadow: 5px 5px black;
  height: 150px;
  margin: 5px;
  width: 130px;
`

const StyledMain = styled.section`
    align-items: center;
    background-color: lightpink;
    background: cover;
    display: flex;
    flex-direction: column;
    height: calc(100vh - 184px);
    padding: 20px 0 0 0;
`

function SplashPage () {
    return(
        <div>
            <StyledMain>
                <HeadshotImage src={headshot} />
                <p>"I bring functional solutions featuring engaging interfaces to make everyone's job easier."</p>
            </StyledMain>
        </div>
    )
}

export default SplashPage;