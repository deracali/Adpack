import styled from "styled-components";

const Paragraphs = styled.p`
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: max(1rem, 0.2vw);
line-height: 24px;
margin:${(p) => (p.margin ? p.margin : "1.5rem 0")};
`;

export default Paragraphs;
