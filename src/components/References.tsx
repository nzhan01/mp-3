
import styled from "styled-components";
import {StyledTitle, StyledMain} from "./ui-components/styles.ts";



const StyledReferenceList = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;
    border-left: solid #3a5a40ff calc(3px + 1vh);
    margin: calc(1px + 1vh)
`;
const StyledH3 = styled.h3`
    font-size: calc(1px + 2.35vw);

    @media screen and (max-width: 900px) {
        font-size: calc(2px + 3.25vw);
    }
`;


export default function References(){

    return (
        <StyledMain>
            <StyledTitle>References</StyledTitle>


            <StyledReferenceList>
                <StyledH3>Braedon Blumfield <i>(720)-800-3377</i></StyledH3>
                <StyledH3>Gia Mendiratta <i>(502)-999-2008</i></StyledH3>
                <StyledH3>Michael Bornstein <i>(347)-280-2746</i></StyledH3>
                <StyledH3>Tyler Chang <i>(347)-777-2022</i></StyledH3>
                <StyledH3>Isiah Graham <i>(502)-342-5567</i></StyledH3>
            </StyledReferenceList>

            <StyledReferenceList>
                <StyledH3>Wheelock College <i>wheelock@bu.edu</i></StyledH3>
                <StyledH3>College of General Studies <i>cgs@bu.edu</i></StyledH3>
                <StyledH3>First Watch <i>FirstWatch@gmail.com</i></StyledH3>
            </StyledReferenceList>




        </StyledMain>
    )
}