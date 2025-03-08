
import styled from 'styled-components';
import {StyledTitle, StyledMain, StyledP} from "./ui-components/styles.ts"

const StyledCourseContainer = styled.div`
    margin: 0.5vh 1vw;
    display: flex;
    flex-direction: row;
    font-size: calc(2px + 2vw);
`;



const StyledCoursework = styled.div`
    margin: 0.5vh 1vw;
`;



export default function Education(){

    return (
        <>
            <StyledMain>
                <StyledTitle>
                    Education
                </StyledTitle>


                <StyledCoursework>

                    <h1>Boston University | Boston, MA </h1>
                    <h3>Expected May 2026</h3>

                    <StyledP>Major: Computer Science | Minor: Deaf Studies | GPA: 3.5</StyledP>
                </StyledCoursework>

                <StyledCoursework>
                    <h1>Coursework</h1>
                    <StyledCourseContainer>
                        <div id="course-c1">
                            <ul>
                                <li>Computer Systems</li>
                                <li>Web Development</li>
                                <li>Linear Algebra</li>
                                <li>Cybersecurity</li>
                            </ul>

                        </div>

                        <div id="course-c2">
                            <ul>
                                <li>Data Structures</li>
                                <li>Algorithms</li>
                                <li>Functional Programming</li>
                                <li>Software Development</li>
                            </ul>
                        </div>
                    </StyledCourseContainer>


                </StyledCoursework>

                <StyledCoursework>
                    <h1> Other Education</h1>
                    <h3> University of Louisville | Louisville, KY</h3>
                    <StyledP>Part-Time Student</StyledP>
                    <br/>
                    <h3> DuPont Manual High School | Louisville, KY</h3>
                    <StyledP> Math, Science, Technology Magnet program</StyledP>
                </StyledCoursework>
            </StyledMain>
        </>
    )
}