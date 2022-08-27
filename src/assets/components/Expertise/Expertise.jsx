import styled from "styled-components";
import Content from "../styled/Content";
import Paragraphs from "../styled/Paragraphs";
import Img from "../styled/Img/Img";
import PrimaryText from "../styled/PrimaryText";
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

const ContentEl = styled(Content)``;

const RowItem = styled.div``;

const Tertairy = styled.h3`
    font-weight:700;
    font-size:40px;
    `;

const SubHeading = styled(Paragraphs)`
    width: 826px;`;

const BoxWrap = styled.div`
        display: grid;
        grid-template-columns: repeat(3,1fr);
        column-gap: 3%;
        row-gap:30px;
        margin-top:50px;

        @media(max-width:1000px){
        grid-template-columns: repeat(2,1fr);
        }

        @media(max-width:700px){
        grid-template-columns: 1fr;
        }
    `;

const BoxItem = styled.div`
    `;

const Boxitem = styled.div``;

const Icon = styled.div`
        width: 26%;
        margin: 0 auto;
    `;


const TextItem = styled.div`

    `;

const SubText = styled(Paragraphs)`
        display: flex;
        align-items: center;
        text-align: center;
        flex-direction: column;
        width: 100%;
        font-weight:700;
        margin:0 auto;
    `;

const Text = styled(Paragraphs)`
        font-weight:400;
        text-align:center;
        width:22.5rem;

    @media(max-width:1130px){
        width:100%;
    }
    `;

export default function Expertise({ headertext, subheading, image1, image2, image3, image4, image5, image6, subtext1, text1, subtext2, text2, subtext3, text3, subtext4, text4, subtext5, text5, subtext6, text6 }) {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
        <ContentEl>
            <RowItem data-aos="fade-left">
                <PrimaryText alignSm>
                    <Tertairy>{headertext}</Tertairy>
                    <SubHeading margin="1.5rem 0">{subheading}</SubHeading>
                </PrimaryText>
                <BoxWrap>
                    <BoxItem >
                        <Icon>
                            <Img width="86.4px" height="100px" src={image1} />
                        </Icon>
                        <TextItem>
                            <SubText margin="0.5rem 0">
                                {subtext1}
                            </SubText>
                            <Text>
                                {text1}
                            </Text>
                        </TextItem>
                    </BoxItem>
                    <BoxItem>
                        <Icon>
                            <Img width="86.4px" height="100px" src={image2} />
                        </Icon>
                        <TextItem>
                            <SubText margin="0.5rem 0">
                                {subtext2}
                            </SubText>
                            <Text>
                                {text2}
                            </Text>
                        </TextItem>
                    </BoxItem>
                    <BoxItem >
                        <Icon>
                            <Img width="86.4px" height="100px" src={image3} />
                        </Icon>
                        <TextItem>
                            <SubText margin="0.5rem 0">
                                {subtext3}
                            </SubText>
                            <Text>
                                {text3}
                            </Text>
                        </TextItem>
                    </BoxItem>
                    <BoxItem >
                        <Icon>
                            <Img width="86.4px" height="100px" src={image4} />
                        </Icon>
                        <TextItem>
                            <SubText margin="0.5rem 0">
                                {subtext4}
                            </SubText>
                            <Text>
                                {text4}
                            </Text>
                        </TextItem>
                    </BoxItem>
                    <BoxItem >
                        <Icon>
                            <Img width="86.4px" height="100px" src={image5} />
                        </Icon>
                        <TextItem>
                            <SubText margin="0.5rem 0">
                                {subtext5}
                            </SubText>
                            <Text>
                                {text5}
                            </Text>
                        </TextItem>
                    </BoxItem>
                    <BoxItem >
                        <Icon>
                            <Img width="86.4px" height="100px" src={image6} />
                        </Icon>
                        <TextItem>
                            <SubText margin="0.5rem 0">
                                {subtext6}
                            </SubText>
                            <Text>
                                {text6}
                            </Text>
                        </TextItem>
                    </BoxItem>
                </BoxWrap>
            </RowItem>
        </ContentEl>
    )
}
