import Link from "next/link";
import styled from "styled-components";


const HeaderStyling = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    background: linear-gradient(to bottom, #fdb9ff 20%, #fafafa 100%);

`;

const StyledH2 = styled.h2`
    font-family: Arial, sans-serif;
    font-size: 225%;
    font-weight: 700;
    width: 100%;
    padding: 1.5% 1%;
    color: #171717;
    @media screen and (max-width: 800px) {
        
        font-size: 225%;
        
    }
`;

const Nav = styled.nav`
    padding: 0.5%;
    margin: 1%;
    width: 100%;
    text-align: right;
`;

const NavLink = styled(Link)`
    padding: 1%;
    margin: 1%;
    font-size: 125%;
    font-weight: bold;
    font-family: Arial, sans-serif;
    color: #171717;

    @media screen and (max-width: 800px) {

        font-size: 110%;
        margin: 1% 3%;

    }

    &:hover {
        text-decoration: underline;
    }
`;

export default function Header() {
    return (
        <HeaderStyling>
            <StyledH2>Comparison App</StyledH2>

            <Nav>
                <NavLink href="/">Home</NavLink>
                <NavLink href="/Leaderboard">Leaderboard</NavLink>
            </Nav>
        </HeaderStyling>
    );
}