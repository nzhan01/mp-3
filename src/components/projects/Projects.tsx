import styled from 'styled-components';
import {StyledMain,StyledTitle,StyledP} from "../ui-components/styles.ts";


import Calculator from "./Calculator.tsx";

const StyledMovieMax = styled.div`
    display: flex;
    flex-direction: column;
    text-align: justify;
    width: 100%;
    border-left: solid #3a5a40ff calc(3px + 1vh);
    margin: calc(1px + 3vh)
    
`

const StyledH3 = styled.h3`
    font-size: calc(5px + 4vh);
    margin-left: calc(5px + 1vw)
`
const StyledCalcTitle = styled.div`
    text-align: center;
    font-size: calc(4px + 3vw);
    color: #3a5a40ff;
    font-weight: bold;
`;

const StyledImagesContainer = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
        max-height: 40%;
    
    `
const StyledImage = styled.img`
    max-width: 40%;
    max-height: 40%;
    margin: 0.25vh;
    
    @media screen and (max-width: 900px) {
        max-height: 30%;
        max-width: 30%;
    }
`;
export default function Projects(){

    return (

        <StyledMain>
            <StyledTitle>Projects</StyledTitle>
            <StyledMovieMax>
                <StyledH3> MovieMax WebApp</StyledH3>
                <StyledP> Developed movie logging app that uses TheMovieDB(TMDB) API to allow users to search and log
                    movies
                    in users’ watchlist.
                    Used Python, Flask, Docker, and SQLAlchemy
                </StyledP>
                <br/>
            </StyledMovieMax>
            <StyledCalcTitle>
                <h2><i>Calculosaurus</i></h2>
            </StyledCalcTitle>
            <StyledImagesContainer>
                <StyledImage id="t-rex" src="../../../public/t-rex.png.jpg" alt="t-rex-image"/>
                <StyledImage id="stego" src="../../../public/stego.png" alt="stego-image"/>
                <StyledImage id="triceratop" src="../../../public/triceratops.jpeg" alt="triceratop-image"/>
            </StyledImagesContainer>

            <Calculator/>
        </StyledMain>

    )
}