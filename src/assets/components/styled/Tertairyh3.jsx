import styled from "styled-components";
import Colors from "../../Colors";

const Tertairy = styled.h3`
font-weight:${(p) => (p.weight ? p.weight : "700")};
font-size:${(p) => (p.size ? p.size : "40px")};
color:${(p) => (p.color ? p.color : "")};
width:${(p) => (p.width ? "428px" : "")};
margin-left:${(p) => (p.mgLeft ? p.mgLeft : "0px")};

   @media(max-width:1183px){
       margin-left:${(p) => (p.mgLeftSm ? p.mgLeftSm : "0px")};
   font-size:${(p) => (p.sizeSm ? p.sizeSm : "40px")};
    }
   @media(max-width:490px){
       margin-left:${(p) => (p.mgLeftSm ? p.mgLeftSm : "0px")};
        font-size:${(p) => (p.sizeSml ? p.sizeSml : "1.5rem")};
    }
`;



export default Tertairy;