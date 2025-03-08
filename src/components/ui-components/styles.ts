import styled from "styled-components";


const StyledTitle = styled.h3`
    text-align: center;
    font-size: calc(4px + 6vw);
    color: #3a5a40ff;
    @media screen and (max-width: 900px) {
        text-align: center;
        
    }
`;

const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    width:70%;
    background-color: #dad7cdff;
  
    align-self: start;
    padding: 1vh 2vw;
    font-size: calc(1px + 1.5vw);
    height: 100vh;
    @media screen and (max-width: 900px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        
        background-color: #dad7cdff;
        align-content: center;
        font-size: calc(2px + 2vw); 
        
    }

    

`;
const StyledP = styled.p`
    margin: 0 1vw;
    font-size: calc(2px + 1.5vw);
    width: 80%;
    align-self: center;

    @media screen and (max-width: 900px) {
    margin: 2% 2%;
    font-size: calc(2px + 2vw); }

`;
export  {StyledTitle, StyledMain, StyledP};

