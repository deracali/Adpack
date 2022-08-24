import styled from "styled-components"
import Colors from "../../Colors";
import Logo from "./Logo/Logo";
import Paragraphs from "../styled/Paragraphs";
import Img from "./Img/Img";
import { useNavigate } from "react-router-dom";

const NavMenuEl = styled.div`
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
    color:${Colors.Primary2};
    cursor:pointer;
`;

export default function FooterStyled({ icon1, icon2, icon3, icon4 }) {

    const nav = useNavigate()
    return (
        <>
            <NavMenuEl>
                <Nav>
                    <Logo text="Adpack" />
                    <NavList>
                        <NavLists onClick={() => nav("/Services")}>
                            Services
                        </NavLists>
                        <NavLists onClick={() => nav("/About")}>
                            About
                        </NavLists>
                        <NavLists onClick={() => nav("/Contact")}>
                            Contact
                        </NavLists>
                    </NavList>
                    <Info>
                        <Row>
                            <Img width="19.5px" height="19.5px" src={icon1} /> </Row>
                        <Row>
                            <Img width="19.5px" height="19.5px" src={icon2} />
                        </Row>
                        <Row>
                            <Img width="19.5px" height="19.5px" src={icon3} />
                        </Row>
                        <Row>
                            <Img width="19.5px" height="19.5px" src={icon4} />
                        </Row>

                    </Info>
                </Nav>

            </NavMenuEl>
        </>
    )
}
