import styled from "styled-components";
import Colors from "../../Colors";
import Paragraphs from "./Paragraphs";

const TextParaEl = styled(Paragraphs)`
display: flex;
align-items: center;
text-transform: capitalize;
color:${Colors.TEXT};
width:32.8rem;

@media(max-width:1078px){
    width:100%;
}
`;

export default function TextPara({ text }) {
    return (
        <TextParaEl>{text}</TextParaEl>
    )
}
