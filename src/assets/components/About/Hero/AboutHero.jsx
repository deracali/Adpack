import styled from "styled-components";
import Img from "../../styled/Img/Img";
import Content from "../../styled/Content";
import Tertairy from "../../styled/Tertairyh3";
import TextPara from "../../styled/TextPara";
import PrimaryText from "../../styled/PrimaryText";
import SubHeading from "../../styled/Subheading";


const ContentEl = styled(Content)``;

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 464px 461px;
    column-gap: 15%;
    position:relative;
    align-items:center;
    margin-top:60px;
   
`;

const ImgStyle = styled(Img)`
    position: absolute;
    left:${(p) => (p.left ? p.left : "-8%")};
    top:${(p) => (p.top ? p.top : "125px")};
    z-index: -1;
`;


const ImgItem = styled.div``;

const TextItem = styled.div``;


export default function AboutHero({ image1, image2 }) {
    return (
        <ContentEl margin="50px 0 80px 0" >
            <PrimaryText>
                <Tertairy weight="400" color="#00359B" >About US</Tertairy>
                <Tertairy weight="700">Democratizing business automation</Tertairy>
                <SubHeading margin="0.5rem 0">Our emphasis is on developing a strong partnership with our SME business clients.</SubHeading>
            </PrimaryText>
            <Wrapper>
                <TextItem>
                    <Tertairy size="24px">Who we are</Tertairy>
                    <TextPara text="Adpack management was established to provide consulting solutions to the mini-challenges small and medium sized businesses deal with as they manage their daily operations and growth initiatives to optimize business performance and profitability." />
                    <TextPara text="Our emphasis is on developing a strong partnership with our SME business clients. We believe building a relationship with our clients enable us better understand their business and the challenges they face. " />
                    <TextPara text="By understanding our clients business and their challenges, we are able to provide customized innovative consulting solutions to the issues our clients face, such matters like funding, missionary and equipment as well as technical inputs. " />
                    <TextPara text="We also work with the public service sector in developing projects that empower our local communities and create employment in the real sector of the economy." />
                </TextItem>
                <ImgItem>
                    <Img objFit="cover" width="454px" height="520px" src={image1} />
                    <ImgStyle width="396px" height="461px" left="50%" src={image2} />
                </ImgItem>
            </Wrapper>
        </ContentEl>
    )
}
