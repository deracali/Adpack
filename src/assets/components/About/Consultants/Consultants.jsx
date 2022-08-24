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
    grid-template-columns: repeat(3,1fr);
`;

const BoxItem = styled.div`
    background: white;
    box-shadow: ${(p) => p.active ? "0px 0px 0px 4px rgb(245 241 241 / 37%)" : ""};
    padding: 60px 15px 43px 15px;
   
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

export default function Consultants({ image1, image2, image3 }) {

    return (
        <ContentEl>
            <RowItem>
                <PrimaryText align>
                    <Tertairy size="24px" color="#00359B" >Our Consultants</Tertairy>
                    <Tertairy width>Meet our Professional Consultants</Tertairy>
                </PrimaryText>
                <BoxWrap>
                    <BoxItem>
                        <ImgWrap>
                            <Img width="396px" height="415px" src={image1} />
                        </ImgWrap>
                        <TextItem>
                            <Name>
                                Wade Warren
                            </Name>
                            <Position>
                                Founder & CEO
                            </Position>
                        </TextItem>
                    </BoxItem>
                    <BoxItem>
                        <ImgWrap>
                            <Img width="396px" height="415px" src={image2} />
                        </ImgWrap>
                        <TextItem>
                            <Name>
                                Leslie Alexander
                            </Name>
                            <Position>
                                Managing Director
                            </Position>
                        </TextItem>
                    </BoxItem>
                    <BoxItem>
                        <ImgWrap>
                            <Img width="396px" height="415px" src={image3} />
                        </ImgWrap>
                        <TextItem>
                            <Name>
                                Cameron Williamson
                            </Name>
                            <Position>
                                Senior Consultant
                            </Position>
                        </TextItem>
                    </BoxItem>
                </BoxWrap>
            </RowItem>
        </ContentEl>
    )
}
