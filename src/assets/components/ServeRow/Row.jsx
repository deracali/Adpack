import styled from "styled-components";
import Content from "../styled/Content";
import Paragraphs from "../styled/Paragraphs";
import Img from "../styled/Img/Img";
import { useState } from "react";
import Tertairy from "../styled/Tertairyh3";
import SubHeading from "../styled/Subheading";
import PrimaryText from "../styled/PrimaryText";

const ContentEl = styled(Content)``;

const RowItem = styled.div``;

const BoxWrap = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    column-gap: 3%;

    @media(max-width:1078px){
        grid-template-columns:repeat(2,1fr);
    }
    @media(max-width:700px){
        grid-template-columns:1fr;
    }
`;

const BoxItem = styled.div`
    background: white;
    box-shadow: ${(p) => p.active ? "0px 0px 0px 4px rgb(245 241 241 / 37%)" : ""};
    padding: 60px 15px 43px 15px;
   
       @media(max-width:700px){
        padding-top:0px;
    }
`;


const Icon = styled.div`
    width: 25%;
    margin: 0.5rem auto;
`;

const TextItem = styled.div`
text-align:center;
`;

const SubText = styled(Paragraphs)`
    font-weight:700;
    width: 137px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`;

const Text = styled(Paragraphs)`
font-weight:400;
`;

export default function Row({ headertext, subheading, image1, image2, image3, subtext1, text1, subtext2, text2, subtext3, text3 }) {
    const [Active1, setActive1] = useState(false)
    const [Active2, setActive2] = useState(false)
    const [Active3, setActive3] = useState(false)

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (

        <ContentEl margin="182px 0 80px 0" marginSm>
            <RowItem data-aos="fade-down">
                <PrimaryText alignSm>
                    <Tertairy>{headertext}</Tertairy>
                    <SubHeading widthSm width="100%" margin="1.5rem 0">{subheading}</SubHeading>
                </PrimaryText>
                <BoxWrap>
                    <BoxItem active={Active1}
                        onMouseEnter={() => {
                            setActive1(true);
                        }}
                        onMouseLeave={() => {
                            setActive1(false);
                        }}>
                        <Icon>
                            <Img width="86.4px" height="100px" src={image1} />
                        </Icon>
                        <TextItem>
                            <SubText>
                                {subtext1}
                            </SubText>
                            <Text>
                                {text1}
                            </Text>
                        </TextItem>
                    </BoxItem>
                    <BoxItem active={Active2}
                        onMouseEnter={() => {
                            setActive2(true);
                        }}
                        onMouseLeave={() => {
                            setActive2(false);
                        }}>
                        <Icon>
                            <Img width="86.4px" height="100px" src={image2} />
                        </Icon>
                        <TextItem>
                            <SubText>
                                {subtext2}
                            </SubText>
                            <Text>
                                {text2}
                            </Text>
                        </TextItem>
                    </BoxItem>
                    <BoxItem active={Active3}
                        onMouseEnter={() => {
                            setActive3(true);
                        }}
                        onMouseLeave={() => {
                            setActive3(false);
                        }}>
                        <Icon>
                            <Img width="86.4px" height="100px" src={image3} />
                        </Icon>
                        <TextItem>
                            <SubText>
                                {subtext3}
                            </SubText>
                            <Text>
                                {text3}
                            </Text>
                        </TextItem>
                    </BoxItem>
                </BoxWrap>
            </RowItem>
        </ContentEl>
    )
}
