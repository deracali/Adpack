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
`;

const BoxItem = styled.div`
    background: white;
    box-shadow: ${(p) => p.active ? "0px 0px 0px 4px rgb(245 241 241 / 37%)" : ""};
    padding: 60px 15px 43px 15px;
   
`;

const ImgWrap = styled.div`
margin-top:10px;
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

export default function Projects({ image1, image2, image3, image4, image5, image6 }) {

    return (
        <ContentEl>
            <RowItem>
                <PrimaryText align>
                    <Tertairy size="64px" weight="500">Past projects.</Tertairy>
                </PrimaryText>
                <BoxWrap>
                    <BoxItem>
                        <ImgWrap>
                            <Img width="35.6rem" height="152px" objFit="cover" src={image1} />
                        </ImgWrap>
                        <TextItem>
                            <Name>
                                Independent Attestation Group, LLC
                            </Name>
                            <Position>
                                We believe building a relationship with our clients enable us better understand their business and the challenges they face.
                            </Position>
                        </TextItem>
                    </BoxItem>
                    <BoxItem>
                        <ImgWrap>
                            <Img width="35.6rem" height="152px" objFit="cover" src={image2} />
                        </ImgWrap>
                        <TextItem>
                            <Name>
                                Boeing 737-700 N240AT
                            </Name>
                            <Position>
                                We believe building a relationship with our clients enable us better understand their business and the challenges they face.
                            </Position>
                        </TextItem>
                    </BoxItem>
                    <BoxItem>
                        <ImgWrap>
                            <Img width="35.6rem" height="152px" objFit="cover" src={image3} />
                        </ImgWrap>
                        <TextItem>
                            <Name>
                                Pioneering Spirit Cargo Ship
                            </Name>
                            <Position>
                                We believe building a relationship with our clients enable us better understand their business and the challenges they face.
                            </Position>
                        </TextItem>
                    </BoxItem>
                    <BoxItem>
                        <ImgWrap>
                            <Img width="35.6rem" height="152px" objFit="cover" src={image4} />
                        </ImgWrap>
                        <TextItem>
                            <Name>
                                AgustaWestland AW139 VF-145
                            </Name>
                            <Position>
                                We believe building a relationship with our clients enable us better understand their business and the challenges they face.
                            </Position>
                        </TextItem>
                    </BoxItem>
                    <BoxItem>
                        <ImgWrap>
                            <Img width="35.6rem" height="152px" objFit="cover" src={image5} />
                        </ImgWrap>
                        <TextItem>
                            <Name>
                                Independent Attestation Group, LLC
                            </Name>
                            <Position>
                                We believe building a relationship with our clients enable us better understand their business and the challenges they face.
                            </Position>
                        </TextItem>
                    </BoxItem>
                    <BoxItem>
                        <ImgWrap>
                            <Img width="35.6rem" height="152px" objFit="cover" src={image6} />
                        </ImgWrap>
                        <TextItem>
                            <Name>
                                Boeing 737-700 N240AT
                            </Name>
                            <Position>
                                We believe building a relationship with our clients enable us better understand their business and the challenges they face.
                            </Position>
                        </TextItem>
                    </BoxItem>
                </BoxWrap>
            </RowItem>
        </ContentEl>
    )
}
