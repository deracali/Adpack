import styled from "styled-components";

const Content = styled.section`
margin:  ${(p) => (p.margin ? p.margin : "150px 0 80px 0")};

@media(max-width:1150px){
    margin:  ${(p) => (p.marginSm ? p.marginSm : "150px 0 80px 0")};
}

@media(max-width:600px){
    margin:  ${(p) => (p.marginSm ? "50px" : "150px 0 80px 0")};
}
`;
export default Content;
