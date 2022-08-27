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
import { useFormik } from "formik"

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
    @media(max-width:490px){
         width:100%;
    }
    @media(max-width:420px){
        width:115%;
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
    @media(max-width:490px){
        width:86%;
    }
    @media(max-width:420px){
        width:73%;
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
    height: 25rem;
    display: flex;
    flex-direction: column;
    margin: 100px 16px;

    @media(max-width:420px){
        width:73%;
         height: 28rem;
    }
`;

const InfoInputItems = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 30px;

    @media(max-width:420px){
       margin-left:20px;
       flex-direction:column;
    }
`;

const InfoInputItem = styled.div`
    margin: ${(p) => (p.margin ? "0 auto" : "")};
    width: ${(p) => (p.width ? p.width : "")};;
   display: flex;
    flex-direction: column;
    justify-content: center;

    @media(max-width:420px){
        width:86%;
        margin-top:15px;
    }
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

const Error = styled.div`
 font-size: 12px;
  color: rgb(122, 12, 22);
  margin-bottom: 10px;
`;

export default function BoxContact() {

    const validate = values => {
        const errors = {}

        if (!values.name) {
            errors.name = "Required"
        } else if (values.name.length < 4) {
            errors.name = "Name must be 4 or more characters"
        }
        if (!values.email) {
            errors.email = "Required"
        } else if (values.email.length < 5) {
            errors.email = "Name must be 5 or more characters"
        }
        if (!values.subject) {
            errors.subject = "Required"
        } else if (values.subject.length < 4) {
            errors.subject = "Name must be 4 or more characters"
        }
        if (!values.textarea) {
            errors.textarea = "Required"
        }

        return errors
    }

    const formik = useFormik({
        initialValues: {
            name: "",
            email: '',
            subject: "",
            textarea: ''
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2))
        }
    })
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
                    <form onSubmit={formik.handleSubmit}>
                        <InfoInputItems>
                            <InfoInputItem width="35%">
                                <Label>Your Name</Label>
                                <Input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} MarginLeft="3px" type="text" id="name" name="name" placeholder="Whitegod Kingsley" />
                                {formik.touched.name && formik.errors.name ? <Error>{formik.errors.name}</Error> : null}
                            </InfoInputItem>
                            <InfoInputItem width="35%">
                                <Label>Your Email</Label>
                                <Input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} MarginLeft="3px" type="email" id="email" name="email" placeholder="WhitegodKingsley@gmail.com" />
                                {formik.touched.name && formik.errors.email ? <Error>{formik.errors.email}</Error> : null}
                            </InfoInputItem>
                        </InfoInputItems>
                        <InfoInputItem width="85%" margin>
                            <SubjectWrap marginBottom>
                                <Label>Your Subject</Label>
                                <Input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.subject} type="text" id="subject" name="subject" width="100%" Maxwidth="37.9rem" placeholder="Consulting service my NNL project" />
                                {formik.touched.name && formik.errors.subject ? <Error>{formik.errors.subject}</Error> : null}
                            </SubjectWrap>
                            <SubjectWrap>
                                <Label mgBottom>Your Subject</Label>
                                <TextArea onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.textarea} type="text" name="textarea" id="textarea"></TextArea>
                                {formik.touched.name && formik.errors.textarea ? <Error>{formik.errors.textarea}</Error> : null}
                            </SubjectWrap>
                        </InfoInputItem>
                        <ButtonStyled>Send Request</ButtonStyled>
                    </form>
                </InfoInputWrap>
            </BoxContactEl>
        </Wrap >
    )
}
