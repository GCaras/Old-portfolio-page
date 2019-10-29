import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

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
                        <Link to='mailto: gcaras0@gmail.com'>
                        <div>Email: gcaras0@gmail.com</div>
                        </Link>
                        <div>Phone: (703) 975 2084</div>
                        <div>LinkedIn</div>
                    </section>
                </StyledSplashContainer>
            </StyledMain>
        </div>
    )
}

export default SplashPage;