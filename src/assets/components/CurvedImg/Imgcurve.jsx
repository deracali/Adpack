import styled from "styled-components";
import Img from "../styled/Img/Img";
import Content from "../styled/Content";
import Paragraphs from "../styled/Paragraphs";

const ContentEl = styled(Content)``;

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 9%;
    position:relative;
    align-items:center;

    @media(max-width:1130px){
        column-gap:3%;
    }
     @media(max-width:1118px){
        grid-template-columns: 1fr;
    }
`;

const Title = styled.h3`
font-weight:700;
font-size:40px;
`;

const Text = styled(Paragraphs)`
font-weight:400;

 @media(max-width:1118px){
       width: 50%;
    margin: 0 auto;
    margin-bottom: 50px;
    }

`;

const ImgDots = styled(Img)`
    position: absolute;
    left: ${(p) => (p.left ? p.left : "388px")};
    top:${(p) => (p.top ? p.top : "-76px")};
    z-index: -1;

     @media(max-width:1130px){
         width:13%;
         display:none;
    }
`;

const ImgItem = styled.div`
grid-column: ${(p) => (p.column ? "2" : "")};

  @media(max-width:1118px){
     grid-column: ${(p) => (p.column ? "1" : "")};
    }
`;

const TextItem = styled.div`
grid-row: ${(p) => (p.row ? "2" : "")};
  
@media(max-width:1118px){
     grid-row: ${(p) => (p.row ? "4" : "")};
     text-align:center;
    }
`;


export default function ImgCurve({ image1, image2, image3, image4 }) {
    return (
        <ContentEl>
            <Wrapper>
                <ImgItem>
                    <Img src={image1} />
                    <ImgDots width="152px" height="268px" src={image2} />
                </ImgItem>
                <TextItem>
                    <Title>
                        Our Vision
                    </Title>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel pellentesque eu facilisis arcu. Risus elit, eget vel sodales eu. Urna, cursus enim, pretium magnis amet tempor.
                    </Text>
                </TextItem>
                <ImgItem column>
                    <Img src={image3} />
                    <ImgDots width="152px" height="268px" left="90%" top="360px" src={image4} />
                </ImgItem>
                <TextItem row>
                    <Title>
                        Our Mission
                    </Title>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel pellentesque eu facilisis arcu. Risus elit, eget vel sodales eu. Urna, cursus enim, pretium magnis amet tempor.
                    </Text>
                </TextItem>
            </Wrapper>
        </ContentEl>
    )
}
