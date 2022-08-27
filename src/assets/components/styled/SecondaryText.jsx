import styled from "styled-components";
import Colors from "../../Colors";


const SecondaryTextEl = styled.h2`
font-family: 'Inter';
font-style: normal;
font-weight: ${(p) => (p.weight ? p.weight : "700")};
 font-size: clamp(2.8rem, 2.5vw, 1.8rem);
line-height: 64px;
color:${Colors.BOLD};

@media(max-width:490px){
    font-size:1.5rem;
}
`;

export default function SecondaryText({ width, weight, headingtext }) {
    return (
        <SecondaryTextEl>{headingtext}</SecondaryTextEl>

    )
}