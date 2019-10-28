import React from 'react'
import styled from 'styled-components'
import tcgThumb from './img/TCGthumb.jpg'
import videoGameThumb from './img/videogame-trivia-thumbnail.png'
import youDueThumb from './img/YouDueThumb.png'

const StyledMain = styled.section`
    align-items: center;
    background: cover;
    background-color: #17252A;
    display: flex;
    flex-direction: column;
    margin: 0;
    min-height: 78.5vh;
    padding: 20px 50px 0 50px;
`

const StyledProjectsContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

const StyledPageHeader = styled.h2`
    border-bottom: 2px solid #FEFFFF;
    color: #FEFFFF;
    font-size: 36px;
    margin: 15px;
    text-shadow: 2px 2px #3AAFA9;
`

const StyledProjectArticle = styled.article`
    align-items: center;
    background: #FEFFFF;
    border: 5px solid #3AAFA9;
    border-radius: 5%;
    color: #17252A;
    margin: 20px;
    padding: 0 20px;
    text-align: center;
    width: 330px;
    &:hover{
    transform:scale(1.05);
    z-index:1;
  }
`

const StyledProjectHeader = styled.h3`
    color: #17252A;
    font-size: 24px;
    margin: 15px;
`


const StyledProjectThumbnail = styled.img`
    border: 5px solid #3AAFA9;
    border-radius: 5%/10%;
    height: 180px;
    width: 310px;
`

function Projects() {
    return (
        <div>
            <StyledMain>
                <StyledPageHeader>Projects</StyledPageHeader>
                <StyledProjectsContainer>
                    <StyledProjectArticle>
                        <StyledProjectHeader>Videogame Trivia!</StyledProjectHeader>
                        <StyledProjectThumbnail src={videoGameThumb} alt="Videogame Trvia"/>
                        <p>Responsively designed website trivia game that features Vanilla Javascript, HTML, and CSS. Utilizes Object Oriented Programming and DOM manipulation in JS to provide questions, validate answers, and provide information and feedback on selected answers.</p>
                    </StyledProjectArticle>
                    <StyledProjectArticle>
                        <StyledProjectHeader>Trading Card Game Index</StyledProjectHeader>
                        <StyledProjectThumbnail src={tcgThumb} alt="TCG Index"/>
                        <p>Trading Card Game Index: Full-Stack MERN(MongoDB, Express, Node, React) application with CRUD functionality based on the original Pokemon Trading Card Game Base Set. Users can view, edit, and delete cards as well as create their own custom card.</p>
                    </StyledProjectArticle>
                    <StyledProjectArticle>
                        <StyledProjectHeader>YouDue</StyledProjectHeader>
                        <StyledProjectThumbnail src={youDueThumb} alt="YouDue"/>
                        <p>Full-Stack MERN(MongoDB, Express, Node, React) application with CRUD functionality that allows users to select Books, Movies, and other media of interest and set reminders for these items on specific dates.</p>
                    </StyledProjectArticle>
                </StyledProjectsContainer>
            </StyledMain>
        </div>
    )
}

export default Projects