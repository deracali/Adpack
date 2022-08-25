import styled from "styled-components";
import Colors from "../../../Colors";
import BannerEl from "../../styled/BannerStyled"
import Tertairy from "../../styled/Tertairyh3";
import PrimaryText from "../../styled/PrimaryText";
import Paragraphs from "../../styled/Paragraphs";
import ButtonEl from "../../styled/ButtonStyled/ButtonStyled";

const BannerColoredStyled = styled(BannerEl)`
background: linear-gradient(277.28deg, #00359B 0.51%, #19776E 73.36%);
display: grid;
place-content: center;
padding: 30px;
`;

const ButtonStyled = styled(ButtonEl)``;

const Wrap = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    column-gap:50px;

    @media(max-width:700px){
         grid-template-columns:1fr;
         width:50%;
         margin:0 auto;
    }
`;

const TextItem = styled.div``;

const Text = styled(Paragraphs)`
color:${Colors.White};
`;

export default function BannerColored() {
    return (
        <>
            <BannerColoredStyled>
                <Wrap>
                    <PrimaryText align>
                        <Tertairy size="64px" weight="500" color="#FFFFFF" >Improvized</Tertairy>
                        <Tertairy size="64px" weight="500" color="#FFF386" mgLeft="60px">Cross - Sector</Tertairy>
                        <Tertairy size="64px" weight="500" color="#FFFFFFCC" mgLeft="160px">Collaboration</Tertairy>
                    </PrimaryText>
                    <TextItem>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis ridiculus est nisl donec. Risus tempus, elit turpis quam quam. Morbi libero varius non sed non vulputate.
                        </Text>
                        <ButtonStyled btnBgColor btnColor>Request Consultant</ButtonStyled>
                    </TextItem>
                </Wrap>
            </BannerColoredStyled>
        </>
    )
}
