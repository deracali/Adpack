import styled from "styled-components"
import Colors from "../../../Colors"
import Content from "../../styled/Content"
import PrimaryText from "../../styled/PrimaryText";
import Tertairy from "../../styled/Tertairyh3"
import Paragraphs from "../../styled/Paragraphs";
const ContentEl = styled(Content)``;

const ResultWrap = styled.div`
display: grid;
    grid-template-columns: repeat(3,1fr);
    place-items: center;
    text-align: center;`;

const ResultItem = styled.div``;

const Text = styled(Paragraphs)`
color: ${(p) => (p.color ? p.color : "")};
font-size:${(p) => (p.size ? p.size : "")}
`;


export default function Result() {
    return (
        <ContentEl>
            <PrimaryText>
                <Tertairy size="64px" weight="500">Through collaboration with our partners, we always strive for remakrable results.</Tertairy>
            </PrimaryText>
            <ResultWrap>
                <ResultItem>
                    <Text size="42px">30+</Text>
                    <Text color="#2441BA">Happy Clients</Text>
                </ResultItem>
                <ResultItem>
                    <Text size="42px">
                        89+
                    </Text>
                    <Text>Projects delivered</Text>
                </ResultItem>
                <ResultItem>
                    <Text size="42px">$700m</Text>
                    <Text color="#2441BA">Clients Fundings</Text>
                </ResultItem>
            </ResultWrap>
        </ContentEl>
    )
}
