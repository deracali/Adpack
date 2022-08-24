import styled from "styled-components";
import PrimaryText from "../../styled/PrimaryText";
import Tertairy from "../../styled/Tertairyh3";
import Content from "../../styled/Content";
import Img from "../../styled/Img/Img";

const ContentEl = styled(Content)``;

const Wrap = styled.div``;

const Row = styled.div`
display: grid;
    grid-template-columns: repeat(6,1fr);
    column-gap: 5%;
    margin-top:70px;
`;

export default function Trusted({ image1, image2, image3, image4, image5, image6 }) {
    return (
        <ContentEl>
            <Wrap>
                <PrimaryText>
                    <Tertairy size="24px" color="#00359B" >COMPANIES THAT TRUST US</Tertairy>
                </PrimaryText>
                <Row>
                    <Img width="137px" height="115px" src={image1} />
                    <Img width="137px" height="115px" src={image2} />
                    <Img width="137px" height="115px" src={image3} />
                    <Img width="137px" height="115px" src={image4} />
                    <Img width="137px" height="115px" src={image5} />
                    <Img width="137px" height="115px" src={image6} />
                </Row>
            </Wrap>
        </ContentEl>
    )
}
