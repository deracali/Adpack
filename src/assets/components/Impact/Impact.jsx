import styled from "styled-components";
import Img from "../styled/Img/Img";
import Content from "../styled/Content";
import Button from "../styled/Button/Button";
import Tertairy from "../styled/Tertairyh3";
import TextPara from "../styled/TextPara";

const ContentEl = styled(Content)``;

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 464px 461px;
    column-gap: 15%;
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
    top:${(p) => (p.top ? p.top : "125px")};
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
    return (
        <ContentEl>
            <Wrapper>
                <ImgItem>
                    <Img src={image1} />
                    <ImgStyle width="347px" height="658px" src={image2} />
                    <ImgStyle left="388px" top="-76px" width="152px" height="268px" src={image3} />
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
