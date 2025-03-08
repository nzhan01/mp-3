

import styled from "styled-components";
import { StyledTitle, StyledMain} from "./ui-components/styles.ts";


const StyledPosition = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1vh auto;
`;


export default function Employment(){



    return (
        <StyledMain>

            <StyledTitle>Employment</StyledTitle>


            <div id = "job-content">
                <StyledPosition>
                    <h3>Boston University College of General Studies | Boston, MA 	 2024 - Present</h3>
                    <h4>Teaching Assistant</h4>
                    <ul>
                        <li>Collaborated with five professors to design, implement, instruct, and evaluate laboratory sessions</li>
                        <li>Resided over multiple weekly biology lab activities for over 60 students</li>
                        <li> Tutored students during weekly office hours</li>
                    </ul>
                </StyledPosition>


                <StyledPosition>
                    <h3>Boston University Wheelock College of Education | Boston, MA 2025 - Present</h3>
                    <h4>Language Link Facilitator</h4>
                    <ul>
                        <li>Worked with Deaf Studies professors to develop weekly lesson plans</li>
                        <li>Lead weekly tutoring sessions in American Sign Language</li>
                    </ul>
                </StyledPosition>

                <StyledPosition>
                    <h3>First Watch | Louisville, KY 2022-2023</h3>
                    <h4>Server</h4>
                    <ul>
                        <li>Completed 100+ orders in a fast-paced team environment</li>
                        <li>Engaged in effective customer service </li>
                    </ul>
                </StyledPosition>


            </div>
        </StyledMain>

    )
}