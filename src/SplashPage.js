import React from 'react'
import headshot from './img/headshot.png'
import styled from 'styled-components'

const HeadshotImage = styled.img`
  border: 3px solid #17252A;
  border-radius: 10%;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.4);
  height: 250px;
  margin: 5px;
  width: 220px;
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
    padding: 0px 20px;
    padding-top: 20px;
`

const StyledSplashContainer = styled.article`
    align-items: center;
    background: #DEF2F1;
    border: 5px solid #3AAFA9;
    border-radius: 5%/10%;
    color: #2B7A78;
    display: flex;
    justify-content: space-evenly;
    margin: 10px;
    padding: 30px;
    text-align: center;
    width: 40vw;
    @media (max-width: 1000px) {
        width: 300px;
        flex-direction: column;
    }
`

const StyledPageHeader = styled.h2`
    color: #F1F1F1;
    font-size: 36px;
    margin: 10px;
`

const StyledAboutContainer = styled.article`
    align-items: center;
    background: #DEF2F1;
    border: 5px solid #3AAFA9;
    border-radius: 5%/10%;
    color: #2B7A78;
    display: flex;
    flex-direction: column;
    margin: 10px;
    padding: 30px;
    text-align: center;
    width: 50vw;
    @media (max-width: 700px) {
        width: 280px;
    }
`

const StyledSplashHeader = styled.h2`
    color: #17252A;
    font-size: 24px;
    margin: 15px;
    text-shadow: 1px 1px 1px #3AAFA9;
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
    font-size: 18px;
    margin: 15px;
    text-shadow: 1px 1px 1px #3AAFA9;
`

function SplashPage () {
    return(
        <div>
            <StyledMain>
                <StyledSplashContainer>
                    <section>
                        <HeadshotImage src={headshot} />
                    </section>
                    <section>
                        <StyledSplashHeader>Contact:</StyledSplashHeader>
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
                            <a target="_blank" href="https://drive.google.com/file/d/15I8rDso6evaZ274yWDtWjiA7xkaAvNSj/view?usp=sharing">
                                <StyledSocialLinks src="https://icon-library.net/images/resume-icon-png/resume-icon-png-1.jpg"/>
                            </a>
                        </StyledSocialLinksContainer>
                    </section>
                </StyledSplashContainer>
                <StyledPageHeader>About Me</StyledPageHeader>
                <StyledAboutContainer>
                    <StyledSplashHeader>What I do...</StyledSplashHeader>
                    <p>I'm a community-oriented full-stack developer driven to create and implement the most efficient solutions that achieve the company and team goals.  I've worked in the IT Consulting industry for over 5 years in back-office support and management. Using my past experiences to understand client pain points, I bring functional solutions featuring responsive interfaces to make everyone's job easier.</p>
                    <StyledSplashHeader>Personally speaking...</StyledSplashHeader>
                    <p>I was born and raised in Northern Virginia. I enjoy spending time with my family and friends and exploring all that the area has to offer including dining, breweries, and sports! I'm a loyal DC sports fan (for better or worse) and religiously follow the Nationals, Capitals, and Redskins. I love binging Netflix series, watching movies, and playing videogames. Check out some of my projects below and you'll see what I mean! </p>
                </StyledAboutContainer>
            </StyledMain>
        </div>
    )
}

export default SplashPage;