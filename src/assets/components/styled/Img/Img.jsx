import styled from "styled-components";

const Img = styled.img`
  width: ${(p) => (p.width ? p.width : "100%")};
  height: ${(p) => (p.height ? p.height : "")};
  object-fit: ${(p) => (p.objFit ? p.objFit : "contain")};

@media(max-width:1180px){
   width: ${(p) => (p.width ? p.width : "100%")};
}
  `;


export default Img;