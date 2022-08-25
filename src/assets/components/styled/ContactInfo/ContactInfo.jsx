import styled from "styled-components";
import Colors from "../../../Colors";
import Paragraphs from "../Paragraphs";
import Tertairy from "../Tertairyh3";
import Img from "../Img/Img";

const ContactItem = styled.div`
color:${Colors.White};
padding: 8px;
    border-radius: 2px;
`;

const Text = styled(Paragraphs)`
font-weight:400;
font-weight: 400;
    color: #ffffffd1;
    width: 403px;
`;

const ImgEl = styled(Img)`
@media(max-width:1130px){
    width:9%;
}
`;

const Info = styled.span`
display: flex;
    justify-content: flex-end;
    align-items: baseline;
    flex-direction:column;
`;

const Row = styled.span`
    color:${Colors.Primary};
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
`;

const InfoText = styled(Paragraphs)`
margin-left:10px;
color:#ffffffd1;
width:${(p) => (p.width ? "150px" : "")}
`;


export default function ContactInfo({ icon1, icon2, icon3 }) {
    return (
        <ContactItem>
            <Tertairy>Contact Information</Tertairy>
            <Text margin="4.5rem 0 1rem 0 ">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</Text>
            <Info>
                <Row>
                    <Img width="19.5px" height="19.5px" src={icon1} /> <InfoText>enquiry@adpackmgtconsults.com</InfoText></Row>
                <Row>
                    <ImgEl width="19.5px" height="19.5px" src={icon2} /> <InfoText width>9A Shafi Sule St,
                        Lekki Phase 1, Lagos</InfoText>
                </Row>
                <Row>
                    <ImgEl width="19.5px" height="19.5px" src={icon3} /> <InfoText>+234 (0) 803 340 1429</InfoText>
                </Row>
            </Info>
        </ContactItem>
    )
}
