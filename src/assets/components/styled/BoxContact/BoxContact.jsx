import styled from "styled-components";
import Colors from "../../../Colors";
import PrimaryText from "../PrimaryText";
import Tertairy from "../Tertairyh3";
import SubHeading from "../Subheading";
import ButtonEl from "../ButtonStyled/ButtonStyled";
import ContactInfo from "../ContactInfo/ContactInfo";
import MsgIconWhite from "../../../Images/MsgIconWhite.png";
import Marker from "../../../Images/Marker.png";
import phoneIconWhite from "../../../Images/phoneIconWhite.png";


const Wrap = styled.div`
color:${Colors.Primary2};
`;


const BoxContactEl = styled.div`
    width: 95%;
    height: 38.6rem;
    background: ${Colors.White};
    box-shadow: 0px 36px 108px 8px rgba(210, 210, 210, 0.07);
    margin: 0 auto;
    display:grid;
    grid-template-columns:1fr 1.6fr;
    margin-bottom:50px;
    padding:10px;

    @media(max-width:946px){
         grid-template-columns:1fr;
         height:100%;
    }
`;

const AddressWrap = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 64px 24px;
    gap: 8px;
    width: 28.3rem;
    height: 37.6rem;
    background: ${Colors.Primary};

    @media(max-width:946px){
        width:100%;
        justify-content:center;
    }
`;

const ButtonStyled = styled(ButtonEl)`
width:40%; 
margin:2.1rem;

@media(max-width:1130px){
    width:50%;
    margin:1.8rem;
}
`;

const InfoInputWrap = styled.div`
    width:88%;
    height: 400px;
    display: flex;
    flex-direction: column;
    margin: 100px 16px;
`;

const InfoInputItems = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 30px;
`;

const InfoInputItem = styled.div`
    margin: ${(p) => (p.margin ? "0 auto" : "")};
    width: ${(p) => (p.width ? p.width : "")};;
   display: flex;
    flex-direction: column;
    justify-content: center;
    `;

const Input = styled.input`
border: none;
    border-bottom: 1px solid ${Colors.Primary2};
    width: 100%;
    margin-top: 10px;
    width:${(p) => (p.width ? p.width : "")};
    max-width:${(p) => (p.Maxwidth ? p.Maxwidth : "")};
    margin-left:${(p) => (p.MarginLeft ? "" : "")};
     outline:none;
    ::placeholder{
        color:${Colors.Primary2};
    }
    `;

const SubjectWrap = styled.div`
    display:flex;
    justify-content:center;
    flex-direction:column;
    margin-bottom: ${(p) => (p.marginBottom ? "40px" : "")};
`;

const TextArea = styled.textarea`
    width:100%;
    max-width:37.9rem;
    border: none;
    border-bottom: 1px solid ${Colors.Primary2};
     outline:none;
`;

const Label = styled.label`
margin-bottom:${(p) => (p.mgBottom ? "150px" : "")};
`;

export default function BoxContact() {
    return (
        <Wrap>
            <PrimaryText alignSm>
                <Tertairy>Get In Touch</Tertairy>
                <SubHeading widthSm="100%" center mgBottom="30px" color="#608985" width="50rem">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</SubHeading>
            </PrimaryText>
            <BoxContactEl>
                <AddressWrap>
                    <ContactInfo icon1={MsgIconWhite} icon2={Marker} icon3={phoneIconWhite} />
                </AddressWrap>
                <InfoInputWrap>
                    <InfoInputItems>
                        <InfoInputItem width="35%">
                            <Label>Your Name</Label>
                            <Input MarginLeft="3px" type="text" placeholder="Whitegod Kingsley" />
                        </InfoInputItem>
                        <InfoInputItem width="35%">
                            <Label>Your Email</Label>
                            <Input MarginLeft="3px" type="text" placeholder="WhitegodKingsley@gmail.com" />
                        </InfoInputItem>
                    </InfoInputItems>
                    <InfoInputItem width="85%" margin>
                        <SubjectWrap marginBottom>
                            <Label>Your Subject</Label>
                            <Input width="100%" Maxwidth="37.9rem" type="text" placeholder="Consulting service my NNL project" />
                        </SubjectWrap>
                        <SubjectWrap>
                            <Label mgBottom>Your Subject</Label>
                            <TextArea></TextArea>
                        </SubjectWrap>
                    </InfoInputItem>
                    <ButtonStyled>Send Request</ButtonStyled>
                </InfoInputWrap>
            </BoxContactEl>
        </Wrap>
    )
}
