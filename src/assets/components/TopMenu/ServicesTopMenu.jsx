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

const ImgEl = styled(Img)`
@media(max-width:1130px){
    width:9%;
}
`;



const ButtonStyled = styled(ButtonEl)``;

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;

     @media(max-width:645px){
        padding:0 30px;
    }
`;

const NavList = styled.ul`
    display: flex;
    gap: 91px;
    justify-content: center;
    align-items: center;


    @media(max-width:990px){
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:flex-start;
        gap:70px;
        font-size:24px;
        position:fixed;
        top:0;
        right:-1000px;
        height:100vh;
        width:100vw;
        background:${Colors.Primary};
        box-shadow:0 40px 60px rgba(0,0,0,0.1);
        padding: 100px 0 0 10px;
        z-index:10;
    }
`;
const NavLists = styled.li`
    color:${Colors.White};
    cursor:pointer;

     :hover{
        color:${Colors.Primary};
    }
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
                        <ImgEl width="19.5px" height="19.5px" src={icon1} /> <InfoText>(252) 555-0126</InfoText></Row>
                    <Row>
                        <ImgEl width="19.5px" height="19.5px" src={icon2} /> <InfoText>info@adpack.com</InfoText>
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
                        <ButtonStyled btnBgColor btnColor>Request Consultant</ButtonStyled>
                    </NavList>
                </Nav>
                <BannerItem style={{ backgroundImage: `url(${HeroImg})` }}>
                </BannerItem>
            </TopMenuEl>
        </>
    )
}
