import styled from "styled-components"
import Button from "../styled/Button/Button";
import Content from "../styled/Content"
import TextComponent from "../styled/TextComponent";
import Img from "../styled/Img/Img";
import HeroImg1 from "../../Images/homePage-img1.png"
import HeroImg2 from "../../Images/homePage-img2.png"

const ContentEl = styled(Content)``;

const TextItem = styled.div``;

const HeroEl = styled.div`
display:grid;
grid-template-columns:repeat(2,1fr);
position:relative;
`;

const HeroImage1 = styled(Img)`
position: absolute;
left: 57%;
    top: -30%;
    object-fit: contain;
    backdrop-filter: blur(1.10599px);
`;

const HeroImage2 = styled(Img)`
position: absolute;
    left: 62%;
    top: 40%;
    object-fit:contain;
    backdrop-filter: blur(1.09803px);
`;


const ImgItem = styled.div``;

const Imgwrap = styled.div``;

export default function HeroHomePage() {
    return (
        <ContentEl>
            <HeroEl>
                <TextItem>
                    <TextComponent />
                    <Button button="Request Consultant" />
                </TextItem>
                <ImgItem>
                    <Imgwrap>
                        <HeroImage1 width="40%" height="100%" src={HeroImg1} alt="Man on a video call meeting" />
                        <HeroImage2 width="40%" height="100%" src={HeroImg2} alt="Two ladies having a chat" />
                    </Imgwrap>
                </ImgItem>
            </HeroEl>
        </ContentEl>
    )
}
