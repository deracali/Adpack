
import styled from "styled-components"
import Colors from "../../Colors";
import ButtonEl from "../styled/ButtonStyled/ButtonStyled";
import Logo from "../styled/Logo/Logo";
import Paragraphs from "../styled/Paragraphs";
import Img from "../styled/Img/Img";
import { useNavigate } from "react-router-dom";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import HeroImg from "../../Images/ServicesImg.png"
import AOS from "aos"
import "aos/dist/aos.css"
import "./unOrderedList.css"


const TopMenuEl = styled.div`
            margin-top:10px
            `;

const LogoStyled = styled.p`
    font-weight:900;
    font-size:32px;
    line-height:39px;
    color:${Colors.White};

        @media(max-width:1070px){
        display:none;
            }
        `;

const LogoNav = styled.p`
    font-weight:900;
    font-size:32px;
    line-height:39px;
    color:${Colors.White};
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
                color:${Colors.White};
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
                    padding:30px 0;
                    }

                @media(max-width:645px){
                    padding:0 30px;
                }
                @media(max-width:438px){
                    padding:34px 30px;
                }
            `;



const MobileIcon = styled.div`
            display:none;
            font-size:44px;
            z-index:10;
            color:${Colors.White};

            @media(max-width:1070px){
                    display:block;
                    }
            `;


const NavLists = styled.li`
                color:${Colors.White};
                cursor:pointer;
                font-size: clamp(1.2rem,2vw,1rem);
                :hover{
                    color:${Colors.White};
                }
            `;


const ButtonStyled = styled(ButtonEl)``;

const BannerItem = styled.div`
    background-position: top;
    background-repeat: no-repeat;
    background-size:100%;
    height:480px;
    margin-top:20px;

    @media(max-width:1070px){
            background-size:160%;
            height:200px;
                    }
    `;


export default function TopMenuNav({ icon1, icon2 }) {
    const [icon, setIcon] = useState(false);
    const [IsOpened, setIsOpened] = useState(false);
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
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
                        <LogoNav>ADPACK</LogoNav>
                        <LogoNav> MANAGEMENT</LogoNav>
                    </View>
                    <LogoStyled>Adpack</LogoStyled>
                    <ul className={IsOpened ? "NavShow2" : "Olist2"}>
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
                        <ButtonStyled btnBgColor btnColor>Request Consultant</ButtonStyled>
                    </ul>
                    <MobileIcon
                        onClick={() => {
                            setIcon((prev) => !prev)
                            setIsOpened((previous) => !previous)
                        }}>
                        {icon ? <FaTimes /> : <AiOutlineMenuUnfold />}
                    </MobileIcon>
                </Nav>
                <BannerItem style={{ backgroundImage: `url(${HeroImg})` }}>
                </BannerItem>

            </TopMenuEl>
        </>
    )
}



