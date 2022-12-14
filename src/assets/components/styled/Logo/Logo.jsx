import styled from "styled-components"
import Paragraphs from "../Paragraphs";
import Colors from "../../../Colors";

const TopMenuLogo = styled(Paragraphs)`
font-weight:900;
font-size:32px;
line-height:39px;
color:${Colors.Primary};

@media(max-width:1070px){
    display:${(p) => (p.display ? "none" : "")};
    }
`;


export default function Logo({ text }) {
    return (
        <TopMenuLogo>{text}</TopMenuLogo>
    )
}
