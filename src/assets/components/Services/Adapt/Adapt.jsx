import styled from "styled-components";
import Content from "../../styled/Content";
import Paragraphs from "../../styled/Paragraphs";
import Img from "../../styled/Img/Img";
import Tertairy from "../../styled/Tertairyh3";
import PrimaryText from "../../styled/PrimaryText";

const ContentEl = styled(Content)``;

const RowItem = styled.div``;

const BoxWrap = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);

    @media(max-width:600px){
        grid-template-columns: 1fr;  
    }
`;

const BoxItem = styled.div`
    background: white;
    box-shadow: ${(p) => p.active ? "0px 0px 0px 4px rgb(245 241 241 / 37%)" : ""};
    padding: 60px 15px 43px 15px;
   
    //  @media(max-width:1180px){
    //   display:flex;
    //   flex-direction:column;
    //   justify-content:center;
    //   align-items:center;
    //   margin:0 auto;
    //   width:57%;
    // }
`;

const ImgWrap = styled.div`

`;

const TextItem = styled.div`

`;

const Name = styled(Paragraphs)`
    font-weight:700;
    margin:0.5rem 0 0; 
`;

const Position = styled(Paragraphs)`
font-weight:400;
margin:0.1rem 0; 
`;

export default function Adapt({ image1, image2, image3 }) {

    return (
        <ContentEl margin="250px 0 80px 0">
            <RowItem>
                <PrimaryText align alignSm>
                    <Tertairy size="64px" weight="500" color="#00359B" >More than</Tertairy>
                    <Tertairy size="64px" weight="500" mgLeft="60px">getting the project done.</Tertairy>
                    <Tertairy size="64px" weight="500" mgLeft="160px" mgLeftSm="9px">We adapt.</Tertairy>
                </PrimaryText>
                <BoxWrap>
                    <BoxItem>
                        <ImgWrap>
                            <Img width="35.6rem" height="152px" src={image1} />
                        </ImgWrap>
                        <TextItem>
                            <Position>
                                We believe building a relationship with our clients enable us better understand their business and the challenges they face.
                            </Position>
                            <Name>
                                Our Values
                            </Name>
                        </TextItem>
                    </BoxItem>
                    <BoxItem>
                        <ImgWrap>
                            <Img width="35.6rem" height="152px" src={image2} />
                        </ImgWrap>
                        <TextItem>
                            <Position>
                                We believe building a relationship with our clients enable us better understand their business and the challenges they face.
                            </Position>
                            <Name>
                                How it work
                            </Name>
                        </TextItem>
                    </BoxItem>

                </BoxWrap>
            </RowItem>
        </ContentEl>
    )
}
