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
    padding: 20px 20px 0 20px;
`

const StyledProjectsContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

const StyledPageHeader = styled.h2`
    border-bottom: 2px solid #DEF2F1;
    color: #F1F1F1;
    font-size: 36px;
    margin: 10px;
`

const StyledProjectArticle = styled.article`
    align-items: center;
    background: #DEF2F1;
    border: 5px solid #3AAFA9;
    border-radius: 5%;
    color: #2B7A78;
    margin: 20px;
    min-height: 500px;
    padding: 0 20px;
    text-align: center;
    width: 330px;
    &:hover{
    transform:scale(1.05);
    z-index:1;
    }
    @media (max-width: 440px) {
        width: 300px;
    }
`

const StyledProjectHeader = styled.h3`
    color: #17252A;
    font-size: 24px;
    margin: 15px;
    text-shadow: 1px 1px 1px #3AAFA9;
`


const StyledProjectThumbnail = styled.img`
    border: 5px solid #3AAFA9;
    border-radius: 5%/10%;
    height: 180px;
    width: 310px;
    margin-bottom: 20px;
    @media (max-width: 440px) {
        width: 280px;
    }
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
                        <li>Responsively designed website trivia game that features Vanilla Javascript, HTML, and CSS</li>
                        <br />
                        <li>Utilizes Object Oriented Programming and DOM manipulation in JS to provide questions, validate answers, and provide information and feedback on selected answers</li>
                    </StyledProjectArticle>
                    <StyledProjectArticle>
                        <StyledProjectHeader>Trading Card Game Index</StyledProjectHeader>
                        <StyledProjectThumbnail src={tcgThumb} alt="TCG Index"/>
                        <li>Based on the original Pokemon Trading Card Game Base Set.</li>
                        <br />
                        <li>Full-Stack MERN(MongoDB, Express, Node, React) application with CRUD functionality</li>
                        <br />
                        <li>Users can view, edit, and delete cards as well as create their own custom card.</li>
                    </StyledProjectArticle>
                    <StyledProjectArticle>
                        <StyledProjectHeader>YouDue</StyledProjectHeader>
                        <StyledProjectThumbnail src={youDueThumb} alt="YouDue"/>
                        <li>Full-Stack MERN(MongoDB, Express, Node, React) application with CRUD functionality</li>
                        <br />
                        <li>Utilizes Google APIs to populate search queries for media</li>
                        <br />
                        <li>Allows users to select Books, Movies, and other media of interest and set reminders for these items on specific dates.</li>
                    </StyledProjectArticle>
                </StyledProjectsContainer>
            </StyledMain>
        </div>
    )
}

export default Projects