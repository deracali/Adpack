import styled from "styled-components";
import Colors from "../../Colors";

const BannerEl = styled.div`
background:${(p) => (p.color ? p.color : "#E5FBF8")};
height: 31.5rem;
padding:${(p) => (p.padding ? "0 50px" : "")};

@media(max-width:438px){
    height: 22.5rem;
    }
`;

export default BannerEl;
