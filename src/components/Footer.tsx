import {styled} from "styled-components";

const FooterStyles = styled.div`
    background-color: #344E41;
    color: bisque;
    padding: 1vh 1vw;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;
    max-width: 100%;
    height: 20%;

    @media screen and (max-width: 900px) {
        align-items: center;
        padding: 2vh 2vw;
        margin : auto;
    }
`;






export default function Footer() {
    return (
        <FooterStyles>
            <p>All Rights Reserved by Nicholas Zhang <a href="../credits/credits.html"> Credits</a> &copy;</p>
        </FooterStyles>

    )
}