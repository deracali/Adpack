import styled from "styled-components";
import Img from "../styled/Img/Img";
import Content from "../styled/Content";
import Box from "../styled/Box/Box";

const ContentEl = styled(Content)``;

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 9%;
    position:relative;
    align-items:center;

       @media(max-width:1118px){
      grid-template-columns: 1fr;
    }
`;


const ImgDots = styled(Img)`
    position: absolute;
    left: ${(p) => (p.left ? p.left : "388px")};
    top:${(p) => (p.top ? p.top : "-76px")};
    z-index: -1;

  
`;

const ImgItem = styled.div`
  @media(max-width:1118px){
      width:100%;
    }

`;



export default function Founder({ image1, image2 }) {
    return (
        <ContentEl margin="150px 0 150px 0">
            <Wrapper>
                <ImgItem>
                    <Img src={image1} />
                    <ImgDots left="-72px" top="315px" width="152px" height="268px" src={image2} />
                </ImgItem>
                <Box />
            </Wrapper>
        </ContentEl>
    )
}
