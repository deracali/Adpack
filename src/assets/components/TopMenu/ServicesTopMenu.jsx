import styled from "styled-components"
import Colors from "../../Colors";
import Button from "../styled/Button/Button";
import ButtonEl from "../styled/ButtonStyled/ButtonStyled";
import Paragraphs from "../styled/Paragraphs";
import Img from "../styled/Img/Img";
import { useNavigate } from "react-router-dom";
import HeroImg from "../../Images/ServicesImg.png"



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
    color:${Colors.White};
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
`;

const InfoText = styled(Paragraphs)`
margin-left:10px;
`;

const Logo = styled(Paragraphs)`
font-weight:900;
font-size:32px;
line-height:39px;
color:${Colors.White};

`;

const ButtonStyled = styled(ButtonEl)``;

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
    color:${Colors.White};
    cursor:pointer;
`;

const BannerItem = styled.div`
  background-position: top;
  background-repeat: no-repeat;
  background-size:100%;
  height:480px;
  margin-top:20px;
`;


export default function ServicesTopMenu({ icon1, icon2 }) {

    const nav = useNavigate()
    return (
        <>
            <TopMenuEl>
                <Info>
                    <Row>
                        <Img width="19.5px" height="19.5px" src={icon1} /> <InfoText>(252) 555-0126</InfoText></Row>
                    <Row>
                        <Img width="19.5px" height="19.5px" src={icon2} /> <InfoText>info@adpack.com</InfoText>
                    </Row>
                </Info>
                <Nav>
                    <Logo>Adpack</Logo>
                    <NavList>
                        <NavLists onClick={() => nav("/")}>
                            Home
                        </NavLists>
                        <NavLists>
                            Our work
                        </NavLists>
                        <NavLists onClick={() => nav("/About")}>
                            About us
                        </NavLists>
                        <NavLists onClick={() => nav("/Contact")}>
                            Contact us
                        </NavLists>
                    </NavList>
                    <ButtonStyled btnBgColor btnColor>Request Consultant</ButtonStyled>
                </Nav>
                <BannerItem style={{ backgroundImage: `url(${HeroImg})` }}>

                </BannerItem>
            </TopMenuEl>
        </>
    )
}
