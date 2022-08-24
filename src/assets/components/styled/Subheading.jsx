import styled from "styled-components";
import Colors from "../../Colors";
import Paragraphs from "./Paragraphs";

const SubHeading = styled(Paragraphs)`
width:${(p) => (p.width ? p.width : "")};
color:${(p) => (p.color ? p.color : "")};
margin-bottom:${(p) => (p.mgBottom ? p.mgBottom : "")};
text-align:${(p) => (p.center ? "center" : "")};
`;

export default SubHeading;