import React from 'react'
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
    border-radius: 5%;
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
                    <h1>Contact George Caras</h1>
                    <section>
                        <div>Email: gcaras0@gmail.com</div>
                        <div>Phone: (703) 975 2084</div>
                    </section>
                </StyledSplashContainer>
            </StyledMain>
        </div>
    )
}

export default SplashPage;