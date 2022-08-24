import styled from "styled-components"
import Colors from "../../Colors";
import Button from "../styled/Button/Button";
import Logo from "../styled/Logo/Logo";
import Paragraphs from "../styled/Paragraphs";
import Img from "../styled/Img/Img";
import { useNavigate } from "react-router-dom";

const TopMenuEl = styled.div`
margin-top:10px
`;

const Info = styled.span`
display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    gap:20px;
`;

const Row = styled.span`
    color:${Colors.Primary};
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
`;

const InfoText = styled(Paragraphs)`
margin-left:10px;
`;


const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const NavList = styled.ul`
    display: flex;
    gap: 50px;
    justify-content: center;
    align-items: center;
`;

const NavLists = styled(Paragraphs)`
    color:${Colors.BOLD};
    cursor:pointer;
`;

export default function TopMenuNav({ icon1, icon2 }) {

    const nav = useNavigate()
    return (
        <>
            <TopMenuEl>
                <Info>
                    <Row>
                        <Img width="19.5px" widthSm="19.5px" height="19.5px" src={icon1} /> <InfoText>(252) 555-0126</InfoText></Row>
                    <Row>
                        <Img width="19.5px" height="19.5px" src={icon2} /> <InfoText>info@adpack.com</InfoText>
                    </Row>
                </Info>
                <Nav>
                    <Logo text="Adpack" />
                    <NavList>
                        <NavLists onClick={() => nav("/")}>
                            Home
                        </NavLists>
                        <NavLists onClick={() => nav("/Services")}>
                            Our work
                        </NavLists>
                        <NavLists onClick={() => nav("/About")}>
                            About us
                        </NavLists>
                        <NavLists onClick={() => nav("/Contact")}>
                            Contact us
                        </NavLists>
                    </NavList>
                    <Button button="Request Consultant" />
                </Nav>
            </TopMenuEl>
        </>
    )
}
