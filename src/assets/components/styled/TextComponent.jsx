import styled from "styled-components"
import Colors from "../../Colors"
import Paragraphs from "./Paragraphs";
import SecondaryText from "./SecondaryText";
import TextPara from "./TextPara";

const TextItem = styled.div``;

export default function TextComponent() {
    return (
        <>
            <TextItem>
                <SecondaryText headingtext="Adpack business consulting solutions" />
                <TextPara margin="1.5rem 0" text="sME consultants specialised in the establishment and management of business industries, project management, company re-organization and restructuring" />
            </TextItem>
        </>
    )
}
