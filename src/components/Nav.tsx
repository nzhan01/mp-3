import { Link } from "react-router-dom";
import {styled} from "styled-components";

/*const StyledHeader = styled.header`

    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const Title = styled.h2`
    padding: 0.5rem;
    margin: 1rem;
    
`;*/

const StyledLink = styled(Link)`
    padding:0.25rem;
    margin: 0.25rem;
    text-decoration: none;
    color: black;
    font-weight: bold;
    
`;
const StyledNav = styled.nav`
    width: 30%;
    height: 100%;    

    @media screen and (max-width: 900px)
    {
        width: 100%;
        
    }
`;

const StyledUl = styled.ul` 
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: #3A5A40;
    font-size: calc(2px + 2vw);
    text-align: center;
    list-style: none;
    padding-left: 0;
    
    @media screen and (max-width: 900px){
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: #3A5A40;
        list-style: none;
        padding-left: 0;
        
    }
`;

const StyledLi = styled.li`
    font-size: calc(3px + 2vw);
    width: 80%;
    background-color: #a3b18aff;
    padding: 2vh 0;
    margin: 5vh auto;
    border-radius: 49%;
    
    @media screen and (max-width: 900px){
        font-size: calc(1px + 1.5vw);
        background-color:#a3b18aff;
        padding: 1% .5%;
        margin: 1% .5%;
        width: auto;
    }
`;






export default function Nav(){

    return(

                <StyledNav>
                    <StyledUl>
                        <StyledLi><StyledLink to={`/`}>Home</StyledLink></StyledLi>
                        <StyledLi><StyledLink to={`/Education`}>Education</StyledLink></StyledLi>
                        <StyledLi><StyledLink to={`/Employment`}>Employment</StyledLink></StyledLi>
                        <StyledLi><StyledLink to={`/Projects`}>Projects</StyledLink></StyledLi>
                        <StyledLi><StyledLink to={`/References`}>References</StyledLink></StyledLi>
                        <StyledLi><StyledLink to={`/Achievements`}>Achievements</StyledLink></StyledLi>

                    </StyledUl>

                </StyledNav>

    );
}