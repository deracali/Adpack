import styled from "styled-components";
import Colors from "../../../Colors";
import Paragraphs from "../Paragraphs";


const BoxEl = styled.div`
width: 43.2rem;
position: absolute;
    height: 47.6rem;
    left: 30.4rem;
    z-index: -1;
background: ${Colors.Primary};

  @media (max-width: 1130px) {
    width: 38rem;
    height: 44.6rem;
    left: 24rem;
  }
`;

const Wrap = styled.div``;

const Text = styled(Paragraphs)`
position: absolute;
width: 32.9rem;
    height: 240px;
    left: 6.9rem;
    top: 11.8rem;
    font-style: italic;
    font-weight: 800;
    font-size: 2rem;
    line-height: 40px;
    display: flex;
    align-items: center;
    color: ${Colors.White};

    @media(max-width:1038px){
        width:22.9rem;
    }
`;

const Title = styled.div`
position: absolute;
    left: 7.3rem;
    top: 39.6rem;
    line-height: 29px;
    color: ${Colors.White};
`;


const Name = styled(Paragraphs)`
display:block;
font-weight: 700;
    font-size: 24px;
`;


const Position = styled(Paragraphs)`
color:#EFEFEF;
font-weight: 500;
font-size: 16px;
line-height: 19px;
`;

export default function Box() {
    return (
        <BoxEl>
            <Wrap>
                <Text>
                    “Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.”
                </Text>
                <Title>
                    <Name margin="0 0">
                        Jane Cooper
                    </Name>
                    <Position margin="0.5rem 0">
                        Founder & CEO
                    </Position>
                </Title>
            </Wrap>
        </BoxEl>
    )
}
