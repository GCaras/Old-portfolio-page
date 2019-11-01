import React from 'react'
import styled from 'styled-components'
import tcgThumb from './img/TCGthumb.jpg'
import videoGameThumb from './img/videogame-trivia-thumbnail.png'
import youDueThumb from './img/YouDueThumb.png'
import reactIcon from './img/react-brands.svg'
import nodeJsIcon from './img/nodejs.svg'

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
    color: #F1F1F1;
    font-size: 36px;
    margin: 10px;
`

const StyledSkillsArticle = styled.article`
    align-items: center;
    background: #DEF2F1;
    border: 5px solid #3AAFA9;
    border-radius: 10%/50%;
    color: #2B7A78;
    display: flex;
    font-size: 18px;
    margin: 20px;
    min-height: 50px;
    padding: 0 30px;
    text-align: center;
    max-width: 1100px;
    @media (max-width: 760px) {
        border-radius: 50%/10%;
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

const StyledProjectDesc = styled.section`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const StyledSkillsIconContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-around;
    margin: 20px;
    @media (max-width: 760px) {
        flex-direction: column;
    }
`

const StyledTechIconContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-around;
    margin: 20px;
`

const StyledTechIcon = styled.img`
    height: 50px;
    margin: 0px 10px;
    width: auto;
`

function Projects() {
    return (
        <div>
            <StyledMain>
                <StyledPageHeader>Skills</StyledPageHeader>
                <StyledSkillsArticle>
                    <StyledSkillsIconContainer>
                        <div>
                            <StyledTechIcon src="https://image.flaticon.com/icons/svg/919/919828.svg" />
                            <p>JavaScript</p>
                        </div>
                        <div>
                            <StyledTechIcon src={reactIcon} />
                            <h4>React</h4>
                        </div>
                        <div>
                            <StyledTechIcon src={nodeJsIcon} />
                            <h4>Node</h4>
                        </div>
                        <div>
                            <StyledTechIcon src="https://user-images.githubusercontent.com/11978772/40430921-73d53922-5e63-11e8-8dcd-1662136c3212.png" />
                            <h4>MongoDB</h4>
                        </div>
                        <div>
                            <StyledTechIcon src="https://icon-library.net/images/python-icon/python-icon-18.jpg" />
                            <h4>Python</h4>
                        </div>
                        <div>
                            <StyledTechIcon src="https://icon-library.net/images/django-icon/django-icon-0.jpg" />
                            <h4>Django</h4>
                        </div>
                        <div>
                            <StyledTechIcon src="https://image.flaticon.com/icons/svg/152/152843.svg" />
                            <h4>HTML</h4>
                        </div>
                        <div>
                            <StyledTechIcon src="https://image.flaticon.com/icons/svg/732/732007.svg" />
                            <h4>CSS</h4>
                        </div>
                    </StyledSkillsIconContainer>
                </StyledSkillsArticle>
                <StyledPageHeader>Projects</StyledPageHeader>
                <StyledProjectsContainer>
                    <article className="flip-container">
                        <div className="flipper">
                            <div className="front">
                                <StyledProjectHeader>Videogame Trivia!</StyledProjectHeader>
                                <StyledProjectThumbnail src={videoGameThumb} alt="Videogame Trivia"/>
                                <StyledTechIcon src="https://image.flaticon.com/icons/svg/152/152843.svg"/>
                                <StyledTechIcon src="https://image.flaticon.com/icons/svg/732/732007.svg"/>
                                <StyledTechIcon src="https://image.flaticon.com/icons/svg/919/919828.svg"/>
                            </div>
                            <div className="back">
                                <StyledProjectHeader>Trading Card Game Index</StyledProjectHeader>
                                <StyledProjectDesc>
                                    <li>Responsively designed website trivia game that features Javascript, HTML, and CSS</li>
                                    <li>Utilizes Object Oriented Programming and DOM manipulation in JS to provide questions, validate answers, and provide information and feedback on selected answers</li>
                                    <StyledTechIconContainer>
                                        <a target="_blank" href="http://kanto.surge.sh/">
                                            <StyledTechIcon src="https://image.flaticon.com/icons/svg/152/152843.svg"/>
                                        </a>
                                        <a href="https://github.com/GCaras/Project-1-Video-Game-Trivia">
                                        <StyledTechIcon src="https://image.flaticon.com/icons/svg/25/25657.svg" />
                                        </a>
                                    </StyledTechIconContainer>
                                </StyledProjectDesc>
                            </div>
                        </div>
                    </article>
                    <article className="flip-container">
                        <div className="flipper">
                            <div className="front">
                                <StyledProjectHeader>Trading Card Game Index</StyledProjectHeader>
                                <StyledProjectThumbnail src={tcgThumb} alt="TCG Index"/>
                                <StyledTechIcon src={reactIcon}/>
                                <StyledTechIcon src={nodeJsIcon} />
                            </div>
                            <div className="back">
                                <StyledProjectHeader>Trading Card Game Index</StyledProjectHeader>
                                <StyledProjectDesc>
                                    <li>Based on the original Pokemon Trading Card Game Base Set.</li>
                                    <li>Full-Stack MERN(MongoDB, Express, Node, React) application with CRUD functionality</li>
                                    <li>Users can view, edit, and delete cards as well as create their own custom card.</li>
                                    <StyledTechIconContainer>
                                        <a target="_blank" href="http://kanto.surge.sh/">
                                            <StyledTechIcon src={reactIcon}/>
                                        </a>
                                        <a href>
                                        <StyledTechIcon src="https://image.flaticon.com/icons/svg/25/25657.svg" />
                                        </a>
                                    </StyledTechIconContainer>
                                </StyledProjectDesc>
                            </div>
                        </div>
                    </article>
                    <article className="flip-container">
                        <div className="flipper">
                            <div className="front">
                                <StyledProjectHeader>YouDue</StyledProjectHeader>
                                <StyledProjectThumbnail src={youDueThumb} alt="YouDue"/>
                                <StyledTechIcon src={reactIcon}/>
                                <StyledTechIcon src={nodeJsIcon} />
                            </div>
                            <div className="back">
                                <StyledProjectHeader>YouDue</StyledProjectHeader>
                                <StyledProjectDesc>
                                    <li>Full-Stack MERN(MongoDB, Express, Node, React) application with CRUD functionality</li>
                                    <li>Utilizes Google APIs to populate search queries for media</li>
                                    <li>Allows users to select Books, Movies, and other media of interest and set reminders for these items on specific dates.</li>
                                <StyledTechIconContainer>
                                        <a target="_blank" href="http://youdue.surge.sh/">
                                            <StyledTechIcon src={reactIcon}/>
                                        </a>
                                        <a target="_blank" href="https://github.com/GCaras/Project-3-Dashboard">
                                        <StyledTechIcon src="https://image.flaticon.com/icons/svg/25/25657.svg" />
                                        </a>
                                    </StyledTechIconContainer>
                                </StyledProjectDesc>
                            </div>
                        </div>
                    </article>
                </StyledProjectsContainer>
            </StyledMain>
        </div>
    )
}

export default Projects