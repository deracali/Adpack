import styled from "styled-components";
import Img from "../styled/Img/Img";
import Content from "../styled/Content";
import Button from "../styled/Button/Button";
import Tertairy from "../styled/Tertairyh3";
import TextPara from "../styled/TextPara";
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

const ContentEl = styled(Content)``;

const Wrapper = styled.div`
            display: grid;
            grid-template-columns: 464px 461px;
            column-gap: 5%;
            position:relative;
            align-items:center;

            @media(max-width:1130px){
        column-gap:6%;
        }

        @media(max-width:1118px){
            grid-template-columns: 480px;
            display:flex;
            flex-direction:column;
            }
        
        `;

const ImgStyle = styled(Img)`
            position: absolute;
            left:${(p) => (p.left ? p.left : "-8%")};
            top:${(p) => (p.top ? p.top : "7.8rem")};
            z-index: -1;

            @media(max-width:1130px){
                width:25%;
            }

            @media(max-width:1118px){
            display:none;
            }
        `;


const ImgItem = styled.div`
        width:80%;
        `;

const TextItem = styled.div`
        width:82%;
        margin:20px auto 0;
        `;


export default function Impact({ image1, image2, image3 }) {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
        <ContentEl>
            <Wrapper data-aos="fade-right">
                <ImgItem>
                    <Img src={image1} />
                    <ImgStyle width="21.6rem" height="29.7rem" src={image2} />
                    <ImgStyle left="16.7rem" top="-4.6rem" width="9.5rem" height="16.5rem" src={image3} />
                </ImgItem>
                <TextItem>
                    <Tertairy weight="400" width="31.2rem">Over 35 Years Of  Great Impact In Industrial & SME Sector</Tertairy>
                    <TextPara text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis ridiculus est nisl donec. Risus tempus, elit turpis quam quam. Morbi libero varius non sed non vulputate." />
                    <Button button="Request Consultant" />
                </TextItem>
            </Wrapper>
        </ContentEl>
    )
}
