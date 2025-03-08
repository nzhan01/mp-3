import styled from "styled-components";
import {StyledTitle, StyledMain,StyledP} from "./ui-components/styles.ts";


const StyledAchievementContent = styled.div`
    display: flex;
    flex-direction: column;
    text-align: justify;
    width: 100%;
    border-left: solid #3a5a40ff calc(3px + 1vh);
    margin: calc(1px + 3vh)
`
const StyledH3 = styled.h3`
    margin-left: calc(5px + 1vw)

`;




export default function Achievements(){

    return (
        <StyledMain>
            <StyledTitle>Achievements</StyledTitle>
            <StyledAchievementContent>
                <StyledH3> Boston University Dean's List</StyledH3>
                <StyledP> Successfully maintained higher than a 3.5 gpa out of 4 for 5 consecutive semesters </StyledP>
                <br/>
                <StyledH3> Boston University College of General Studies</StyledH3>
                <StyledP> Successfully completed the London 2023 summer study abroad program where I took 3 classes as well
                    as completed a photo portfolio documenting my experiences</StyledP>
                <br/>
                <StyledH3>CS357 CyberAttack Poster Session</StyledH3>
                <StyledP>Worked on a team of 4 to research, analyze, and create an informational poster documenting the
                    recent 2024 TeamTNT docker gattling gun cryptojacking attack. I presented this poster to over 20
                    software
                    engineering and cybersecurity industry professionals</StyledP>
            </StyledAchievementContent>

        </StyledMain>
    )
}