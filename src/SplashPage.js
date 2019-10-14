import React from 'react'
import styled from 'styled-components'

const HeightTest = styled.div`
    align-items: center;
    background-image: linear-gradient(slateblue, lightgreen);
    height: 100vh;
    margin: 0;
`

function SplashPage () {
    return(
        <div>
            <HeightTest>
                <p>Community-oriented Full-Stack developer driven to create and implement the most efficient solutions that achieve company and team goals.</p>
            </HeightTest>
        </div>
    )
}

export default SplashPage;