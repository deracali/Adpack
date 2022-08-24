import styled from "styled-components";
import Colors from "../../Colors";


const SecondaryTextEl = styled.h2`
font-family: 'Inter';
font-style: normal;
font-weight: ${(p) => (p.weight ? p.weight : "700")};
font-size: 64px;
line-height: 64px;
color:${Colors.BOLD};
width: ${(p) => (p.width ? p.width : "740px")};
`;

export default function SecondaryText({ width, weight, headingtext }) {
    return (
        <SecondaryTextEl>{headingtext}</SecondaryTextEl>

    )
}