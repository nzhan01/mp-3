
import styled from "styled-components";

import {StyledTitle, StyledMain} from "./ui-components/styles.ts"

const StyledProfileImage = styled.img`
    max-width: 100%;
`;
const StyledMainImage = styled.div`
    align-self: center;
    width: 80%;
    margin: 0.5vh 1vw;

`;



const StyledParagraph = styled.p`
    margin: 0 1vw;
    font-size: calc(1px + 1.5vw);
    width: 80%;
    align-self: center;

    @media screen and (max-width: 900px) {
        font-size: calc(2px + 3vw);
    }
`;




export default function Main(){

    return (

            <StyledMain>
                <StyledTitle><b>Home</b></StyledTitle>


                <StyledMainImage>
                    <StyledProfileImage src="profilePic.png" alt="Nicholas Zhang"/>
                </StyledMainImage>
                <br/>
                <StyledParagraph>
                    My name is Nicholas Zhang, I am a 3rd year Computer Science student at <strong>Boston
                    University</strong>.
                    I am interested in software engineering, cybersecurity, and web development. I am also pursuing
                    a minor in Deaf Studies.
                </StyledParagraph>


            </StyledMain>

    )
}