import styled from "styled-components";
import Colors from "../../../Colors";

const ButtonEl = styled.button`
    padding: 15px;
    border: none;
    background-color: ${(p) => (p.btnBgColor ? "#FFF" : "#19776E")};
    color:${(p) => (p.btnColor ? "#19776E" : "#FFF")};
    cursor:pointer;
    width:${(p) => (p.btnWidth ? p.btnWidth : "")};
    margin:${(p) => (p.btnMargin ? p.btnMargin : "")};
`;



export default ButtonEl;
