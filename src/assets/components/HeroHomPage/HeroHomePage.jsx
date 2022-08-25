import styled from "styled-components"
import Button from "../styled/Button/Button";
import Content from "../styled/Content"
import TextComponent from "../styled/TextComponent";
import Img from "../styled/Img/Img";
import HeroImg from "../../Images/HeroImg.png"
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

const ContentEl = styled(Content)``;

const TextItem = styled.div`
@media(max-width:1070px){
    margin: 0 auto;
    width: 81%;
    margin-bottom: 50px;
}
`;

const HeroEl = styled.div`
display:grid;
grid-template-columns:repeat(2,1fr);
position:relative;
width:100%;

@media(max-width:1070px){
    grid-template-columns:1fr;
}
`;

const HeroImage = styled(Img)`
    backdrop-filter: blur(1.10599px);
    width:100%;
 
    @media(max-width:1070px){
        width:81%;
        margin:0 auto;
        display:flex;
    }

`;

const ImgItem = styled.div``;

const Imgwrap = styled.div``;

export default function HeroHomePage() {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])

    return (
        <ContentEl>
            <HeroEl data-aos="fade-up">
                <TextItem>
                    <TextComponent />
                    <Button button="Request Consultant" />
                </TextItem>
                <ImgItem>
                    <Imgwrap>
                        <HeroImage src={HeroImg} />
                    </Imgwrap>
                </ImgItem>
            </HeroEl>
        </ContentEl>
    )
}
