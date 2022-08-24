import styled from "styled-components";
import Colors from "../../Colors";
import Paragraphs from "./Paragraphs";

const TextParaEl = styled(Paragraphs)`
display: flex;
align-items: center;
text-transform: capitalize;
color:${Colors.TEXT};
width:525px;
`;

export default function TextPara({ text }) {
    return (
        <TextParaEl>{text}</TextParaEl>
    )
}
