
import styled from "styled-components";

const StyledHeader = styled.header`
        display: flex;
        flex-direction: column;
        padding: 2vh 2vw;
        background-color: #344E41;
        color: bisque;
    
    @media screen and (max-width: 900px){
        align-items: center;
    }
    `;

export default function Header() {


    return (
        <>
            <StyledHeader>
                <h1>Nicholas Zhang</h1>
                <p>My Resume Website</p>
            </StyledHeader>
        </>
    )
}




