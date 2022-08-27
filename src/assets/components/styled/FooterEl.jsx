import styled from "styled-components";

const FooterEl = styled.div`
justify-content: unset;
height:900px;
margin-top:${(p) => (p.mgTop ? "170px" : "")};
`;

export default FooterEl;
