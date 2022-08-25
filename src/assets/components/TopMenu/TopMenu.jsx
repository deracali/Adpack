import styled from "styled-components"
import Colors from "../../Colors";
import Button from "../styled/Button/Button";
import Logo from "../styled/Logo/Logo";
import Paragraphs from "../styled/Paragraphs";
import Img from "../styled/Img/Img";
import { useNavigate } from "react-router-dom";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";

const TopMenuEl = styled.div`
        margin-top:10px
        `;

const LogoStyled = styled.p`
font-weight:900;
font-size:32px;
line-height:39px;
color:${Colors.Primary};

    @media(max-width:1070px){
    display:none;
        }
    `;

const Info = styled.span`
            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
            gap:20px;

            @media(max-width:1070px){
                display:none;
            }
        `;

const View = styled.div`
        display:none;

        @media(max-width:1070px){
        display:block;
        }
        `;

const ImgEl = styled(Img)`
        @media(max-width:1130px){
            width:9%;
        }
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

const ButtonItem = styled.div``;

const Nav = styled.nav`
            display: flex;
            justify-content: space-between;
            align-items: center;

            @media(max-width:1070px){
                display:flex;
                justify-content: space-around;
                gap:26%;
                }

            @media(max-width:645px){
                padding:0 30px;
            }
        `;

const MobileIcon = styled.div`
        display:none;
        font-size:44px;

         @media(max-width:1070px){
                display:block;
                }
        `;

const NavList = styled.ul`
            display: flex;
            gap: 91px;
            justify-content: center;
            align-items: center;


            @media(max-width:1070px){
                display:flex;
                flex-direction:column;
                align-items:center;
                justify-content:flex-start;
                gap:70px;
                font-size:24px;
                position:fixed;
                top:0;
                right:${(p) => (p.isOpened ? "0px" : "-1000px")};
                height:100vh;
                width:100vw;
                background:${Colors.White};
                box-shadow:0 40px 60px rgba(0,0,0,0.1);
                padding: 100px 0 0 10px;
                z-index:10;
            }
        `;

const NavLists = styled.li`
            color:${Colors.BOLD};
            cursor:pointer;
            font-size: clamp(1rem,2vw,1.2rem);
            :hover{
                color:${Colors.Primary};
            }
        `;

export default function TopMenuNav({ icon1, icon2 }) {
    const [icon, setIcon] = useState(false);
    const [IsOpened, setIsOpened] = useState(false);
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
                    <View>
                        <Logo text="ADPACK" />
                        <Logo text="MANAGEMENT" />
                    </View>
                    <LogoStyled>Adpack</LogoStyled>
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
                        <ButtonItem>
                            <Button btnBgColor="#fff" button="Request Consultant" />
                        </ButtonItem>
                    </NavList>
                    <MobileIcon onClick={() => {
                        setIcon((prev) => !prev)
                        // setIsOpened((previous) => !previous)
                    }}>
                        {icon ? <FaTimes isOpened={IsOpened} onClick={() => setIsOpened(false)} /> : <AiOutlineMenuUnfold isOpened={IsOpened} onClick={() => setIsOpened(true)} />}
                    </MobileIcon>
                </Nav>
            </TopMenuEl>
        </>
    )
}
